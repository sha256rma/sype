/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {Caption} from 'react-native-paper';

export default class CommentsTouchBox extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCommentClick = () => {};

  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => console.log('go to view comments')}>
        <Caption style={{fontSize: 14}}>
          View All {this.props.commentsLength} Comment
          {this.props.commentsLength <= 1 ? '' : 's'}
        </Caption>
      </TouchableWithoutFeedback>
    );
  }
}
