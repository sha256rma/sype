import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Title} from 'react-native-paper';
export default class ProfileAvatar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCommentClick = () => {};

  render() {
    return (
      <View style={styles.rowContainer}>
        <Avatar.Image size={24} source={{uri: this.props.img}} />
        <Title style={styles.titleStyle}>{this.props.username}</Title>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleStyle: {
    marginHorizontal: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
