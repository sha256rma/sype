import React from 'react';
import {View, StyleSheet} from 'react-native';
import ProfileBannerAvatar from '../ProfileBannerAvatar/ProfileBannerAvatar';
import ProfileUsername from '../ProfileUsername/ProfileUsername';
import FollowerButton from '../FollowerButton/FollowerButton';
import FollowingButton from '../FollowingButton/FollowingButton';
import PostCountButton from '../PostCountButton/PostCountButton';
import PropTypes from 'prop-types';
import AirbnbPropTypes from 'airbnb-prop-types';

export default class ProfileBanner extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      //user_id,
      username,
      profile_image,
      following_count,
      follower_count,
      posts_count,
    } = this.props;

    return (
      <View style={styles.profileBannerContainer}>
        <ProfileBannerAvatar
          username={username}
          profile_image={profile_image}
        />
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
            <FollowerButton
              username={username}
              follower_count={follower_count}
            />
            <FollowingButton
              username={username}
              following_count={following_count}
            />
          </View>

          <View style={styles.rowContainer}>
            <PostCountButton username={username} posts_count={posts_count} />
          </View>
        </View>
      </View>
    );
  }
}

ProfileBanner.propTypes = {
  username: PropTypes.string.isRequired,
  profile_image: PropTypes.string.isRequired,
  following_count: AirbnbPropTypes.nonNegativeInteger.isRequired,
  follower_count: AirbnbPropTypes.nonNegativeInteger.isRequired,
  posts_count: AirbnbPropTypes.nonNegativeInteger.isRequired,
};

const styles = StyleSheet.create({
  profileBannerContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#ffffff',
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
