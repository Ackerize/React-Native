import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './HomeStack';
import AboutStack from './AboutStack'; 


 const Navigation = () => {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="home" component={HomeStack} options={{title: 'Home'}} />
      <Drawer.Screen name="about" component={AboutStack} options={{title: 'About'}} />
    </Drawer.Navigator>
  )
    
}; 

const Drawer = createDrawerNavigator();

export default Navigation;

