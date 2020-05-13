import React from 'react';
import {Caption} from 'react-native-paper';
import {StyleSheet, TouchableOpacity} from 'react-native';

export default class CommentsTouchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCommentClick = () => {};

  render() {
    return (
      <TouchableOpacity onPress={() => console.log('go to view comments')}>
        <Caption style={styles.captionStyle}>
          View All {this.props.commentsLength} Comment
          {this.props.commentsLength <= 1 ? '' : 's'}
        </Caption>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  captionStyle: {
    fontSize: 14,
  },
});
