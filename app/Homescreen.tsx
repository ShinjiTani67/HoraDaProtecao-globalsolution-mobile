import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Pressable } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>

      <View style={styles.userSection}>
        <Image
          source={require('../assets/images/usericon.png')}
          style={styles.userIcon}
        />
        <Text style={styles.username}>username</Text>
        <Text style={styles.locationLabel}>Você está aqui</Text>
      </View>

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

      <Pressable 
        style={styles.riskAreaButton}
        onPress={() => router.push('/riskarea')}
      >
        <Text style={styles.riskAreaTitle}>Áreas de risco</Text>
        <Text style={styles.riskAreaSubtitle}>Próximas de você</Text>
      </Pressable>
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
  userSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  userIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontFamily: 'Jost',
    fontSize: 18,
    marginBottom: 5,
    color: '#000',
  },
  locationLabel: {
    fontFamily: 'Jost',
    fontSize: 14,
    color: '#666',
  },
  map: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 30,
  },
  riskAreaButton: {
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    width: '100%',
  },
  riskAreaTitle: {
    fontFamily: 'Jost',
    fontSize: 16,
    color: '#000',
    marginBottom: 5,
  },
  riskAreaSubtitle: {
    fontFamily: 'Jost',
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;
