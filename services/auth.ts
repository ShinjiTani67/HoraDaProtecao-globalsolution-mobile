import auth from '@react-native-firebase/auth';

export const signUp = async (email: string, password: string) => {
  try {
    return await auth().createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.error('Error in signUp:', error);
    throw error;
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    return await auth().signInWithEmailAndPassword(email, password);
  } catch (error) {
    console.error('Error in signIn:', error);
    throw error;
  }
};
