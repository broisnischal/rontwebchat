import React, { useState, useEffect, useRef } from 'react';
import Signout from './Signout';
import { db, auth } from '../firebase';
// import Sendmessage from './Sendmessage';
import firebase from 'firebase/compat/app';

export const Chat = () => {
	const [messages, setMessages] = useState([]);

	const messagesEndRef = useRef();

	const [msg, setMsg] = useState('');

	async function submitForm(e) {
		e.preventDefault();
		setMsg('');

		const { uid, photoURL } = auth.currentUser;

		if (msg.length > 0) {
			await db.collection('messages').add({
				text: msg,
				photoURL,
				uid,
				createdAt: firebase.firestore.FieldValue.serverTimestamp(),
			});
		}
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	}

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(() => {
		messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
		db.collection('messages')
			.orderBy('createdAt')
			.limit(50)
			.onSnapshot((snapshot) => {
				setMessages(snapshot.docs.map((doc) => doc.data()));
			});
	}, []);

	return (
		<div className='chatmain'>
			<h2>RONT - community Chat</h2>

			<div className='msgs'>
				{messages.map(({ uid, text, photoURL, createdAt }, index) => {
					return (
						<>
							<div className='msg' key={index}>
								<div
									id='single-msg'
									className={`msg ${
										uid === auth.currentUser.uid ? 'sent' : 'received'
									}  `}
									key={index}>
									<img src={photoURL} alt={uid} />
									<div key={uid} className='text'>
										{text}
									</div>
									{/* <div className='time'>
								{h}:{m}
							</div> */}
								</div>
							</div>
							<div ref={messagesEndRef} />
						</>
					);
				})}
				<form onSubmit={submitForm}>
					<input
						value={msg}
						onChange={(e) => setMsg(e.target.value)}
						type='text'
						placeholder='Enter your message'
					/>
					<button className='send' type='submit'>
						<img
							src='https://cdn-icons-png.flaticon.com/512/2343/2343805.png'
							alt=''
						/>
					</button>
				</form>
			</div>
			{/* <Sendmessage /> */}
			<Signout />
		</div>
	);
};
