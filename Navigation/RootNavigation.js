import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../src/screen/Welcome';
import { Login, CreateAccount, Home, Chat, AddChat } from '../src/screen/auth';

const RootNavigation = () => {
	const Stack = createStackNavigator();
	const screenOptions = {
		headerShown: false,
	};

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={screenOptions}>
				<Stack.Screen name='Splash' component={Welcome} />
				<Stack.Screen name='Login' component={Login} />
				<Stack.Screen name='CreateAccount' component={CreateAccount} />
				<Stack.Screen name='Home' component={Home} />
				<Stack.Screen name='Chat' component={Chat} />
				<Stack.Screen name='AddChat' component={AddChat} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigation;
