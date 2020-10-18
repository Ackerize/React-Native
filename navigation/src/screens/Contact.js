import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Contact = ({ navigation }) => {
    return (
        <View>
            <Text>Estamos en Contact</Text>
            <Button title="About" onPress={ () => navigation.navigate("about") }/>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({})
