//import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/Screens/Home';
import Address from './src/Screens/Address';
import Cart from './src/Screens/Cart';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            headerStyle: {
              backgroundColor: 'red',
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
              backgroundColor: 'red',
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
              backgroundColor: 'red',
            },
            headerTitleStyle: {
              fontSize: 25,
              color: 'white',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
