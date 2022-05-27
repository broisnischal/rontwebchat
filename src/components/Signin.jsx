import React from 'react';
import firebase from 'firebase/compat/app';
import { auth } from '../firebase';

function Signin() {
	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		auth.signInWithPopup(provider);
	};

	return (
		<div id='signinpage'>
			Routine of Nepal Technology
			<button className='sign-in' onClick={signInWithGoogle}>
				Sign in with google
			</button>
		</div>
	);
}

export default Signin;
