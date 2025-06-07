import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert, StyleSheet } from 'react-native';
import { listarZonas, criarZona, atualizarZona, deletarZona, ZonasPerigo } from '../api/zonasPerigo';

const ZonasPerigoScreen = () => {
  const [zonas, setZonas] = useState<ZonasPerigo[]>([]);
  const [id, setId] = useState<string>('');
  const [nivelRisco, setNivelRisco] = useState<string>('');
  const [raioEmKm, setRaioEmKm] = useState<string>('');
  const [modoEdicao, setModoEdicao] = useState<boolean>(false);

  const carregarZonas = async () => {
    try {
      const res = await listarZonas();
      setZonas(res.data);
    } catch (err) {
      Alert.alert('Erro', 'Falha ao carregar zonas de perigo');
    }
  };

  const limparFormulario = () => {
    setId('');
    setNivelRisco('');
    setRaioEmKm('');
    setModoEdicao(false);
  };

  const salvar = async () => {
    const zona: ZonasPerigo = { id, nivelRisco, raioEmKm: parseFloat(raioEmKm) };

    try {
      if (modoEdicao) {
        await atualizarZona(id, zona);
        Alert.alert('Sucesso', 'Zona atualizada');
      } else {
        await criarZona(zona);
        Alert.alert('Sucesso', 'Zona criada');
      }
      carregarZonas();
      limparFormulario();
    } catch (err) {
      Alert.alert('Erro', 'Falha ao salvar zona');
    }
  };

  const editar = (zona: ZonasPerigo) => {
    setId(zona.id);
    setNivelRisco(zona.nivelRisco);
    setRaioEmKm(zona.raioEmKm.toString());
    setModoEdicao(true);
  };

  const remover = async (id: string) => {
    try {
      await deletarZona(id);
      Alert.alert('Sucesso', 'Zona removida');
      carregarZonas();
    } catch (err) {
      Alert.alert('Erro', 'Falha ao deletar zona');
    }
  };

  useEffect(() => {
    carregarZonas();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zonas de Perigo</Text>

      <TextInput
        style={styles.input}
        placeholder="Nível de Risco"
        value={nivelRisco}
        onChangeText={setNivelRisco}
      />

      <TextInput
        style={styles.input}
        placeholder="Raio em Km"
        value={raioEmKm}
        onChangeText={setRaioEmKm}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>
          {modoEdicao ? 'Atualizar' : 'Criar'}
        </Text>
      </TouchableOpacity>

      <FlatList
        data={zonas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>ID: {item.id}</Text>
            <Text>Nível: {item.nivelRisco}</Text>
            <Text>Raio: {item.raioEmKm} km</Text>
            <View style={styles.cardButtons}>
              <TouchableOpacity style={styles.editButton} onPress={() => editar(item)}>
                <Text style={styles.buttonText}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.deleteButton} onPress={() => remover(item.id)}>
                <Text style={styles.buttonText}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
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
  title: {
    fontFamily: 'Jost',
    fontSize: 24,
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
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
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    fontFamily: 'Jost',
    fontSize: 18,
    color: '#fff',
  },
  card: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
});

export default ZonasPerigoScreen;
