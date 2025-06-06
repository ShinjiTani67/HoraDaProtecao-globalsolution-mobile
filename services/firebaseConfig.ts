import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

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
const auth = getAuth(app);

export { auth };
