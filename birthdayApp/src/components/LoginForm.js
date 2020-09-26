import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const LoginForm = ({ changeForm }) => {
    return (
        <View>
            <Text>LoginForm</Text>
            <TouchableOpacity onPress={ changeForm }>
                <Text style={ styles.btnText }> Sign up </Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginForm

const styles = StyleSheet.create({
    btnText: {
        color: "#fff",
        fontSize: 18
    }
})
