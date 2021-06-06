import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Welcome from './src/screen/Welcome';
import RootNavigation from './Navigation/RootNavigation';

export default function App() {
	return (
		<>
			<RootNavigation />
			<StatusBar style='auto' />
		</>
	);
}
