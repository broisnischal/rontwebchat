import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyBaxbrsL0S8Yt9bDMBob6womQjqIXRHbrg',
	authDomain: 'chatwithront.firebaseapp.com',
	projectId: 'chatwithront',
	storageBucket: 'chatwithront.appspot.com',
	messagingSenderId: '309841037287',
	appId: '1:309841037287:web:cff34aac6b7c3a435cdf42',
	measurementId: 'G-DYXMWG5NCD',
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
