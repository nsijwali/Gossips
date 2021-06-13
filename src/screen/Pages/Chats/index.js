import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	View,
	VirtualizedList,
	StyleSheet,
	Text,
	StatusBar,
	FlatList,
	TouchableOpacity,
} from 'react-native';
import { db } from '../../../../firebase';
import styled from './styles';

const Chats = ({ navigation }) => {
	const [chatList, setChatList] = useState([]);

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
					})),
				);
			});
	}, []);

	useEffect(() => {
		console.log('list -->>', chatList);
	}, [chatList]);

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
				<View style={styled.topView}>
					<Text style={styles.title}>{title.chatName}</Text>
					<Text style={styled.primaryText}>{title.timestamp}</Text>
				</View>
				<Text style={styled.primaryText} numberOfLines={1} ellipsizeMode='tail'>
					Since the user object is in the URL, it's possible to pass a random
					user object representing a user which doesn't exist, or has incorrect
					data in the profile
				</Text>
			</View>
		</TouchableOpacity>
	);
	return (
		<SafeAreaView style={styles.container}>
			{/* <VirtualizedList
				data={chatList}
				renderItem={(item) => <Item title={item} />}
				keyExtractor={(item) => item.id}
				getItemCount={getItemCount}
				getItem={getItem}
			/> */}
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
		padding: 20,
	},
	title: {
		fontSize: 16,
	},
	subtitle: {
		fontSize: 12,
	},
});

export default Chats;
