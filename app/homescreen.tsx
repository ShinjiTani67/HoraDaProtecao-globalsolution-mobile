import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRouter } from 'expo-router';


export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>home</Text>

      <Image
        source={require('@/assets/images/user-profile-icon-free-vector.jpg')}
        style={styles.userIcon}
      />
      <Text style={styles.username}>username</Text>
      <Text>você está aqui</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: -23.55052, longitude: -46.633308 }}
          title="Você está aqui"
        />
      </MapView>

      <Pressable onPress={() => router.push('/riskarea')}>
        <Text>áreas de risco</Text>
        <Text>proximas de você</Text>
      </Pressable>
    </View>
  );
}

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
  map: {
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
