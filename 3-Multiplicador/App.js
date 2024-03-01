import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { styles } from './styles';
 
const App = () => {
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [resultado, setResultado] = useState('');
 
  const multiplicar = () => {
    const resultadoMultiplicacao = Number(n1) * Number(n2);
    setResultado(resultadoMultiplicacao.toString());
  }; 
 
  return (
<View style={styles.container}>
<Text style={styles.titulo}>Multiplique</Text>
      <TextInput
        style={styles.entrada}
        placeholder="Digite o primeiro nº"
        onChangeText={setN1}
        keyboardType="numeric"
      />
 
      <TextInput
        style={styles.entrada}
        placeholder="Digite o segundo nº"
        onChangeText={setN2}
        keyboardType="numeric"
      />
 
      <Pressable style={styles.botao} onPress={multiplicar}>
<Text style={styles.textoBotao}>Calcular</Text>
</Pressable>
 
      <Text style={styles.resultado}>{resultado}</Text>
</View>
  );
};
 
export default App;
