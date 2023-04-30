import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'blue',
        width: '90%',
        borderRadius: 35,
        margin: 20,
        padding: 20
    },

    conteudo: {
        flex: 1,
    },

    viewImg: {
        backgroundColor: 'purple',
        height: '100%',
        width: '40%',
        marginRight: 15,
        padding: 7
    },

    img: {
        width: '100%',
        height: '100%'
    },

    titulo: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20
    },

    sinopse: {
        fontSize: 15,
        marginBottom: 20
    }
    
});

export default styles;