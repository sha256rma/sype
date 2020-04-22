import React from 'react';
import {StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';

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
    const user_id = this.props.user_id;

    /** Here, we just need the count of followers,
     * which is created when we query the users.
     */
    const follower_count = this.props.follower_count;

    return (
      /**https://stackoverflow.com/questions/47962396/passing-a-value-via-props-onpress -- How I got the function working. This makes sense, what type of a parameter would we even pass in via this onPress? */
      <Chip style={styles.chip} onPress={() => this.onFollowerClicked(user_id)}>
        Followers {follower_count}
      </Chip>
    );
  }
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: 'white',
  },
});
