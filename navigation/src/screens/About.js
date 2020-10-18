import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const About = ({ navigation }) => {
    return (
        <View>
            <Text>Estamos en About</Text>
            <Button title="Ir a Contact" onPress={() => navigation.navegate('contact')} />
        </View>
    )
}

export default About

const styles = StyleSheet.create({})
