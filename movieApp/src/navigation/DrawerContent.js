import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import {Drawer, Switch, TouchableRipple, Text} from 'react-native-paper';

const DrawerContent = ({navigation}) => {
  const [active, setActive] = useState('home');

  const onChangeScreen = (screen) => {
      setActive(screen);
      navigation.navigate(screen);
  };

  return (
    <DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item
          label="Inicio"
          active={active === "home"}
          onPress={() => onChangeScreen('home')}
        />
        <Drawer.Item
          label="Peliculas populares"
          active={active === "popular"}
          onPress={() => onChangeScreen('popular')}
        />
        <Drawer.Item
          label="Nuevas peliculas"
          active={active === "news"}
          onPress={() => onChangeScreen('news')}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({});
