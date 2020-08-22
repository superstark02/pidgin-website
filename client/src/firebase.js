import firebase from 'firebase';
import "firebase/auth";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCYoIBWm4Hw6kCP1P6jPWvqgJsXQdFmuPM",
    authDomain: "pidgin-ds.firebaseapp.com",
    databaseURL: "https://pidgin-ds.firebaseio.com",
    projectId: "pidgin-ds",
    storageBucket: "pidgin-ds.appspot.com",
    messagingSenderId: "651681146366",
    appId: "1:651681146366:web:4b705cfd5354e769bb0caf",
    measurementId: "G-GTG5WZW9SB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const auth = firebase.auth();
  export const db = firebase.firestore();
  export const rdb = firebase.database();

  export default firebase;