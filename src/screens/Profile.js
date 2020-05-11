import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
/**
import Showcase from '@gorhom/showcase-template';
import {version, description} from '../../package.json';
*/
import ProfileBanner from './app/Components/ProfileBanner/ProfileBanner';

/**
const examples = [
  {
    name: 'Settings',
    slug: 'Settings',
  },
  {
    name: 'FAQ',
    slug: 'faq',
  },
  {
    name: 'Privacy and Security',
    slug: 'privacy',
  },
];

*/

const ProfileScreen = () => {
  // hooks
  //const {navigate} = useNavigation();

  // callbacks
  /**
  const handleOnExamplePress = (slug: string) => {
    navigate(slug);
  };
  */

  this.state = {
    username: 'bujarsefa',
    user_id: 'bujarsefa',
    following_count: 20000000,
    follower_count: 15000,
    posts_count: 673,
    profile_image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  };

  // renders
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topLogoBar}>
        <Text style={styles.logoText}>Sype</Text>
      </View>
      {/** Passing in state for testing purposes, but we can/should switch this to individual props :) */}
      <ProfileBanner {...this.state} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    flex: 1,
    top: '5%',
  },
  imageContainer: {
    borderColor: 'purple',
    borderWidth: 1,
    marginTop: 20,
  },
  topLogoBar: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#6200ee',
  },
  logoText: {
    fontFamily: 'Georgia',
    color: 'white',
    padding: '3%',
    fontSize: 22,
  },
});

export default ProfileScreen;
