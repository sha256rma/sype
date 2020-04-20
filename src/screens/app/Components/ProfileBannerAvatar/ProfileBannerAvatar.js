import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar} from 'react-native-paper';

export default class ProfileBannerAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const profile_image = this.props.profile_image;

    /** This is a varibale  */
    const profile_image_size = 75;

    return (
      <View style={styles.profileBannerImageContent}>
        <Avatar.Image size={profile_image_size} source={{uri: profile_image}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profileBannerImageContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
