import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth/react-native';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyDn5SsldbMPI-fX0Cy2sdEDb6hkUnGm2Hc",
  authDomain: "hora-da-protecao.firebaseapp.com",
  projectId: "hora-da-protecao",
  storageBucket: "hora-da-protecao.appspot.com",
  messagingSenderId: "479715828390",
  appId: "1:479715828390:web:68d1eb1454962cc044ca67",
  measurementId: "G-Q4207EHJMP"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);

export { auth, db };
