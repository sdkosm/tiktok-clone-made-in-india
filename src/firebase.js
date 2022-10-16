// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "./firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAfk8ESpX3Uy0",
    authDomain: "tiktok-ccff5.firebaseapp.com",
    databaseURL: "https://tiktok-ccff5-default-rtdb.firebaseio.com",
    projectId: "tiktok-ccff5",
    storageBucket: "tiktok-ccff5.appspot.com",
    messagingSenderId: "818530061825",
    appId: "1:818530061825:web:9471cfb7d377dac1dbfa00",
    measurementId: "G-4ZLHH6LP7V"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;
