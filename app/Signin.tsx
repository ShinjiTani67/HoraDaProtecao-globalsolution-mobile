import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig.ts'; 

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');
  const [cep, setCep] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSignUp = async () => {
    if (!email || !senha) {
      Alert.alert('Erro', 'Preencha e-mail e senha para continuar');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, senha);
      Alert.alert('Sucesso', 'Usuário cadastrado com sucesso!');
      // Aqui você pode salvar outros dados no Firestore, se quiser
    } catch (error: any) {
      console.error(error);
      Alert.alert('Erro no cadastro', error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput style={styles.input} placeholder="user:" value={user} onChangeText={setUser} />
      <TextInput style={styles.input} placeholder="senha:" secureTextEntry value={senha} onChangeText={setSenha} />
      <TextInput style={styles.input} placeholder="cep:" keyboardType="numeric" value={cep} onChangeText={setCep} />
      <TextInput style={styles.input} placeholder="email:" keyboardType="email-address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="cpf:" keyboardType="numeric" value={cpf} onChangeText={setCpf} />
      <TextInput style={styles.input} placeholder="endereço:" value={endereco} onChangeText={setEndereco} />
      <TextInput style={styles.input} placeholder="telefone:" keyboardType="phone-pad" value={telefone} onChangeText={setTelefone} />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>sign up</Text>
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
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Jost',
    fontSize: 26,
    marginBottom: 30,
    color: '#000',
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 8,
    backgroundColor: '#ddd',
    paddingHorizontal: 10,
    marginBottom: 15,
    fontFamily: 'Jost',
  },
  button: {
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'Jost',
    fontSize: 18,
    color: '#000',
  },
});

export default SignIn;
