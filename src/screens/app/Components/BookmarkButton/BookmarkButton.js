import {IconButton} from 'react-native-paper';
import React from 'react';
import PropTypes from 'prop-types';

export default class BookmarkButton extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.isBookmarked === true) {
      this.state = {
        isBookmarked: this.props.isBookmarked,
      };
    } else if (this.props.isBookmarked === false) {
      this.state = {
        isBookmarked: false,
      };
    }
  }

  handleSaveClick = event => {
    if (this.state.isBookmarked === true) {
      this.setState({
        isBookmarked: false,
      });
    } else if (this.state.isBookmarked === false) {
      this.setState({
        isBookmarked: true,
      });
    }
  };

  render() {
    return (
      <IconButton
        icon={this.state.isBookmarked ? 'bookmark' : 'bookmark-outline'}
        size={25}
        color={this.state.isBookmarked ? '#018786' : 'black'}
        onPress={this.handleSavelick}
        style={{margin: 0}}
      />
    );
  }
}
BookmarkButton.propTypes = {
  isBookmarked: PropTypes.bool.isRequired,
};
