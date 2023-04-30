import { Text, Image, Button, View } from "react-native";

import styles from './styles';

const baseUrl = "https://api.otaviolube.com"

export default function Filmes(props){
    return(
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image style={styles.img} source={{uri: baseUrl + filme.poster.data.attributes.url}}/>
            </View>
            <View style={styles.conteudo}>
                <Text style={styles.titulo}>{props.filme.attributes.titulo}</Text>
                <Text style={styles.sinopse}>{props.filme.attributes.sinopse}</Text>
                <Button style={styles.button} 
                    title="Comprar"
                    color='green'/>
            </View>
        </View>
    );
}