import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyB4fBxQtaotUghXwpAS33ENaeGL-xmqPwg',
  authDomain: 'crown-db-35e06.firebaseapp.com',
  databaseURL: 'https://crown-db-35e06.firebaseio.com',
  projectId: 'crown-db-35e06',
  storageBucket: '',
  messagingSenderId: '767992287576',
  appId: '1:767992287576:web:35eeba91a00c58e2'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
