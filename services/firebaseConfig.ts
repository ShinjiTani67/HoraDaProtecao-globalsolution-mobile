import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBmJh7mewTXxUIdCXwXV_PFIpc22DagoDc",
  authDomain: "hora-da-protecao.firebaseapp.com",
  projectId: "hora-da-protecao",
  storageBucket: "hora-da-protecao.firebasestorage.app",
  messagingSenderId: "479715828390",
  appId: "1:479715828390:android:2c9e4bfe782a4d6744ca67",
  measurementId: "G-Q4207EHJMP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };