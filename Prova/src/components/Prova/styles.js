import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    viewImg: {
        width: '30%',
        height: 150,
        backgroundColor: 'yellow'
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    viewData: {
        backgroundColor: 'green',
        padding: 10,
        width: '70%',
        height: '100%',
    },
    nome: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    }, 
    des: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5
    }, 
    dan: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
        marginBottom: 5
        
    },
    bt: {
        padding: 10,
        backgroundColor: 'purple'
    }
});

export default styles;
