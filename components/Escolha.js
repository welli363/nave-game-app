import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import {useState} from 'react';

export default function Escolha() {
const [resultado, setResultado] = useState('')

function escolher (escolhaJogador){
  if(escolhaJogador === 'atirou'){
    setResultado('Acertou e destruiu a nave')
  } else if (escolhaJogador === 'fugiu'){
      setResultado('Conseguiu fugir!')
  } else if (escolhaJogador === 'conversou'){
    setResultado('Era só uma nave de patrulha!')
  }
}



  return (
    <View style={styles.container}>
        <Text style={{margin:30, fontSize: 30, fontWeight: 'bold'}}> Você está sendo seguido por uma nave, o que fazer? </Text>

        <Text>{resultado}</Text>

        <TouchableOpacity
        onPress={()=>escolher('atirou')}
        style={styles.button}
        >
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Atirar</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>escolher('fugiu')}
        style={styles.button}
        >
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Fugir</Text>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=>escolher('conversou')}
        style={styles.button}
        >
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Conversar</Text>
        </TouchableOpacity>       

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    backgroundColor: 'fff',
    borderWidth: 2,
    borderColor: '#000',
    padding: 8,
    marginVertical: 4,
    borderRadius: 8,
  },
  button:{
    backgroundColor:'#00F0F0',
    borderWidth: 2,
    borderColor: '#000FF0',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width:150,
    alignItems: 'center',
  }

});