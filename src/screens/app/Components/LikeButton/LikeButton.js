import {IconButton} from 'react-native-paper';
import React from 'react';
import PropTypes from 'prop-types';

export default class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.isLiked === true) {
      this.state = {
        isLiked: this.props.isLiked,
      };
    } else if (this.props.isLiked === false) {
      this.state = {
        isLiked: false,
      };
    }
  }

  handleLikeClick = event => {
    if (this.state.isLiked === true) {
      this.setState({
        isLiked: false,
      });
    } else if (this.state.isLiked === false) {
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
        color={this.state.isLiked ? '#cf6679' : 'black'}
        onPress={this.handleLikeClick}
        style={{margin: 0}}
      />
    );
  }
}
LikeButton.propTypes = {
  isLiked: PropTypes.bool.isRequired,
};
