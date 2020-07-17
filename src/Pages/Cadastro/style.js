import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
    box1:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    box2:{
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50
    },
    image_person:{
        width: "50%",
        height: (Dimensions.get('window').width / 10 * 3),
        margin: 20
    },
    input: {
        width: (Dimensions.get('window').width / 4 * 3),
        height: (Dimensions.get('window').width / 7),
        margin: 15,
        borderWidth: 4,
        borderRadius: 30,
        borderColor: '#000',
        backgroundColor: 'transparent',
        paddingLeft: 20,
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        fontWeight: '600'
       
    },
    btn:{
        width: (Dimensions.get('window').width / 6),
        height: (Dimensions.get('window').height / 10),
        margin: 20
    },
    textErro:{
        color: 'red'
    }
})

export default styles