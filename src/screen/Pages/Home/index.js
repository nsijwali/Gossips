import React, { useContext, useLayoutEffect } from 'react';
import {
	Text,
	View,
	SafeAreaView,
	ScrollView,
	RefreshControl,
	TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Chats from '../Chats';
import styles from './styles';
import { auth } from '../../../../firebase';
import { GlobalContext } from '../../../../GlobalContext';

const Home = ({ navigation }) => {
	const [refreshing, setRefreshing] = React.useState(false);
	const { username, setuserName } = useContext(GlobalContext);

	const signOutHandler = () => {
		auth.signOut().then(() => {
			setuserName('');
			navigation.replace('Splash');
		});
	};
	const createChat = () => {
		navigation.navigate('AddChat');
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: 'Gossips',
			headerShown: true,
			headerStyle: {
				backgroundColor: 'white',
			},
			headerTitleStyle: { color: 'black', textAlign: 'center' },
			headerTintColor: {
				color: 'black',
			},
			headerRight: () => (
				<View style={{ paddingRight: 20, flexDirection: 'row' }}>
					<TouchableOpacity activeOpacity={0.5} onPress={signOutHandler}>
						<AntDesign name={'logout'} size={24} />
					</TouchableOpacity>
				</View>
			),
			headerLeft: () => (
				<View style={{ paddingLeft: 20 }}>
					<Text>Hello, {auth?.currentUser?.displayName || username}</Text>
				</View>
			),
		});
	}, [navigation]);

	const onRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 1000);
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.mainView}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<View>
					<Chats navigation={navigation} />
				</View>
				<View style={styles.floatingIcon}>
					<TouchableOpacity activeOpacity={0.5} onPress={createChat}>
						<Ionicons name={'chatbox-outline'} size={30} color='white' />
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
