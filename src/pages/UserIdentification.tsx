import React, { useState } from 'react';
import {
    SafeAreaView, //permite o container da aplicação ficar na área safe da tela do dispositivo
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView, //faz com que a tela da aplicação se adpte ao espaço disponível ao abrir o teclado
    TouchableWithoutFeedback,
    Platform, //permite identificar o ambiente que está rodando a aplicação 
    Keyboard,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';
import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function UserIdentification() {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>(); //como não está passando valor padrão, posso atribuir um tipo para a entrada
    const navigation = useNavigation(); //executor da navegação entre telas

    function handleSubmit() {
        navigation.navigate('Confirmation');
    }

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value); //os 2x "!!" torna um resultado booleano
        setName(value);
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'} //ajuda a ajustar a apresentação da tela de acordo com a plataforma ao abrir o teclado
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <Text style={styles.emoji}>
                                {isFilled ? '😉' : '😄'}
                            </Text>

                            <Text style={styles.title}>
                                Como podemos {'\n'}
                            chamar você?
                        </Text>

                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) && { borderColor: colors.green } //testa se o foco ta no TextInput, caso sim aplica mais uma propriedade css
                                ]}
                                placeholder="Digite um nome"
                                onBlur={handleInputBlur} //quando sai do TextInput
                                onFocus={handleInputFocus} //quando o foco vai para o TextInput
                                onChangeText={handleInputChange} //captura o valor do TextInput
                            />
                            <View style={styles.footer}>
                                <Button
                                    title="Confirmar"
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 44,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 20,
    },
    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 20
    }
})