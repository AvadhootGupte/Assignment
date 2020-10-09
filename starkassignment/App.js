//import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Screens/Home';
import Address from './src/Screens/Address';
import Cart from './src/Screens/Cart';

import {Provider} from 'react-redux';

import ConfigStore from './src/redux/store/ConfigStore';

const Stack = createStackNavigator();

const App = () => {
  return (

    <Provider store={ConfigStore}>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: '#ff99e6',
            },
            headerTitleStyle: {
              fontSize: 25,
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="Address"
          component={Address}
          options={{
            title: 'Address',
            headerBackTitle: '',
            headerStyle: {
              backgroundColor: '#ff99e6',
            },
            headerTitleStyle: {
              fontSize: 25,
              color: 'white',
            },
          }}
        />
        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{
            title: 'Cart',
            headerBackTitle: '',
            headerStyle: {
              backgroundColor: '#ff99e6',
            },
            headerTitleStyle: {
              fontSize: 25,
              color: 'white',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  
    </Provider>
  );
};

export default App;
