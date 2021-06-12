import { StatusBar } from 'expo-status-bar';
import React from 'react';
import GlobalContextProvider from './GlobalContext';
import RootNavigation from './Navigation/RootNavigation';

export default function App() {
	return (
		<>
			<GlobalContextProvider>
				<RootNavigation />
				<StatusBar style='auto' />
			</GlobalContextProvider>
		</>
	);
}
