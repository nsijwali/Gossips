import React, { useState, useEffect } from 'react';
import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button, InputPassword } from '../../components';
import styles from './styles';
import { auth } from '../../../firebase';

const Login = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				navigation.replace('Home');
			}
		});
		return unsubscribe;
	}, []);

	const signInHanlder = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.catch((error) => alert(error.message));
	};
	// const passwordReset = (email) => auth.sendPasswordResetEmail(email);
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.mainView}>
				<View>
					<View>
						<Text style={styles.textStyle}>
							<AntDesign
								name={'arrowleft'}
								size={24}
								onPress={() => navigation.navigate('Splash')}
							/>{' '}
							Sign in to Coinbase
						</Text>
					</View>
					<View style={styles.setMargin}>
						<Text style={styles.textStyle1}>Email</Text>
						<TextInput
							value={email}
							placeholder='email'
							onChangeText={(text) => setEmail(text)}
							style={styles.textInputStyles}
						/>
					</View>
					<View style={styles.setMargin}>
						<Text style={styles.textStyle1}>Password</Text>
						<InputPassword
							password={password}
							setPassword={(text) => setPassword(text)}
							styles={styles.textInputStyles}
						/>
					</View>
					<View style={styles.flexRowView}>
						<TouchableOpacity style={styles.linkStyle}>
							<Text>Forgot password</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.linkStyle}>
							<Text>Privacy policy</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={styles.btnView}>
					<Button text='Sign In' disabled={false} onPress={signInHanlder} />
					<TouchableWithoutFeedback>
						<Text
							style={styles.primaryText}
							onPress={() => navigation.navigate('CreateAccount')}
						>
							Create an account.
						</Text>
					</TouchableWithoutFeedback>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Login;
