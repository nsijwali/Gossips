import React, { useEffect, useState, useLayoutEffect, useRef } from 'react';
import {
	View,
	Text,
	TextInput,
	SafeAreaView,
	KeyboardAvoidingView,
	TouchableOpacity,
	Platform,
	ScrollView,
	StatusBar,
	Keyboard,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import firebase from 'firebase';
import styles from './styles';
import { dateConverter, timeStampConverter } from '../../utils/formatter';
import { db, auth } from '../../../../firebase';

const Chat = ({ navigation, route }) => {
	const [chat, setChat] = useState('');
	const [text, setText] = useState('');
	const [messageList, setMessageList] = useState([]);
	const scrollViewRef = useRef(null);

	useLayoutEffect(() => {
		navigation.setOptions({
			title: auth?.currentUser.displayName,
			headerShown: true,
			headerBackTitle: 'Chats',
			headerStyle: {
				backgroundColor: 'white',
			},
			headerTitleStyle: { color: 'black' },
			headerTintColor: {
				color: 'black',
			},
		});
	}, [route.params.chat]);

	useEffect(() => {
		if (route.params.chat) {
			setChat(route.params.chat);
		}
	}, [route.params?.chat]);

	useLayoutEffect(() => {
		const unsubscribe = db
			.collection('chats')
			.doc(route.params.id)
			.collection('message')
			.orderBy('timestamp', 'asc')
			.onSnapshot((snapshot) =>
				setMessageList(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
						timestamp: timeStampConverter(doc.data()?.timestamp?.seconds),
						date: dateConverter(doc.data()?.timestamp?.seconds),
					})),
				),
			);

		return unsubscribe;
	}, [route]);

	useEffect(() => {
		scrollViewRef.current.scrollToEnd({ animated: true });
	}, [messageList]);

	const onEnter = () => {
		Keyboard.dismiss();
		if (text.trim() !== '') {
			db.collection('chats').doc(route.params.id).collection('message').add({
				message: text,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
				displayName: auth?.currentUser?.displayName,
			});
		}
		setText('');
		db.collection('chats').doc(route.params.id).set({
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			lastMessage: text,
			chatName: route.params.chat,
			user: auth?.currentUser?.displayName,
		});
	};

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style='light' />
			<KeyboardAvoidingView
				behavior={Platform.OS === 'iso' ? 'padding' : 'height'}
				keyboardVerticalOffset={90}
				style={styles.keyboard}
			>
				<>
					<ScrollView ref={scrollViewRef}>
						{messageList.map(({ data, id, timestamp }) =>
							auth.currentUser.displayName === data.displayName ? (
								<View key={id} style={styles.receiver}>
									<View style={styles.userTop}>
										<Text style={styles.userText}>{data.displayName}</Text>
									</View>

									<Text style={styles.currentUserText}>{data.message}</Text>
									<View style={styles.userTopRight}>
										<Text style={styles.userText}>{timestamp}</Text>
									</View>
								</View>
							) : (
								<View key={id} style={styles.sender}>
									<View style={styles.userTop}>
										<Text style={styles.userText}>{data.displayName}</Text>
									</View>

									<Text style={styles.receivedText}>{data.message}</Text>
									<View style={styles.userTopRight}>
										<Text style={styles.userText}>{timestamp}</Text>
									</View>
								</View>
							),
						)}
					</ScrollView>
					<View style={styles.footer}>
						<TextInput
							value={text}
							placeholder='Type your message'
							onChangeText={(text) => setText(text)}
							autoCorrect={false}
							style={styles.btnView}
							onSubmitEditing={onEnter}
						/>

						<TouchableOpacity activeOpacity={0.5}>
							<MaterialCommunityIcons
								name={'send-circle'}
								size={48}
								color='blue'
								onPress={onEnter}
							/>
						</TouchableOpacity>
					</View>
					<View style={{ paddingBottom: 5 }} />
				</>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default Chat;
