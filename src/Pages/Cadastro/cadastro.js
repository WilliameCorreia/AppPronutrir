import React, { useState, useRef } from 'react'
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator,
    KeyboardAvoidingView, ScrollView
} from 'react-native'

import styles from './style';
import MyModal from '../../Components/MyModal';
import auth from '@react-native-firebase/auth';

import { Formik } from 'formik';
import * as yup from 'yup';
import { Picker } from '@react-native-community/picker';
import api from '../../Services/api'
import { log } from 'react-native-reanimated';


export default function Cadastro({ navigation }) {

    const [loading, setloading] = useState(false);
    //modal
    const [modalActive, setModalActive] = useState(false);
    const [msnModal, setMsnModal] = useState('primeira passada');

    const [estado, setstado] = useState();
    const [perfil, SetPerfil] = useState();

    const Login = useRef();
    const Senha = useRef();
    const ConfimarSenha = useRef();
    const Nome = useRef();
    const Sobrenome = useRef();
    const Nascimento = useRef();
    const Cpf = useRef();
    const PerfilAcesso = useRef();
    const Ativo = useRef();
    const Crm = useRef();
    const Matricula = useRef();
    const Token = useRef();

    const cadastroProprio = (dados, values) => {
        const { uid, email } = dados.user;
        api.post("Usuario", {
            login: email,
            senha: uid,
            nome: values.Nome,
            sobrenome: values.Sobrenome,
            nascimento: values.Nascimento,
            cpf: values.Cpf,
            perfilAcesso: parseInt(perfil),
            ativo: parseInt(values.Ativo),
            crm: values.Crm,
            matricula: parseInt(values.Matricula),
            token: values.Token
        })
        .then(response =>{
            console.log(response.data)           
        })
        .catch(error =>{
            console.log(error)
        });
    }

    const cadastrar = (values) => {
        setloading(true)
        if (!values.Login || !values.Senha) {
            setMsnModal('Informe Usuario/Senha valídos')
            setModalActive(true)
            setloading(false)
        } if (values.Senha != values.ConfimarSenha) {
            setMsnModal('As senhas digitadas estão diferentes')
            setModalActive(true)
            setloading(false)
        }
        if (perfil != '') {
            auth()
                .createUserWithEmailAndPassword(values.Login, values.Senha)
                .then(dados => {
                    cadastroProprio(dados, values)
                    setMsnModal('Conta Criada com Sucesso!')
                    setModalActive(true)
                    setloading(false)
                }).catch(error => {
                    switch (error.code) {
                        case 'auth/email-already-in-use':
                            setMsnModal('Email Já Está em Uso!')
                            setModalActive(true)
                            break;
                        case 'auth/invalid-email':
                            setMsnModal('Formato Inválido de E-mail')
                            setModalActive(true)
                            break;
                        case 'auth/weak-password':
                            setMsnModal('Sua senha precisa ter pelo menos 8 caracteres')
                            setModalActive(true)
                            break;
                        default:
                            setMsnModal(error.code)
                            setModalActive(true)
                            break;
                    }
                    setModalActive(true)
                    setloading(false)
                });
        } else {
            setMsnModal('Perfil de acesso e Obrigatório')
            setModalActive(true)
            setloading(false)
        }
    }

    const FormSchema = yup.object().shape({
        Login: yup.string().required('Campo obrigatório'),
        Senha: yup.string().required('Campo obrigatório'),
        ConfimarSenha: yup.string().required('Campo obrigatório'),
        Nome: yup.string().required('Campo obrigatório'),
        Sobrenome: yup.string().required('Campo obrigatório'),
        Nascimento: yup.string().required('Campo obrigatório'),
        Cpf: yup.string().required('Campo obrigatório'),
        PerfilAcesso: yup.string().required('Campo obrigatório'),
        Ativo: yup.string().required('Campo obrigatório'),
        crm: yup.string().required('Campo obrigatório'),
        matricula: yup.string().required('Campo obrigatório'),
        token: yup.string().required('Campo obrigatório')
    })

    console.log(estado)
    console.log(perfil)
    return (
        <Formik
            initialValues={{
                Login: '',
                Senha: '',
                ConfimarSenha: '',
                Nome: '',
                Sobrenome: '',
                Nascimento: '',
                Cpf: '',
                PerfilAcesso: '',
                Ativo: '',
                crm: '',
                matricula: '',
                token: ''
            }}
            onSubmit={(values, { resetForm }) => {
                cadastrar(values)
            }}
            validationSchema={FormSchema}
        >

            {({ values, handleChange, handleSubmit, errors }) => (
                <ScrollView
                    contentContainerStyle={styles.teste}
                    style={styles.container}
                    behavior={'position'} >
                    <View style={styles.box1}>
                        <Image source={require('../../assets/Imagens/unnamed.png')} style={styles.image_person} />
                        {loading ? <ActivityIndicator size={"large"} color={'#00a1a3'}></ActivityIndicator> : <Text></Text>}
                    </View>
                    <View style={styles.box2}>
                        <TextInput
                            returnKeyType={'next'}
                            autoCapitalize={'none'}
                            style={styles.input}
                            placeholder={'E-mail'}
                            placeholderTextColor={'#000'}
                            onChangeText={handleChange('Login')}
                            ref={Login}
                            value={values.Login}
                        />
                        {errors.Login && <Text style={styles.textErro}>{errors.Login}</Text>}
                        <TextInput
                            style={styles.input}
                            placeholder={'Senha'}
                            placeholderTextColor={'#000'}
                            secureTextEntry
                            onChangeText={handleChange('Senha')}
                            ref={Senha}
                            value={values.Senha}
                        />
                        {errors.Senha && <Text style={styles.textErro}>{errors.Senha}</Text>}
                        <TextInput
                            style={styles.input}
                            placeholder={'ConfimarSenha'}
                            placeholderTextColor={'#000'}
                            secureTextEntry
                            onChangeText={handleChange('ConfimarSenha')}
                            ref={ConfimarSenha}
                            value={values.ConfimarSenha}
                        />
                        {errors.ConfimarSenha && <Text style={styles.textErro}>{errors.ConfimarSenha}</Text>}
                        <TextInput
                            returnKeyType={'next'}
                            autoCapitalize={'none'}
                            style={styles.input}
                            placeholder={'Nome'}
                            ref={Nome}
                            onChangeText={handleChange('Nome')}
                            placeholderTextColor={'#000'}
                            value={values.Nome}
                        />
                        {errors.Nome && <Text style={styles.textErro}>{errors.Nome}</Text>}
                        <TextInput
                            returnKeyType={'next'}
                            autoCapitalize={'none'}
                            style={styles.input}
                            placeholder={'Sobrenome'}
                            placeholderTextColor={'#000'}
                            onChangeText={handleChange('Sobrenome')}
                            ref={Sobrenome}
                            value={values.Sobrenome}
                        />
                        {errors.Sobrenome && <Text style={styles.textErro}>{errors.Sobrenome}</Text>}
                        <TextInput
                            returnKeyType={'next'}
                            autoCapitalize={'none'}
                            style={styles.input}
                            placeholder={'Data de Nascimento'}
                            placeholderTextColor={'#000'}
                            onChangeText={handleChange('Nascimento')}
                            ref={Nascimento}
                            value={values.Nascimento}
                        />
                        {errors.Nascimento && <Text style={styles.textErro}>{errors.Nascimento}</Text>}
                        <TextInput
                            returnKeyType={'next'}
                            autoCapitalize={'none'}
                            style={styles.input}
                            placeholder={'Cpf'}
                            placeholderTextColor={'#000'}
                            onChangeText={handleChange('Cpf')}
                            ref={Cpf}
                            value={values.Cpf}
                        />
                        {errors.Cpf && <Text style={styles.textErro}>{errors.Cpf}</Text>}
                        <Picker
                            selectedValue={perfil}
                            style={{ height: 50, width: 200 }}
                            onValueChange={(item, itemIndex) => SetPerfil(item)}
                        >
                            <Picker.Item label="Perfil de Acesso" value='' />
                            <Picker.Item label="Cliente" value="0" />
                            <Picker.Item label="Médico" value="1" />
                            <Picker.Item label="Administrados" value="2" />
                        </Picker>
                        <Picker
                            selectedValue={estado}
                            ref={Ativo}
                            style={{ height: 50, width: 200 }}
                            onValueChange={(item, itemIndex) => setstado(item)}
                        >
                            <Picker.Item label="Sintuação" value='' />
                            <Picker.Item label="Ativo" value="1" />
                            <Picker.Item label="Inativo" value="0" />
                        </Picker>
                        {perfil == "1" ?
                            <TextInput
                                returnKeyType={'next'}
                                autoCapitalize={'none'}
                                style={styles.input}
                                placeholder={'CRM'}
                                placeholderTextColor={'#000'}
                                ref={Crm}
                                onChangeText={handleChange('Crm')}
                                value={values.crm}
                            /> : null
                        }
                        {perfil == "2" ?
                            <View>
                                <TextInput
                                    returnKeyType={'next'}
                                    autoCapitalize={'none'}
                                    style={styles.input}
                                    placeholder={'Matricula'}
                                    placeholderTextColor={'#000'}
                                    ref={Matricula}
                                    onChangeText={handleChange('Matricula')}
                                    value={values.matricula}
                                />
                                <TextInput
                                    returnKeyType={'next'}
                                    autoCapitalize={'none'}
                                    style={styles.input}
                                    placeholder={'TOKEN'}
                                    placeholderTextColor={'#000'}
                                    onChangeText={handleChange('Token')}
                                    ref={Token}
                                    value={values.token}
                                />
                            </View>
                            : null
                        }
                        <TouchableOpacity onPress={cadastrar} onPress={handleSubmit}>
                            <Image style={styles.btn} source={require('../../assets/Imagens/arrow.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.box3}>
                        <MyModal activeModal={modalActive} mensagem={msnModal} mudarEstado={setModalActive} navigation />
                    </View>
                </ScrollView>
            )}
        </Formik>
    )
}
