import React from 'react';
import {StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';
import {numberFormat} from '../../../../common/numberFormatter';
import PropTypes from 'prop-types';
import AirbnbPropTypes from 'airbnb-prop-types';

export default class PostCountButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const username = this.props.username;

    /** Here, we just need the count of posts,
     * which is created when we query the users.
     */
    let posts_count = this.props.posts_count;

    /** Cheat until we understand proptypes. Because we still need a way to handle string,bool,etc. */
    /** Worst case --> push in 0 for any type other than numeric. */

    /** According to Kartikeya's pull request(7) comment, we should set a miniumum to 0. */
    /** Also note, we should pass in this variable and not the prop if it violates the constraint */
    posts_count =
      Number.isInteger(posts_count) && posts_count >= 0 ? posts_count : 0;

    return <Chip style={styles.chip}>Posts {numberFormat(posts_count)}</Chip>;
  }
}

PostCountButton.propTypes = {
  username: PropTypes.string.isRequired,
  posts_count: AirbnbPropTypes.nonNegativeInteger.isRequired,
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: 'white',
  },
});
