import React from 'react';

import { auth } from '../firebase';

const Signout = () => {
	return (
		<>
			<button className='signout' onClick={() => auth.signOut()}>
				<img
					src='https://cdn-icons-png.flaticon.com/512/25/25376.png'
					alt='signout'
				/>{' '}
			</button>
		</>
	);
};

export default Signout;
