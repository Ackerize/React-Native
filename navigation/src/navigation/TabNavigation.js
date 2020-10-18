import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack';
import AboutStack from './AboutStack';
import Contact from '../screens/Contact';

 const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeStack} options={{title: 'Home'}} />
      <Tab.Screen name="about" component={AboutStack} options={{title: 'About'}} />
    </Tab.Navigator>
  )
}; 

const Tab = createBottomTabNavigator();

export default TabNavigation;

