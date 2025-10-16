import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';
import Person from './components/Person'
import Escolha from './components/Escolha'

export default function App() {
  
  const [tela, setTela ] = useState('person');

  const navegar = (rota) => {
    setTela(rota)
  }

  const mostrar = ()=>{
    switch(tela){
      case 'person':
        return <Person navegar={navegar}/>
      case 'escolha':
        return <Escolha navegar={navegar}/>
      
    }
  }
  return (
    <View style={styles.container}>
        {mostrar()}
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
});
