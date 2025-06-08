import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { Link } from 'expo-router';

export default function RiskAreaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Áreas de Risco</Text>
      <View style={styles.separator} />
      <Text style={styles.text}>
        Aqui você pode ver as áreas de risco próximas a você.
      </Text>
      <Link href="/homescreen" style={styles.link}>
        <Text style={styles.linkText}>Voltar</Text>
      </Link>
    </View>
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
