import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SignIn = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput style={styles.input} placeholder="user:" />
      <TextInput style={styles.input} placeholder="senha:" secureTextEntry />
      <TextInput style={styles.input} placeholder="cep:" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="email:" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="cpf:" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="endereço:" />
      <TextInput style={styles.input} placeholder="telefone:" keyboardType="phone-pad" />

      <TouchableOpacity style={styles.button}>
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
export default SignIn