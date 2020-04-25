import React from 'react';
import {Subheading} from 'react-native-paper';
import {Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

export default class UserCaption extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Subheading style={styles.SubheadingStyle}>
        <Text style={styles.boldStyle}>{this.props.username}</Text>{' '}
        <Text style={styles.captionStyles}>{this.props.caption}</Text>
      </Subheading>
    );
  }
}
UserCaption.propTypes = {
  caption: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  boldStyle: {
    fontWeight: 'bold',
  },
  captionStyles: {textAlignVertical: 'center', flexWrap: 'wrap'},
  SubheadingStyle: {
    textAlignVertical: 'center',
  },
});
