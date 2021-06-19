import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	View,
	StyleSheet,
	Text,
	FlatList,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { db } from '../../../../firebase';
import { dateConverter, timeStampConverter } from '../../utils/formatter';
import styled from './styles';

const Chats = ({ navigation }) => {
	const [chatList, setChatList] = useState([]);

	useEffect(() => {
		db.collection('chats')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				setChatList(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						chatName: doc.data().chatName,
						timestamp: timeStampConverter(doc.data()?.timestamp?.seconds),
						date: dateConverter(doc.data()?.timestamp?.seconds),
						user: doc.data().user,
						lastMessage: doc.data()?.lastMessage || '',
					})),
				);
			});
	}, []);

	const Item = ({ title }) => (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={() => {
				navigation.navigate('Chat', {
					chat: title.chatName,
					id: title.id,
				});
			}}
		>
			<View style={styles.item} key={title.chatName}>
				<TouchableWithoutFeedback>
					<FontAwesome name={'user-circle'} size={40} color='grey' />
				</TouchableWithoutFeedback>
				<View style={styles.chatbox}>
					<View style={styled.topView}>
						<Text style={styles.title}>{title.chatName}</Text>
						<Text style={styled.primaryText}>{title.timestamp}</Text>
					</View>
					<Text
						style={styled.primaryText}
						numberOfLines={1}
						ellipsizeMode='tail'
					>
						{title.lastMessage}
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
	return (
		<SafeAreaView style={styles.container}>
			<FlatList
				data={chatList}
				renderItem={({ item }) => <Item title={item} />}
				keyExtractor={(item) => item.id}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	item: {
		backgroundColor: '#fff',
		height: 80,
		justifyContent: 'center',
		marginBottom: 8,
		paddingVertical: 20,
		paddingHorizontal: 35,
		flexDirection: 'row',
	},
	title: {
		fontSize: 16,
		fontWeight: '500',
	},
	subtitle: {
		fontSize: 12,
	},
	chatbox: {
		width: '100%',
		paddingLeft: 10,
	},
});

export default Chats;
