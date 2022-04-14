import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAbaiEUVg42ObjUzZWJL7Y5NElNl9ygIXI",
    authDomain: "alura-web-store.firebaseapp.com",
    projectId: "alura-web-store",
    storageBucket: "alura-web-store.appspot.com",
    messagingSenderId: "209748033817",
    appId: "1:209748033817:web:a42053db33c80ac7adc588"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export {
    db,
    googleAuthProvider,
    firebase

  }