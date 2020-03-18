import React from 'react';
import { StatusBar, Platform, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FeedScreen from '@screens/app/FeedScreen';
import ChatScreen from '@screens/app/ChatScreen';
import ProfileScreen from '@screens/app/ProfileScreen';
import CameraScreen from '@screens/app/CameraScreen';

const Tab = createMaterialTopTabNavigator();

function App() {
    return (
        <NavigationContainer >
            <StatusBar backgroundColor={'powderblue'} barStyle="light-content" />
            <Tab.Navigator
                initialRouteName="Feed"
                tabBarOptions={{
                    activeTintColor: 'black',
                    labelStyle: { fontSize: 12 },
                    style: { backgroundColor: 'powderblue' },
                }}
                style={Platform.OS = 'ios' ? { paddingTop: Dimensions.get('window').height * .035 } : {}}
            >
                <Tab.Screen
                    name="Chat"
                    component={ChatScreen}
                    options={{ tabBarLabel: 'Chat' }}
                />
                <Tab.Screen
                    name="Feed"
                    component={FeedScreen}
                    options={{ tabBarLabel: 'Feed' }}
                />

                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{ tabBarLabel: 'Profile' }}
                />
            </Tab.Navigator>
        </NavigationContainer >
    );
}

export default App;