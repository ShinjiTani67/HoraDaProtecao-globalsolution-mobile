import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

const About = () => {
    const router = useRouter();
    return (
        <View style={styles.container}> 
        <Text style={styles.title}>About</Text>
        <Image
        source={require('@/assets/images/cadu.jpg')}
        style={styles.userIcon}
      />
        <Text>Carlos Eduardo Ariza</Text>
        <Text>RM553461</Text>
        <Image
        source={require('@/assets/images/fernando.jpg')}
        style={styles.userIcon}
      />
        <Text>Fernando Tanigushi</Text>¨
        <Text>RM553587</Text>
            <Image
        source={require('@/assets/images/joao.jpg')}
        style={styles.userIcon}
      />
        <Text>João Vitor Valaitis</Text>
        <Text>RM</Text>
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
    userIcon: {
      width: 100,
      height: 100,
      marginBottom: 10,
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
