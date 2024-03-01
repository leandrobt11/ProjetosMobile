import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    titulo: {
        fontFamily: 'fantasy',
        color: 'red',
        fontSize: 45,
        alignSelf: 'center',
        margin: 30
    },
    img: {
        margin: 25,
        width: 200,
        height: 200,
        alignSelf: 'center',
    },
    entrada: {
        height: 45,
        width: 200,
        borderWidth: 1,
        borderColor: '#222',
        margin: 15,
        fontSize: 18,
        padding: 10,
        alignSelf: 'center'
    },
    botao: {
        height: 45,
        width: 200,
        alignSelf: 'center',
        backgroundColor: 'lightgreen'
    },
    textoBotao: {
        alignSelf: 'center',
        paddingTop: 5,
        fontSize: 20,
    },
    resultado: {
        alignSelf: 'center',
        fontSize: 40,
        color: 'green'
    }
})
 
export {styles}
