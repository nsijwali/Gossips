import React, { useEffect, useState, useLayoutEffect } from 'react';
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
import { db, auth } from '../../../../firebase';

const Chat = ({ navigation, route }) => {
	const [chat, setChat] = useState('');
	const [text, setText] = useState('');
	const [messageList, setMessageList] = useState([]);

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
	const timeStampConverter = (stamp) => {
		let unix_timestamp = stamp;
		// Create a new JavaScript Date object based on the timestamp
		// multiplied by 1000 so that the argument is in milliseconds, not seconds.
		let date = new Date(unix_timestamp * 1000);
		// Hours part from the timestamp
		let hours = date.getHours();
		let prefix = hours >= '12' ? 'PM' : 'AM';
		// Minutes part from the timestamp
		let minutes = '0' + date.getMinutes();
		// Seconds part from the timestamp
		let seconds = '0' + date.getSeconds();

		// Will display time in 10:30:23 format
		let formattedTime = hours + ':' + minutes.substr(-2) + ' ' + prefix;

		return formattedTime;
	};

	const dateConverter = (stamp) => {
		let unix_timestamp = stamp;
		// Create a new JavaScript Date object based on the timestamp
		// multiplied by 1000 so that the argument is in milliseconds, not seconds.
		let date = new Date(unix_timestamp * 1000);
		let newDate =
			date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
		return newDate;
	};
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
		console.log('messageList', messageList);
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
					<ScrollView>
						{messageList.map(({ data, id }) =>
							auth.currentUser.displayName === data.displayName ? (
								<View key={id} style={styles.receiver}>
									<Text style={styles.userText}>{data.displayName}</Text>
									<Text style={styles.currentUserText}>{data.message}</Text>
								</View>
							) : (
								<View key={id} style={styles.sender}>
									<Text style={styles.userText}>{data.displayName}</Text>
									<Text style={styles.receivedText}>{data.message}</Text>
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
