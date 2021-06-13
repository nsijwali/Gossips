import React from 'react';
import {
	SafeAreaView,
	View,
	VirtualizedList,
	StyleSheet,
	Text,
	StatusBar,
	TouchableOpacity,
} from 'react-native';

const DATA = [];

const getItem = (data, index) => ({
	id: Math.random().toString(12).substring(0),
	title: `Chat ${index + 1}`,
});

const getItemCount = (data) => 3;

const Chats = ({ navigation }) => {
	const Item = ({ title }) => (
		<TouchableOpacity
			activeOpacity={0.5}
			onPress={() => {
				navigation.navigate('Chat', { chat: title });
			}}
		>
			<View style={styles.item} key={title}>
				<Text style={styles.title}>{title}</Text>
			</View>
		</TouchableOpacity>
	);
	return (
		<SafeAreaView style={styles.container}>
			<VirtualizedList
				data={DATA}
				initialNumToRender={4}
				renderItem={({ item }) => <Item title={item.title} />}
				keyExtractor={(item) => item.key}
				getItemCount={getItemCount}
				getItem={getItem}
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
		fontSize: 20,
	},
});

export default Chats;
