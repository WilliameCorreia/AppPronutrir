import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function login({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text>click me</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})
