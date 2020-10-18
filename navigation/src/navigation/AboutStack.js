import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import About from '../screens/About';
import Courses from '../screens/Courses';

const Stack = createStackNavigator();

const AboutStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="about" component={About} options={{title: 'About'}} />
      <Stack.Screen
        name="courses"
        component={Courses}
        options={{title: 'Courses'}}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;
