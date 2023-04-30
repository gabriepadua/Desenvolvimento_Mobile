import { StyleSheet, View } from 'react-native';
import { useEffect, useState, ActivityIndicator } from 'react';

import Filmes from './src/components/filmes';


export default function App() {
  let [filmes, setFilmes] = useState([]);

  const baseURL = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(function(){
    fetch(baseURL)
      .then(data => data.json())
      .then(objeto => {
        setFilmes(objeto.data)
      });
  },[])

  return (
    <View style={styles.container}>
      {filmes.length > 0 ? filmes.map(filme => <Filmes filme={filme}/>) : <ActivityIndicator />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  },
});