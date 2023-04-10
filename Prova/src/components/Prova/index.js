import { Button, Image, Text, View } from "react-native";

import styles from './styles';

export default function Prova(props){
    return (
        <View style={styles.container}>
            <View style={styles.viewImg}>
                <Image source={{
                    uri: props.provas.imgUrl
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
                <Text style={styles.nome}>Nome: {props.provas.nome}</Text>
                <Text style={styles.des}>Descrição: {props.provas.des}</Text>
                <Text style={styles.dan}>Dano: {props.provas.dan}</Text>
                <Button style={styles.bt} title="Trocar"/>
            </View>
        </View>
    );
}