import { React, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [valor1, setValor1] = useState();
  const [valor2, setValor2] = useState();
  const [resultado, setResultado] = useState(0);
  const [mensagem, Mensagem] = useState();

  function dividir(){
    let diferenca = (parseFloat(valor1) / parseFloat(valor2));
    setResultado(parseFloat(valor1) / parseFloat(valor2)); 

    if(diferenca <= 0.7){
      Mensagem("Abasteça com álcool");
    }
    else 
    {
      Mensagem("Abasteça com gasolina");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Gasolina VS Álcool</Text>
      <p>

      </p>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://cdn-icons-png.flaticon.com/512/1523/1523482.png',
        }}
      />
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor Álcool</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor1}
          onChangeText={(texto)=>setValor1(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Valor Gasolina</Text>
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={valor2}
          onChangeText={(texto)=>setValor2(texto)}
        />
      </View>
      <View style={styles.bloco}>
        <TouchableOpacity 
          style={styles.botao1}
          onPress={dividir}
        >
            <Text style={styles.textoBotao1}>Calcular</Text>
        </TouchableOpacity>
      </View>

     
      <View style={styles.bloco}>
        <Text style={styles.textoBloco}>Resultado: {resultado}</Text>
        <Text style={styles.textoBloco}>{mensagem}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoBloco:{
    fontSize:20,
  },
  texto:{
    color:'#000',
    fontSize:30
  },
  input:{
    borderColor:'#000',
    borderWidth:2,
    fontSize:30,
    width:'80%'
  },
  bloco:{
    width:'100%',
    alignItems:'center',
    marginTop:30
  },
  botao1:{
    backgroundColor:'#87CEEB',
    width:'80%',
    textAlign:'center'
  },
  
  textoBotao1:{
    color:"#fff",
    fontSize:30
 
  }, 
  logo:{
    width:80,
    height:80
  }
});