import React, { createContext, useState, useEffect } from 'react';
import { auth } from './firebase';

export const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
	const [username, setuserName] = useState('');

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser?.displayName !== null) {
				setuserName(authUser?.displayName);
			}
		});
		return unsubscribe;
	}, [auth]);

	return (
		<GlobalContext.Provider value={{ username, setuserName }}>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextProvider;
