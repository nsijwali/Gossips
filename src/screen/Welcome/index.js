import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Button } from '../../components';
import styles from './styles';

function index(props) {
	const { navigation } = props;
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setVisible(true);
		}, 2000);
	}, []);
	return (
		<SafeAreaView style={styles.container}>
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
		</SafeAreaView>
	);
}

export default index;
