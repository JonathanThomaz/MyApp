import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import About from '../pages/About';
import Home from '../pages/Home';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
