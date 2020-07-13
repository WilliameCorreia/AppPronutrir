import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import styles from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function style({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Image style={styles.backImg} source={require('../../assets/Imagens/unnamed.png')}/>
            </View>
            <View style={styles.box2}>
                <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
