import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {TabStackRoutes} from './routes';
const App = () => {
  return (
    <NavigationContainer initialRouteName="Dashboard">
      <TabStackRoutes />
    </NavigationContainer>
  );
};

export default App;
