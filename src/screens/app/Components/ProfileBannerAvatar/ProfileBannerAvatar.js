import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';
import PropTypes from 'prop-types';

export default class ProfileBannerAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const default_profile_image =
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80';
    const profile_image_size = 100;
    const username = this.props
      .username; /** Passing cause you never know...But we can probably delete. */
    let profile_image = this.props.profile_image;

    /** Verify we have a string. Otherwise throw in the default profile pic. */
    profile_image =
      typeof profile_image === 'string' || profile_image instanceof String
        ? profile_image
        : default_profile_image;

    return (
      <View style={styles.profileBannerImageContent}>
        <Avatar.Image size={profile_image_size} source={{uri: profile_image}} />
      </View>
    );
  }
}

ProfileBannerAvatar.propTypes = {
  username: PropTypes.string.isRequired,
  profile_image:
    PropTypes.string
      .isRequired /** NOTE, it's probably good to look for a url verifier, or however we are exactly looking at images */,
};

const styles = StyleSheet.create({
  profileBannerImageContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
