import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useRouter, Link } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/services/firebaseConfig';
import { useAuth } from '@/context/AuthProvider';

const Index = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (user) {
      router.replace({ pathname: '/HomeScreen' });
    }
  }, [user]);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, senha);
      router.replace({ pathname: '/HomeScreen' });
    } catch (error: any) {
      let message = 'Erro ao fazer login.';
      if (error.code === 'auth/user-not-found') message = 'Usuário não encontrado.';
      else if (error.code === 'auth/wrong-password') message = 'Senha incorreta.';
      Alert.alert('Erro', message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Image 
        source={require('../assets/images/logo.png')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={handleLogin} 
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Carregando...' : 'Entrar'}
        </Text>
      </TouchableOpacity>

      <Link href={('/signin' as any)} asChild>
        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.link}>Faça cadastro clicando aqui</Text>
        </TouchableOpacity>
      </Link>
      
      <Link href={('/about' as any)} asChild>
        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.link}>Sobre</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'Jost',
    fontSize: 26,
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 30,
    alignSelf: 'center',
  },
  input: {
    height: 50,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    marginBottom: 15,
    fontFamily: 'Jost',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontFamily: 'Jost',
    fontSize: 18,
    color: '#fff',
  },
  linkContainer: {
    marginTop: 20,
  },
  link: {
    fontFamily: 'Jost',
    fontSize: 14,
    color: '#007AFF',
    textAlign: 'center',
  },
});

export default Index;