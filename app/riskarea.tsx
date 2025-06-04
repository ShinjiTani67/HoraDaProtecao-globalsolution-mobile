import * as React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const RiskAreaScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>áreas de risco</Text>
      <Text style={styles.subtitle}>proximas de você</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.55052, // São Paulo como exemplo
          longitude: -46.633308,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >

         <Marker
          coordinate={{ latitude: -23.55052, longitude: -46.633308 }}
          title="Área de risco"
          description="Cuidado com alagamentos"
        />
      </MapView>

      <Text style={styles.infoTitle}>informações</Text>

      <Text style={styles.infoText}>
        O que é Lorem Ipsum?{'\n'}
        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de
        impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido
        pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.
        Lorem Ipsum sobreviveu
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontFamily: 'Jost',
    fontSize: 24,
    color: '#000',
  },
  subtitle: {
    fontFamily: 'Jost',
    fontSize: 20,
    color: '#000',
    marginBottom: 20,
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 30,
  },
  infoTitle: {
    fontFamily: 'Jost',
    fontSize: 18,
    color: '#000',
    marginBottom: 10,
  },
  infoText: {
    fontFamily: 'Jost',
    fontSize: 14,
    color: '#000',
    lineHeight: 22,
  },
});

export default RiskAreaScreen;
