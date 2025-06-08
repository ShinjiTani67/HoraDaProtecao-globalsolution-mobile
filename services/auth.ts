import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '/services/firebase';
import { auth } from './firebaseConfig';

export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
