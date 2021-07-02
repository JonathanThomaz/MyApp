import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from './routes/drawer.app.routes';

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
