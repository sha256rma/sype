import React from 'react';
import {StatusBar, Platform, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import FeedScreen from '@screens/app/FeedScreen';
import ChatScreen from '@screens/app/ChatScreen';
import ProfileScreen from '@screens/app/ProfileScreen';
import SearchScreen from '@screens/app/SearchScreen';

//const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <ProfileScreen />
  );
}

export default App;
