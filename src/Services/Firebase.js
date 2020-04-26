import firebase from 'firebase/app'
import { firestoreService } from 'firestore-export-import';

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "movie-nerd-195aa.firebaseapp.com",
    databaseURL: "https://movie-nerd-195aa.firebaseio.com",
    projectId: "movie-nerd-195aa",
    storageBucket: "movie-nerd-195aa.appspot.com",
    messagingSenderId: "969866522052",
    appId: "1:969866522052:web:df93ccf7b93a3c23c48891"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);