import React from 'react';
import {StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';
import {numberFormat} from '../../../../common/numberFormatter';

export default class FollowingButton extends React.Component {
  constructor(props) {
    super(props);
  }

  /** When the following button is clicked ==>
   * It open's up the list of user's
   * that is linked to  the profile
   * ie, the array of following is passed.
   *  */

  onFollowingClicked = user => {
    console.log('Pressed Following Button of user ' + user);
    return 'This is the following list of ' + user;
  };

  render() {
    /** The user profile's followers */
    const user_id = this.props.user_id;

    /** Here, we just need the count of following,
     * which is created when we query the users.
     */
    let following_count = this.props.following_count;

    /** Cheat until we understand proptypes. Because we still need a way to handle string,bool,etc. */
    /** Worst case --> push in 0 for any type other than numeric. */
    following_count = following_count === undefined ? '0' : following_count; 



    return (
      <Chip
        style={styles.chip}
        onPress={() => this.onFollowingClicked(user_id)}>
        Following {numberFormat(following_count)}
      </Chip>
    );
  }
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: 'white',
  },
});
