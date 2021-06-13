import React, { useLayoutEffect, useState, useContext } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import { db, auth } from '../../../../firebase';
import { GlobalContext } from '../../../../GlobalContext';

const AddChat = ({ navigation }) => {
	const [addChat, steNewChat] = useState('');
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
	};

	return (
		<View style={styles.container}>
			<View style={styles.addChatView}>
				<TextInput
					value={addChat}
					placeholder='Type chat name'
					onChangeText={(text) => steNewChat(text)}
					autoCorrect={false}
					style={styles.textInputStyles}
				/>
				<TouchableOpacity activeOpacity={0.5}>
					<MaterialCommunityIcons
						name={'chat-plus'}
						size={48}
						color='blue'
						onPress={addChatHandler}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default AddChat;
