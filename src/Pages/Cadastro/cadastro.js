import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function cadastro() {
    return (
        <View style={styles.container}>
            <Text>Cadastro</Text>
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
