import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyDVv-pM1P773bvOZLGuT-Ri0VO44F0-FAo',
	authDomain: 'coinbase-dopple.firebaseapp.com',
	projectId: 'coinbase-dopple',
	storageBucket: 'coinbase-dopple.appspot.com',
	messagingSenderId: '436851222384',
	appId: '1:436851222384:web:db0b2700c27f23f7e311b5',
};

let app;
// if (firebase.app.length === 0) {
// 	app = firebase.initializeApp(firebaseConfig);
// } else {
// 	app = firebase.app();
// }
app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
