import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../src/screen/Welcome';
import { Login, CreateAccount, Home, Chat } from '../src/screen/auth';

const RootNavigation = () => {
	const Stack = createStackNavigator();
	const screenOptions = {
		headerShown: false,
	};
	const homeScreenOptions = {
		headerStyle: { backgroundColor: '#2C6BED' },
		headerTitleStyle: { color: '#fff' },
		headerTintColor: {
			color: '#fff',
		},
	};
	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={screenOptions}>
				<Stack.Screen name='Splash' component={Welcome} />
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='CreateAccount' component={CreateAccount} />
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Chat' component={Chat} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigation;
