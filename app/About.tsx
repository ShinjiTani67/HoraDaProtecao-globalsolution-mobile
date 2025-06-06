import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const About = () => {
    const router = useRouter();
    return (
        <View style={styles.container}> 
        <Text style={styles.title}>About</Text>
        <Text>Carlos Eduardo Ariza</Text>
        <Text>RM</Text>
        <Text>Fernando Tanigushi</Text>¨
        <Text>RM553587</Text>
        <Text>João Vitor Valaitis</Text>
        <Text></Text>
      </View>
    )
}

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
        color: '#000',
        marginBottom: 20,
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
export default About;