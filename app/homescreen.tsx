import * as React from 'react';
import {View,Text,TextInput,TouchableOpacity,StyleSheet} from 'react-native';
import { useRouter } from 'expo-router';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>home</Text>

      <Image
        source={require('../assets/user-icon.png')}
        style={styles.userIcon}
      />
      <Text style={styles.username}>username</Text>

      <Text style={styles.locationLabel}>você está aqui</Text>

      <Image
        source={require('../assets/map-placeholder.jpg')} 
        style={styles.mapImage}
        resizeMode="cover"
      />

      <View style={styles.linkContainer}>
        <Text style={styles.linkText}>áreas de risco</Text>
        <Text style={styles.linkText}>proximas de você</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'Jost',
    fontSize: 26,
    color: '#000',
    marginBottom: 20,
  },
  userIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  username: {
    fontFamily: 'Jost',
    fontSize: 16,
    marginBottom: 10,
  },
  locationLabel: {
    fontFamily: 'Jost',
    fontSize: 14,
    marginBottom: 20,
    color: '#000',
  },
  mapImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 30,
  },
  linkContainer: {
    alignItems: 'center',
  },
  linkText: {
    fontFamily: 'Jost',
    fontSize: 14,
    color: 'blue',
    textAlign: 'center',
    lineHeight: 20,
  },
});


export default HomeScreen;