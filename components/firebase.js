import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

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
  const database = firebase.firestore();
  if(process.browser){
    database.enablePersistence()
      .catch(function(err) {
          if (err.code == 'failed-precondition') {
              // Multiple tabs open, persistence can only be enabled
              // in one tab at a a time.
              // ...
              console.log(err.code);
          } else if (err.code == 'unimplemented') {
              // The current browser does not support all of the
              // features required to enable persistence
              // ...
              console.log(err.code);
          }
      });
    }
  const store = firebaseApp.storage();
  const auth = firebase.auth();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  const provider = new firebase.auth.GoogleAuthProvider();

 
  export {store, database, auth, timestamp, provider};  
 