import React, { useEffect, useState, useContext } from 'react';
import { Text, View, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Button } from '../../components';
import styles from './styles';
import { auth } from '../../../firebase';
import { ScrollView } from 'react-native-gesture-handler';

function index(props) {
	const { navigation } = props;
	const [visible, setVisible] = useState(false);
	const [refreshing, setRefreshing] = React.useState(false);

	const onRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 1000);
	};

	useEffect(() => {
		setVisible(true);
	}, []);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				console.log('wel', authUser.displayName);
				navigation.replace('Home');
			}
		});
		return unsubscribe;
	}, [navigation]);

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.mainView}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<View style={styles.mainView}>
					<Text style={styles.textStyle}>Coinbase</Text>
					<Text style={styles.textStyle}>Clone</Text>
					{visible && (
						<View style={styles.bottomView}>
							<Button
								text='Get Started'
								disable={false}
								btnStyle={styles.btnStyle}
								btnTextStyle={styles.btnTextStyle}
								onPress={() => navigation.navigate('CreateAccount')}
							/>
							<Button
								text='Sign In'
								disable={false}
								btnTextStyle={styles.btnStyle2}
								onPress={() => navigation.navigate('Login')}
							/>
						</View>
					)}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}

export default index;
