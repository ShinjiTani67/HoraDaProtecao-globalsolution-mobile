import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmJh7mewTXxUIdCXwXV_PFIpc22DagoDc",
  authDomain: "hora-da-protecao.firebaseapp.com",
  projectId: "hora-da-protecao",
  storageBucket: "hora-da-protecao.firebasestorage.app",
  messagingSenderId: "479715828390",
  appId: "1:479715828390:android:2c9e4bfe782a4d6744ca67",
  measurementId: "G-Q4207EHJMP"
};

let app;
let db;

try {
  if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }
  db = firestore();
} catch (error) {
  console.error('Error initializing Firebase:', error);
  throw error;
}

export { auth, db };