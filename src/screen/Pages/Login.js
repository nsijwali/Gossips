import React, { useState } from 'react';
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
import { Button } from '../../components';
import styles from './styles';

const Login = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
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
						<TextInput
							value={password}
							placeholder='*******'
							onChangeText={(text) => setPassword(text)}
							style={styles.textInputStyles}
							secureTextEntry={true}
							autoCorrect={false}
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
					<Button
						text='Sign In'
						disabled={false}
						onPress={() => navigation.navigate('Home')}
					/>
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
