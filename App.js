import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';

import AddPhoto from './src/screens/AddPhoto';
import List from './src/screens/List';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{ title: 'Welcome!' }}
        />

        <Stack.Screen 
          name="AddPhoto" 
          component={AddPhoto}
          options={{ title: 'Take a picture' }}
        />

        <Stack.Screen 
          name="List" 
          component={List}
          options={{ title: 'List of Images' }}
        />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;