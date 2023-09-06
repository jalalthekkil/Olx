import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDKKv_AORA55U3xJsLJLQN9PuFfMmwvD6w",
    authDomain: "olx-1-32cdc.firebaseapp.com",
    projectId: "olx-1-32cdc",
    storageBucket: "olx-1-32cdc.appspot.com",
    messagingSenderId: "1071812103610",
    appId: "1:1071812103610:web:3db59f93c5e888d2a36183"
  };


export default firebase.initializeApp(firebaseConfig);
