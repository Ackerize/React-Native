import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Contact from '../screens/Contact';
import {Text} from 'react-native';

const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  const {openDrawer} = navigation;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'Home',
          headerLeft: () => <Text onPress={openDrawer}>Menu</Text>,
        }}
      />
      <Stack.Screen
        name="contact"
        component={Contact}
        options={{title: 'Contact'}}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
