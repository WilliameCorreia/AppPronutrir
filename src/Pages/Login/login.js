import React, { useState } from 'react'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Alert,
    ActivityIndicator,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from 'react-native-elements'
import auth from '@react-native-firebase/auth'
import MyModal from '../../Components/MyModal'

import styles from './style'
import { ScrollView } from 'react-native-gesture-handler'

export default function login({ navigation }) {

    const [loading, setloading] = useState(false);
    const [usuario, setUsuario] = useState();
    const [password, setPassword] = useState();
    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');

    const autenticar = () => {
        setloading(true)
        if (usuario && password) {
            auth()
                .signInWithEmailAndPassword(usuario, password)
                .then(dados => {
                    console.log(dados)
                })
                .catch(error => {
                    switch (error.code) {
                        case 'auth/invalid-email':
                            setMsnModal('Formato Inválido de E-mail')
                            setModalActive(true)
                            break;
                        case 'auth/operation-not-allowed':
                            setMsnModal('Sua conta não foi ativada, Verifique seu Email!')
                            setModalActive(true)
                            break;
                        case 'auth/weak-password':
                            setMsnModal('Sua senha precisa ter pelo menos 8 caracteres')
                            setModalActive(true)
                            break;
                        case 'auth/user-not-found':
                            setMsnModal('Usuário não encontrado !')
                            setModalActive(true)
                            break;
                        case 'auth/wrong-password':
                            setMsnModal('Senha Inválida !')
                            setModalActive(true)
                            break;
                        default:
                            setMsnModal(error.code)
                            setModalActive(true)
                            break;
                    }
                    setloading(false)
                });
        } else {
            setMsnModal('Informe Usuario/Senha valídos')
            setModalActive(true)
            setloading(false)
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.box1}>
                <Image source={require('../../assets/Imagens/unnamed.png')} style={styles.image_logo} />
                {loading ? <ActivityIndicator size={"large"} color={'#00a1a3'}></ActivityIndicator> : <Text></Text>}
            </View>
            <View style={styles.box2}>
                <View style={styles.SectionStyle}>
                    <Icon
                        style={styles.icon}
                        //name='ios-contact'
                        type='ionicon'
                        size={40}
                        color={'#fff'}
                    />
                    <TextInput
                        returnKeyType={'next'}
                        autoCapitalize={'none'}
                        dataDetectorTypes={'address'}
                        style={styles.input}
                        placeholder={'USUÁRIO'}
                        placeholderTextColor={'#000'}
                        onChangeText={texto => setUsuario(texto)}
                    />
                </View>
                <View style={styles.SectionStyle}>
                    <Icon
                        returnKeyType={'next'}
                        autoCapitalize={'none'}
                        style={styles.icon}
                        //name='ios-lock'
                        type='ionicon'
                        size={40}
                        color={'#fff'}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder={'********'}
                        placeholderTextColor={'#000'}
                        secureTextEntry
                        onChangeText={texto => setPassword(texto)}
                    />      
                    <TextInput />
                </View>
                <TouchableOpacity style={styles.btn} onPress={() => autenticar()}>
                    <Text style={styles.text}>Entrar</Text>
                </TouchableOpacity>
                <StatusBar backgroundColor={'#fff'} barStyle='dark-content' />
                <TouchableOpacity onPress={() => { navigation.navigate('Cadastro') }} style={styles.textBtn}>
                    <Text style={styles.text2}>Ainda não possui conta ?</Text>
                    <Text style={styles.text2}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.box3}>
                <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} />
            </View>
        </KeyboardAvoidingView>
    )
}
