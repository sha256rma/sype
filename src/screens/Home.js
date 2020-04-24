import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AnimatedTabBar, {TabsConfigsType} from '@gorhom/animated-tabbar';

import SearchScreen from './Search';
import ProfileScreen from './Profile';
import UploadScreen from './Upload';
import FeedScreen from './Feed';

import HomeSVG from '../svg/HomeSVG';
import LikeSVG from '../svg/LikeSVG';
import SearchSVG from '../svg/SearchSVG';
import ProfileSVG from '../svg/ProfileSVG';

const Tab = createBottomTabNavigator();

const tabs: TabsConfigsType = {
  Feed: {
    labelStyle: {
      color: 'white',
    },
    icon: {
      component: HomeSVG,
      activeColor: 'rgba(255,255,255,1)',
      inactiveColor: 'rgba(68,68,68,1)',
    },
    background: {
      activeColor: 'rgba(51,51,51,1)',
      inactiveColor: 'rgba(51,51,51,0)',
    },
  },
  Upload: {
    labelStyle: {
      color: 'white',
    },
    icon: {
      component: LikeSVG,
      activeColor: 'rgba(255,255,255,1)',
      inactiveColor: 'rgba(68,68,68,1)',
    },
    background: {
      activeColor: 'rgba(51,51,51,1)',
      inactiveColor: 'rgba(51,51,51,0)',
    },
  },
  Search: {
    labelStyle: {
      color: 'white',
    },
    icon: {
      component: SearchSVG,
      activeColor: 'rgba(255,255,255,1)',
      inactiveColor: 'rgba(68,68,68,1)',
    },
    background: {
      activeColor: 'rgba(51,51,51,1)',
      inactiveColor: 'rgba(51,51,51,0)',
    },
  },
  Profile: {
    labelStyle: {
      color: 'white',
    },
    icon: {
      component: ProfileSVG,
      activeColor: 'rgba(255,255,255,1)',
      inactiveColor: 'rgba(68,68,68,1)',
    },
    background: {
      activeColor: 'rgba(51,51,51,1)',
      inactiveColor: 'rgba(51,51,51,0)',
    },
  },
};

const BubbleStyledScreen = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: '#080808',
        },
      }}
      tabBar={props => (
        <AnimatedTabBar iconSize={20} duration={500} tabs={tabs} {...props} />
      )}>
      <Tab.Screen
        name="Feed"
        initialParams={{
          backgroundColor: '#000',
        }}
        component={FeedScreen}
      />
      <Tab.Screen
        name="Upload"
        initialParams={{
          backgroundColor: '#000',
        }}
        component={UploadScreen}
      />
      <Tab.Screen
        name="Search"
        initialParams={{
          backgroundColor: '#000',
        }}
        component={SearchScreen}
      />
      <Tab.Screen
        name="Profile"
        initialParams={{
          backgroundColor: '#000',
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BubbleStyledScreen;
