import React from 'react';
import {Subheading} from 'react-native-paper';
import {Text, StyleSheet} from 'react-native';

export default class UserCaption extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCommentClick = () => {};

  render() {
    return (
      <Subheading style={styles.SubheadingStyle}>
        <Text style={styles.boldStyle}>{this.props.username}</Text>{' '}
        <Text style={styles.captionStyles}>{this.props.caption}</Text>
      </Subheading>
    );
  }
}
const styles = StyleSheet.create({
  boldStyle: {
    fontWeight: 'bold',
  },
  captionStyles: {textAlignVertical: 'center', flexWrap: 'wrap'},
  SubheadingStyle: {
    textAlignVertical: 'center',
  },
});
