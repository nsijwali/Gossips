import React, { useEffect, useState, useContext } from 'react';
import { Text, View, RefreshControl, SafeAreaView } from 'react-native';
import { Button } from '../../components';
import styles from './styles';
import { auth } from '../../../firebase';
import { ScrollView } from 'react-native-gesture-handler';
import { GlobalContext } from '../../../GlobalContext';

function index(props) {
	const { navigation } = props;
	const [visible, setVisible] = useState(false);
	const [refreshing, setRefreshing] = React.useState(false);
	const { username } = useContext(GlobalContext);

	const onRefresh = () => {
		setRefreshing(true);
		setTimeout(() => {
			setRefreshing(false);
		}, 1000);
	};

	useEffect(() => {
		if (username === '') {
			setTimeout(() => {
				setVisible(true);
			}, 2000);
		}
	}, [username]);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
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
					<Text style={styles.textStyle}>Gossips</Text>
					{visible && (
						<View style={styles.bottomView}>
							<Button
								text='Sign Up'
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
