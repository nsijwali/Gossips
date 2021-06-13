import React, { useEffect, useState, useLayoutEffect } from 'react';
import {
	View,
	Text,
	TextInput,
	SafeAreaView,
	KeyboardAvoidingView,
	TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const Chat = ({ navigation, route }) => {
	const [chat, setChat] = useState('');
	const [text, setText] = useState('');

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Chat',
			headerShown: true,
			headerStyle: {
				backgroundColor: 'white',
			},
			headerTitleStyle: { color: '#000', textAlign: 'center' },
			headerTintColor: {
				color: '#000',
			},
			// headerRight: () => (
			// 	<View style={{ paddingRight: 20 }}>
			// 		<TouchableOpacity activeOpacity={0.5} onPress={signOutHandler}>
			// 			<AntDesign name={'logout'} size={24} />
			// 		</TouchableOpacity>
			// 	</View>
			// ),
			// headerLeft: () => (
			// 	<View style={{ paddingLeft: 20 }}>
			// 		<Text>Hello, {auth.currentUser.displayName || username}</Text>
			// 	</View>
			// ),
		});
	}, [navigation]);

	useEffect(() => {
		if (route.params.chat) {
			setChat(route.params.chat);
		}
	}, [route.params?.chat]);
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.mainView}>
				<Text>{chat}</Text>
				{/* <KeyboardAvoidingView> */}
				<View style={styles.textView}>
					<TextInput
						value={text}
						placeholder='enter your message'
						onChangeText={(text) => setText(text)}
						autoCorrect={false}
						style={styles.textInputStyles}
					/>
					{/* </KeyboardAvoidingView> */}
					<TouchableOpacity activeOpacity={0.5}>
						<MaterialCommunityIcons
							name={'send-circle'}
							size={48}
							color='blue'
							// onPress={() => navigation.navigate('Splash')}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Chat;
