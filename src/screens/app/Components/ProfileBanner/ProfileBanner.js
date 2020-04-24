import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProfileBannerAvatar from '../ProfileBannerAvatar/ProfileBannerAvatar';
import ProfileUsername from '../ProfileUsername/ProfileUsername';
import FollowerButton from '../FollowerButton/FollowerButton';
import FollowingButton from '../FollowingButton/FollowingButton';
import PostCountButton from '../PostCountButton/PostCountButton';

export default class ProfileBanner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      //user_id,
      username,
      user_id,
      profile_image,
      following_count,
      follower_count,
      posts_count,
    } = this.props;

    return (
      <View style={styles.profileBannerContainer}>
        <ProfileBannerAvatar profile_image={profile_image} />
        {/** Create three rows --- Possibly 4 but wull get back to this
         * 1. Username
         * 2. Profile Content
         * 3. Profile Display Views
         */}

        <View style={styles.interactiveContentContainer}>
          <View style={styles.rowContainer}>
            <ProfileUsername username={username} />
          </View>

          <View style={styles.rowContainer}>
            <FollowerButton user_id={user_id} follower_count={follower_count} />
            <FollowingButton
              user_id={user_id}
              following_count={following_count}
            />
          </View>

          <View style={styles.rowContainer}>
            <PostCountButton posts_count={posts_count} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileBannerContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  usernameFontSize: {
    fontSize: 25,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  interactiveContentContainer: {
    flex: 1,
  },
});
