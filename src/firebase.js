import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyD6n49AjBlupoxZtn4KSkHeDcq0-PbLdlM',
    authDomain: 'e-commerce-project-ce61c.firebaseapp.com',
    databaseURL: 'https://e-commerce-project-ce61c.firebaseio.com',
    projectId: 'e-commerce-project-ce61c',
    storageBucket: 'e-commerce-project-ce61c.appspot.com',
    messagingSenderId: '295691193507',
    appId: '1:295691193507:web:94d36ab3e3c7b73dcf8316',
    measurementId: 'G-11N7EYFK6D'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
