import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, TextInput, View } from 'react-native'

const RegisterForm = ({ changeForm }) => {

    const [formData, setFormData] = useState(defaultValue());

    const register = () => {
        console.log('Registrando');
    };

    return (
        <>
            <TextInput
                style={ styles.input }
                placeholder="Email"
                placeholderTextColor="#969696"
                onChange={ (e) => setFormData({ ...formData, email: e.nativeEvent.text }) }
            />
            <TextInput
                style={ styles.input }
                placeholder="Password"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={ (e) => setFormData({ ...formData,password: e.nativeEvent.text }) }
            />
            <TextInput
                style={ styles.input }
                placeholder="Confirm password"
                placeholderTextColor="#969696"
                secureTextEntry={true}
                onChange={ (e) => setFormData({ ...formData, confirmPassword: e.nativeEvent.text }) }
            />

            <TouchableOpacity onPress={register}>
                <Text style={ styles.btnText }>Sign in</Text>
            </TouchableOpacity>
            
            <View style={ styles.login }>
                <TouchableOpacity onPress={ changeForm } >
                    <Text style={ styles.btnText }>Login</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const defaultValue = () => {
    return {
        email: "",
        password: "",
        confirmPassword: ""
    }
};

export default RegisterForm

const styles = StyleSheet.create({
    btnText: {
        color: "#fff",
        fontSize: 18
    },
    input: {
        height: 50,
        color: '#fff',
        width: '80%',
        marginBottom: 25,
        backgroundColor: '#1e3040',
        paddingHorizontal: 20,
        borderRadius: 50,
        fontSize: 18,
        borderWidth: 1,
        borderColor: "#1e3040"
    }, 
    login: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 15
    }
})
