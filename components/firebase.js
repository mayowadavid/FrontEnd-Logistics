import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyACIDeiqQIHextjTi28NVDmh5hWHahuiNE",
    authDomain: "mayor-db13a.firebaseapp.com",
    databaseURL: "https://mayor-db13a.firebaseio.com",
    projectId: "mayor-db13a",
    storageBucket: "mayor-db13a.appspot.com",
    messagingSenderId: "22905502977",
    appId: "1:22905502977:web:248fd426a1ce4497336f00"
  };


  const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) :firebase.app();
  const store = firebaseApp.storage();
  const data = firebase.firestore(); 
  const database = new firebase.data();


  export {store, database};