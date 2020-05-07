import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';

/**
import Showcase from '@gorhom/showcase-template';
import {version, description} from '../../package.json';
*/
import ProfileBanner from './app/Components/ProfileBanner/ProfileBanner';
import ProfileImageList from './app/Components/ProfileImageList/ProfileImageList';

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

  /** NOTE, added your_id becasue that can different from the user that you are viewing! */
  this.state = {
    username: 'bujarsefa',
    user_id: 'bujarsefa',
    following_count: 20000000,
    follower_count: 15000,
    posts_count: 673,
    your_id: 'bujarsefa',
    profile_image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    isFollowing: true,
  };

  // renders
  return (
    <View style={styles.container}>
      {/** Passing in state for testing purposes, but we can/should switch this to individual props :) */}
      <ProfileBanner {...this.state} />
      {/** Adding this view just to show where images would  */}

      {/** I think what I'm going to do is split banner from image view.
       * So even the list views will be its own row, under the Profile Banner
       * this is becasue the button must change the state, which
       * the correlates directly to the FlatList (or porentially swiper)
       * that appears.
       */}
      <ProfileImageList />
      <View style={styles.imageContainer} />
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
