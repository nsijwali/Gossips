import React, { useState } from 'react';
import {
	View,
	Text,
	SafeAreaView,
	TextInput,
	ScrollView,
	TouchableWithoutFeedback,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button } from '../../../components';
import styles from '../styles';

const CreateAccount = ({ navigation }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.mainView}>
				<View>
					<Text style={styles.textStyle}>
						<AntDesign
							name={'arrowleft'}
							size={24}
							onPress={() => navigation.navigate('Splash')}
						/>{' '}
						Create your account
					</Text>

					<View style={styles.setMargin}>
						<Text style={styles.textStyle1}>First Name</Text>
						<TextInput
							value={firstName}
							placeholder='john'
							onChangeText={(text) => setFirstName(text)}
							style={styles.textInputStyles}
						/>
					</View>
					<View style={styles.setMargin}>
						<Text style={styles.textStyle1}>Last Name</Text>
						<TextInput
							value={lastName}
							placeholder='smith'
							onChangeText={(text) => setLastName(text)}
							style={styles.textInputStyles}
						/>
					</View>
					<View style={styles.setMargin}>
						<Text style={styles.textStyle1}>Email</Text>
						<TextInput
							value={email}
							placeholder='johnsmith@gmail.com'
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
					<View style={styles.section}>
						<Text style={styles.textStyle2}>
							I certify that I am 18 years of age and older, and I agree to the{' '}
							<TouchableWithoutFeedback>
								<Text style={styles.linkStyle2}>User Agreement</Text>
							</TouchableWithoutFeedback>{' '}
							and{' '}
							<TouchableWithoutFeedback>
								<Text style={styles.linkStyle2}>Privacy Policy</Text>
							</TouchableWithoutFeedback>
						</Text>
					</View>
				</View>
				<View style={styles.btnView}>
					<Button
						text='Sign Up'
						disabled={false}
						onPress={() => navigation.navigate('Home')}
					/>
					<TouchableWithoutFeedback>
						<Text
							style={styles.primaryText}
							onPress={() => navigation.navigate('Login')}
						>
							Already have an account.
						</Text>
					</TouchableWithoutFeedback>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default CreateAccount;
