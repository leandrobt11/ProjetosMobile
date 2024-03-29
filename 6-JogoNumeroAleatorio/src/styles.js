import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    titulo: {
    fontSize:30,
    color:'black',
    fontFamily:'impact',
    textAlign: 'center',
    marginTop: 4,
    textShadowRadius:10,
    },
    img: {
        margin: 2,
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
        backgroundColor: '#00F8AE'
    },
    textoBotao: {
        fontFamily: 'impact',
        alignSelf: 'center',
        paddingTop: 5,
        fontSize: 30,

    },
    resultado: {
        fontFamily: 'impact',
        alignSelf: 'center',
        fontSize: 40,
        color: 'black',
        marginTop: 40,
        textShadowRadius:10,
    }
})
 
export {styles}