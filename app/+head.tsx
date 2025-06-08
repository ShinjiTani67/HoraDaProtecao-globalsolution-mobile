import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function HeadScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Head' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Head Screen</Text>
        <Text style={styles.text}>
          This is the head screen.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
}); 