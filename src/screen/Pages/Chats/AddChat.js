import React, { useLayoutEffect, useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import firebase from 'firebase';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { db, auth } from '../../../../firebase';
import { GlobalContext } from '../../../../GlobalContext';

const AddChat = ({ navigation }) => {
	const [addChat, setNewChat] = useState('');
	const [error, setError] = useState('');
	const { username, userPassword } = useContext(GlobalContext);

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Add a new Chat',
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

	const addChatHandler = () => {
		if (addChat.trim() !== '') {
			setError('');
			db.collection('chats')
				.add({
					chatName: addChat,
					timestamp: firebase.firestore.FieldValue.serverTimestamp(),
					user: auth?.currentUser?.displayName,
					passwrd: userPassword,
				})
				.then(() => {
					navigation.goBack();
				})
				.catch((error) => console.log('db error', error));
		} else {
			setError('Provide a chat name');
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
					placeholder='Type chat name'
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
						name={'check-circle'}
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

export default AddChat;
