import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, Alert, StyleSheet } from 'react-native';
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
      <Text style={styles.titulo}>Zonas de Perigo</Text>

      <TextInput
        placeholder="Nível de Risco"
        value={nivelRisco}
        onChangeText={setNivelRisco}
        style={styles.input}
      />

      <TextInput
        placeholder="Raio em Km"
        value={raioEmKm}
        onChangeText={setRaioEmKm}
        keyboardType="numeric"
        style={styles.input}
      />

      <Button title={modoEdicao ? 'Atualizar' : 'Criar'} onPress={salvar} />

      <FlatList
        data={zonas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>ID: {item.id}</Text>
            <Text>Nível: {item.nivelRisco}</Text>
            <Text>Raio: {item.raioEmKm} km</Text>
            <View style={styles.botoes}>
              <Button title="Editar" onPress={() => editar(item)} />
              <Button title="Excluir" onPress={() => remover(item.id)} color="red" />
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, flex: 1 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 8, marginBottom: 10, borderRadius: 4 },
  card: { padding: 10, marginBottom: 10, backgroundColor: '#eee', borderRadius: 4 },
  botoes: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
});

export default ZonasPerigoScreen;
