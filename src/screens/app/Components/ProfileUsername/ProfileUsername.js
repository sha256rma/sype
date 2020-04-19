import React from 'react';
import {StyleSheet, Text} from 'react-native';

export default class ProfileUsername extends React.Component {
  render() {
    /** Made this its own class if we ever want to go back and utalize a library to style it,
     * we would just target this. Though we can remove this class and just move everything abck to ProfileBanner.
     */
    return <Text style={styles.usernameFontSize}>{this.props.username}</Text>;
  }
}

const styles = StyleSheet.create({
  usernameFontSize: {
    fontSize: 25,
  },
});
