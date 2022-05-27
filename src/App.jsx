import './App.css';
// import firebase from 'firebase/compat/app';
import { Chat } from './components/Chat';
import { auth } from './firebase';
import Signin from './components/Signin';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
	const [user] = useAuthState(auth);
	return <>{user ? <Chat /> : <Signin />}</>;
}

export default App;
