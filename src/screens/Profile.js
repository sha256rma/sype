import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

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

  // this.state = {
  //   username: 'bujarsefa',
  //   user_id: 'bujarsefa',
  //   following_count: 20000000,
  //   follower_count: 15000,
  //   posts_count: 673,
  //   profile_image:
  //     'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
  // };

  async function logOut() {
    try {
      await auth().signOut();
    } catch (e) {
      console.error(e);
    }
  }

  // renders
  return (
    <View style={styles.container}>
      {/** Passing in state for testing purposes, but we can/should switch this to individual props :) */}
      {/* <ProfileBanner {...this.state} /> */}
      {/** Adding this view just to show where images would  */}
      <View style={styles.imageContainer} />

      <TouchableOpacity onPress={logOut} >
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    top: '5%',
  },
  imageContainer: {
    borderColor: 'purple',
    borderWidth: 1,
    marginTop: 20,
  },
});

export default ProfileScreen;
