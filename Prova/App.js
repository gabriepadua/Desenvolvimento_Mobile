import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Prova from './src/components/Prova';

export default function App() {

  const provas = [
    {
      nome: 'Espada de madeira',
      des: 'Espada de madeira, muito boa para iniciantes',
      dan: '2',
      imgUrl: "https://d1qejy7034t4b2.cloudfront.net/Custom/Content/Products/13/40/bastao-espada-de-madeira-para-treino-kantas-l2.jpg"
    },
    {
      nome: 'Espada de pedra',
      des: 'Espada de pedra, não tão boa, mas ainda sim, melhor que a de madeira',
      dan: '5',
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5XEFvEgGTRfcYXYlf40_QgOCScLZliK4LvA&usqp=CAU"
    },
  ]

  return (
    <View style={styles.container}>
      {provas.map(p => <Prova provas={p}/>)}
      <StatusBar style="auto" />
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
