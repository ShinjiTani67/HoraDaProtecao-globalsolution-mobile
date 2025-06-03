import React from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';

const index = () => {
    return (
        <View style={styles.container}>
          <Text style={styles.loginLabel}>login</Text>
    
          <TextInput style={styles.input} placeholder="user:" />
          <TextInput style={styles.input} placeholder="password:" secureTextEntry />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>entrar</Text>
          </TouchableOpacity>
    
          <Text style={styles.link}>faça cadastro clicando aqui</Text>
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
      
      export default index;