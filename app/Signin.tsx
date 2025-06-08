import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { createUserProfile } from '@/services/userService';
import { useRouter } from 'expo-router';

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (!email || !senha || !user || !cep || !cpf || !endereco || !telefone) {
      Alert.alert('Erro', 'Preencha todos os campos para continuar');
      return;
    }

    try {
      setLoading(true);
      // Create auth user
      const userCredential = await auth().createUserWithEmailAndPassword(email, senha);
      
      // Create user profile in Firestore
      await createUserProfile({
        uid: userCredential.user.uid,
        username: user,
        email,
        cep,
        cpf,
        endereco,
        telefone,
      });

      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      router.replace({ pathname: '/Homescreen' });
    } catch (error: any) {
      console.error(error);
      let message = 'Erro no cadastro.';
      if (error.code === 'auth/email-already-in-use') {
        message = 'Este e-mail já está em uso.';
      } else if (error.code === 'auth/invalid-email') {
        message = 'E-mail inválido.';
      } else if (error.code === 'auth/weak-password') {
        message = 'A senha deve ter pelo menos 6 caracteres.';
      }
      Alert.alert('Erro no cadastro', message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput 
        style={styles.input} 
        placeholder="Nome de usuário" 
        value={user} 
        onChangeText={setUser}
        autoCapitalize="words"
      />
      <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        keyboardType="email-address"
        autoCapitalize="none"
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
      <TextInput 
        style={styles.input} 
        placeholder="CEP" 
        keyboardType="numeric" 
        value={cep} 
        onChangeText={setCep} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="CPF" 
        keyboardType="numeric" 
        value={cpf} 
        onChangeText={setCpf} 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Endereço" 
        value={endereco} 
        onChangeText={setEndereco}
        autoCapitalize="words"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Telefone" 
        keyboardType="phone-pad" 
        value={telefone} 
        onChangeText={setTelefone} 
      />

      <TouchableOpacity 
        style={[styles.button, loading && styles.buttonDisabled]} 
        onPress={handleSignUp}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Cadastrando...' : 'Cadastrar'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontFamily: 'Jost',
    fontSize: 26,
    marginBottom: 30,
    color: '#000',
    textAlign: 'center',
  },
  input: {
    width: '100%',
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
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontFamily: 'Jost',
    fontSize: 18,
    color: '#fff',
  },
});

export default SignIn;
