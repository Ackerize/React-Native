import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Estamos en Home</Text>
      <Button title="Ir a About" onPress={() => navigation.navegate('about')} />
      <Button
        title="Ir a Contact"
        onPress={() => navigation.navegate('contact')}
      />
      <Button
        title="Ir a Cursos"
        onPress={() => navigation.navegate('about', {screen: 'courses'})}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
