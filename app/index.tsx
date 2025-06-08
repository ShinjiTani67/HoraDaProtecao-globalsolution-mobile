import React, { useState } from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Alert,Image} from 'react-native';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig';



const Index = () => {

  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, senha);
      router.replace('/homescreen');
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
      <Text style={styles.loginLabel}>login</Text>
      <Image source={require('../assets/images/logo.png')}
      style={styles.logo}/>
      <TextInput
        style={styles.input}
        placeholder="user:"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="password:"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
        <Text style={styles.buttonText}>
          {loading ? 'Carregando...' : 'Entrar'}
        </Text>
      </TouchableOpacity>

      <Text onPress={() => router.push('/signin')} style={styles.link}>
        faça cadastro clicando aqui
      </Text>
      
      <Text onPress={() => router.push('/about')} style={styles.link}>Sobre</Text>
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
        loginLabel: {
          fontFamily: 'Jost',
          fontSize: 20,
          marginBottom: 20,
          color: '#000',
        },
          logo: {
          width: 180,
          height: 180,
          marginBottom: 10,
        },
        input: {
          height: 40,
          borderRadius: 8,
          backgroundColor: '#ddd',
          paddingHorizontal: 10,
          marginBottom: 15,
          fontFamily: 'Jost',
        },
        button: {
          marginTop: 10,
          alignItems: 'center',
        },
        buttonText: {
          fontFamily: 'Jost',
          fontSize: 18,
          color: '#000',
        },
        link: {
          marginTop: 20,
          fontFamily: 'Jost',
          fontSize: 14,
          color: 'blue',
          textAlign: 'center',
        },
      });
      
      export default Index;