import React from 'react';
import {StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';
import {numberFormat} from '../../../../common/numberFormatter';
import PropTypes from 'prop-types';
import AirbnbPropTypes from 'airbnb-prop-types';

export default class FollowerButton extends React.Component {
  constructor(props) {
    super(props);
  }

  /** When the following button is clicked ==>
   * It open's up the list of user's
   * that is linked to  the profile
   * ie, the array of following is passed.
   *  */
  onFollowerClicked = user => {
    console.log('Pressed Follower Button of user ' + user);
    return 'This is the follower list of ' + user;
  };

  render() {
    /** The user profile's followers. The id can be changed to username. */
    const username = this.props.username;

    /** Here, we just need the count of followers,
     * which is created when we query the users.
     */
    let follower_count = this.props.follower_count;

    /** Cheat until we understand proptypes. Because we still need a way to handle string,bool,etc. */
    /** Worst case --> push in 0 for any type other than numeric. */
    /** According to Kartikeya's pull request(7) comment, we should set a miniumum to 0. */
    /** Also note, we should pass in this variable and not the prop if it violates the constraint */
    follower_count =
      Number.isInteger(follower_count) && follower_count >= 0
        ? follower_count
        : 0;

    return (
      /**https://stackoverflow.com/questions/47962396/passing-a-value-via-props-onpress -- How I got the function working. This makes sense, what type of a parameter would we even pass in via this onPress? */
      <Chip
        style={styles.chip}
        onPress={() => this.onFollowerClicked(username)}>
        Followers {numberFormat(follower_count, 1)}
      </Chip>
    );
  }
}

FollowerButton.propTypes = {
  username: PropTypes.string.isRequired,
  follower_count: AirbnbPropTypes.nonNegativeInteger.isRequired,
};

const styles = StyleSheet.create({
  chip: {
    backgroundColor: 'white',
  },
});
