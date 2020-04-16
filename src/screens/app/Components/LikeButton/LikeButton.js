import {IconButton} from 'react-native-paper';
import React from 'react';

export default class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.isLiked) {
      this.state = {
        isLiked: this.props.isLiked,
      };
    } else {
      this.state = {
        isLiked: false,
      };
    }
  }

  handleLikeClick = event => {
    if (this.state.isLiked) {
      this.setState({
        isLiked: false,
      });
    } else {
      this.setState({
        isLiked: true,
      });
    }
  };

  render() {
    return (
      <IconButton
        icon={this.state.isLiked ? 'heart' : 'heart-outline'}
        size={25}
        color={this.state.isLiked ? 'red' : 'grey'}
        onPress={this.handleLikeClick}
      />
    );
  }
}
