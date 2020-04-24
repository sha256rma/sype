import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProfileBanner from './Components/ProfileBanner/ProfileBanner';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    top: '5%'
  },
  imageContainer: {
    borderColor: 'purple',
    borderWidth: 1,
    marginTop: 20,
  },
});

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'bujarsefa',
      user_id: 'bujarsefa',
      following_count: '20000000',
      follower_count: 150000,
      posts_count: '20000000',
      profile_image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {/** Passing in state for testing purposes, but we can/should switch this to individual props :) */}
        <ProfileBanner {...this.state} />
        {/** Adding this view just to show where images would  */}
        <View style={styles.imageContainer} />
      </View>
    );
  }
}
