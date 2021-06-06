import React from 'react';
import { Text, View, SafeAreaView, ScrollView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import { Button } from '../../../components';

const Home = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView contentContainerStyle={styles.mainView}>
				<View>
					<Text>Dashboard in Progress</Text>
					<Text onPress={() => navigation.navigate('Splash')}>
						<AntDesign name={'arrowleft'} size={24} /> Go to Main
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
