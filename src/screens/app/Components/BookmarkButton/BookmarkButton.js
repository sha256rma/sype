import {IconButton} from 'react-native-paper';
import React from 'react';
<<<<<<< HEAD
=======
import styles from './styles';
>>>>>>> 36ab8c947c992f70038794805d31bae31b7c7a82

export default class BookmarkButton extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.isBookmarked) {
      this.state = {
        isBookmarked: this.props.isBookmarked,
      };
    } else {
      this.state = {
        isBookmarked: false,
      };
    }
  }

  handleSaveClick = event => {
    if (this.state.isBookmarked) {
      this.setState({
        isBookmarked: false,
      });
    } else {
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
        color={this.state.isBookmarked ? 'black' : 'grey'}
        onPress={this.handleSaveClick}
      />
    );
  }
}
