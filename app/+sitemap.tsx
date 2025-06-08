import { Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function SitemapScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Sitemap' }} />
      <View style={styles.container}>
        <Text style={styles.title}>Sitemap Screen</Text>
        <Text style={styles.text}>
          This is the sitemap screen.
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