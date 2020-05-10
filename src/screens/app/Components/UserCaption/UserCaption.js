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
       
        <Text style={styles.captionStyles, styles.boldStyle}>{this.props.caption}</Text>
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
    color: '#3700b3'
  },
  captionStyles: {  justifyContent: 'center', flexWrap: 'wrap'},
});
