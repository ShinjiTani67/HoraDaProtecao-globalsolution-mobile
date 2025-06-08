import { 
  doc, 
  setDoc, 
  getDoc, 
  updateDoc,
  Timestamp,
  DocumentData
} from 'firebase/firestore';
import { db } from './firebaseConfig';

export interface UserData {
  uid: string;
  username: string;
  email: string;
  cep: string;
  cpf: string;
  endereco: string;
  telefone: string;
  createdAt: Timestamp;
}

export const createUserProfile = async (userData: Omit<UserData, 'createdAt'>) => {
  try {
    await setDoc(doc(db, 'users', userData.uid), {
      ...userData,
      createdAt: Timestamp.now(),
    });
    return true;
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

export const getUserProfile = async (uid: string) => {
  try {
    const userDoc = await getDoc(doc(db, 'users', uid));
    
    if (userDoc.exists()) {
      return userDoc.data() as UserData;
    }
    return null;
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
};

export const updateUserProfile = async (uid: string, data: Partial<UserData>) => {
  try {
    await updateDoc(doc(db, 'users', uid), data);
    return true;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
}; 