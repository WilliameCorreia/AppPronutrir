import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function style({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.backImg} source={require('../../assets/Imagens/unnamed.png')} />
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text>Entrar</Text>
            </TouchableOpacity>
        </View>
    )
}
