import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Hora da Proteção</Text>
      <View style={styles.separator} />
      <Link href="/zonasperigo" style={styles.link}>
        <Text style={styles.linkText}>Zonas de Perigo</Text>
      </Link>
      <Link href="/riskarea" style={styles.link}>
        <Text style={styles.linkText}>Áreas de Risco</Text>
      </Link>
      <Link href="/about" style={styles.link}>
        <Text style={styles.linkText}>Sobre</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
