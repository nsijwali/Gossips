import React, { useContext } from 'react';
import {
	Text,
	View,
	SafeAreaView,
	ScrollView,
	RefreshControl,
} from 'react-native';

import styles from './styles';
import { Button } from '../../../components';
import { auth } from '../../../../firebase';
import { GlobalContext } from '../../../../GlobalContext';

const Home = ({ navigation }) => {
	const [refreshing, setRefreshing] = React.useState(false);
	const { username } = useContext(GlobalContext);

	const onRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 1000);
	};

	const signOutHandler = () => {
		auth.signOut().then(() => {
			navigation.replace('Splash');
		});
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
					<Text>Welcome, {username}</Text>
				</View>
				<Button
					text='Logout'
					disable={false}
					btnTextStyle={styles.btnStyle2}
					onPress={signOutHandler}
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
