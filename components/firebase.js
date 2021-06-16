import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyC_IMKXaNJIwEdAJTQNH2ltCPcON9I6Olg",
  authDomain: "managerbran-2a699.firebaseapp.com",
  databaseURL: "https://managerbran-2a699-default-rtdb.firebaseio.com",
  projectId: "managerbran-2a699",
  storageBucket: "managerbran-2a699.appspot.com",
  messagingSenderId: "474981172645",
  appId: "1:474981172645:web:fa8da9f09f0c344563144c",
  measurementId: "G-054GEKBK2H"
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
  const functions = firebase.functions();

  export {store, database, auth, timestamp, provider, functions};  
 