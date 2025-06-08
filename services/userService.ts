import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface UserData {
  uid: string;
  username: string;
  email: string;
  cep: string;
  cpf: string;
  endereco: string;
  telefone: string;
  createdAt: FirebaseFirestoreTypes.Timestamp;
}

export const createUserProfile = async (userData: Omit<UserData, 'createdAt'>) => {
  try {
    await firestore()
      .collection('users')
      .doc(userData.uid)
      .set({
        ...userData,
        createdAt: firestore.Timestamp.now(),
      });
    return true;
  } catch (error) {
    console.error('Error creating user profile:', error);
    throw error;
  }
};

export const getUserProfile = async (uid: string) => {
  try {
    const userDoc = await firestore()
      .collection('users')
      .doc(uid)
      .get();
    
    if (userDoc.exists) {
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
    await firestore()
      .collection('users')
      .doc(uid)
      .update(data);
    return true;
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
}; 