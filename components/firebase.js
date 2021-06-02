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

  const database = firebase.firestore();
  const store = firebase.storage();
  
 
  export {store};  
  export default database;
 