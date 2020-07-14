import React from 'react'
import { View, Image, ActivityIndicator } from 'react-native'

import styles from './style'

export default function style({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.backImg} source={require('../../assets/Imagens/unnamed.png')} />
            <ActivityIndicator size={"large"} color={'#00a1a3'}></ActivityIndicator>
        </View>
    )
}
