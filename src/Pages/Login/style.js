import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    box1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box2:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    input: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        backgroundColor: 'transparent',
        fontFamily: 'Montserrat-SemiBold', fontWeight: '600'
    },
    SectionStyle: {
        width: (Dimensions.get('window').width / 4 * 3),
        height: (Dimensions.get('window').width / 7),
        margin: 10,
        borderWidth: 4,
        borderRadius: 30,
        borderColor: '#000',
        textAlign: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    icon:{
        margin: 15,
    },
    btn: {
        backgroundColor: "#00a1a3",
        width: (Dimensions.get('window').width / 2),
        height: (Dimensions.get('window').height / 12),
        borderRadius: 30,
        margin: 15
    },
    text: {
        fontSize: 35,
        color: '#fff',
        textAlign: 'center',
        letterSpacing: 3,
        fontFamily: 'Montserrat-SemiBold', fontWeight: '600'
    },
    image_logo:{
        width: (Dimensions.get('window').width / 10 * 6),
        height: (Dimensions.get('window').height / 10 * 2),
        resizeMode: 'center',
    },
    name_logo:{
        width: (Dimensions.get('window').width / 10 * 4),
        height: (Dimensions.get('window').height / 10 * 2),
        resizeMode: 'center',
    },
    textBtn:{
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    text2:{
        color: '#000',
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold', fontWeight: '600'
    }
    
})

export default styles

