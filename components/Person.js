import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import {useState} from 'react';

export default function Person({navegar}) {
const [pilotagem, setPilotagem] = useState('')
const [mira, setMira] = useState('')
const [carisma, setCarisma] = useState('')

function criar (){
    const p = Number(pilotagem)
    const m = Number(mira)
    const c = Number(carisma)


    if(p+m+c === 3){
        alert('Criado com Sucesso')
        navegar('escolha')
    }else{
        alert('Só pode ter 3 pontos.')
    }
}




  return (
    <View style={styles.container}>
        <Text style={{margin:30, fontSize: 30, fontWeight: 'bold'}}>Criação de Piloto</Text>

        <TextInput
        placeholder='Pilotagem...'
        value={pilotagem}
        onChangeText={setPilotagem}
        style={styles.input}
        keyboardType= 'numeric'
        />
        <TextInput
        placeholder='Mira...'
        value={mira}
        onChangeText={setMira}
        style={styles.input}
        keyboardType= 'numeric'
        />
        <TextInput
        placeholder='Carisma...'
        value={carisma}
        onChangeText={setCarisma}
        style={styles.input}
        keyboardType= 'numeric'
        />

        <TouchableOpacity
        onPress={criar}
        style={styles.button} 
        >
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Criar Piloto</Text>
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