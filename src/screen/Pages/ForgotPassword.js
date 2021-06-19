import React, { useLayoutEffect, useState } from 'react';
import {
	View,
	TextInput,
	TouchableOpacity,
	Text,
	Alert,
	Platform,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Pages/Chats/styles';
import { auth } from '../../../firebase';

const ForgotPassword = ({ navigation }) => {
	const [addChat, setNewChat] = useState('');
	const [error, setError] = useState('');

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Forgot Password',
			headerShown: true,
			headerStyle: {
				backgroundColor: 'white',
			},
			headerBackTitle: 'Chats',
			headerTitleStyle: { color: 'black' },
			headerTintColor: {
				color: 'black',
			},
		});
	}, [navigation]);

	const emailSent = () => {
		Alert.alert('Success', 'password reset mail sent.', [
			{
				text: 'OK',
				onPress: () => {
					navigation.goBack();
					setNewChat('');
				},
			},
		]);
	};

	const addChatHandler = () => {
		if (addChat.trim() !== '') {
			setError('');
			auth
				.sendPasswordResetEmail(addChat)
				.then(() => {
					if (Platform.OS === 'web') {
						navigation.goBack();
						alert('password reset mail sent.');
					} else {
						emailSent();
					}
				})
				.catch((error) => console.log('db error', error));
		} else {
			setError('Provide an email address');
			setTimeout(() => {
				setError('');
			}, 3000);
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.addChatView}>
				<TextInput
					value={addChat}
					placeholder='Type your email address'
					onChangeText={(text) => {
						setNewChat(text);
						setError('');
					}}
					autoCorrect={false}
					style={styles.textInputStyles}
					onSubmitEditing={addChatHandler}
				/>
				<TouchableOpacity activeOpacity={0.5}>
					<MaterialCommunityIcons
						name={'send-circle'}
						size={48}
						color='blue'
						onPress={addChatHandler}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.addTextView}>
				<Text style={styles.errorText}>{error}</Text>
			</View>
		</View>
	);
};

export default ForgotPassword;
