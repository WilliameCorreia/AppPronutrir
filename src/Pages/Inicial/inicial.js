import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import styles from './style'

export default function style() {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Image style={styles.backImg} source={require('../../assets/Imagens/unnamed.png')}/>
            </View>
            
        </View>
    )
}
