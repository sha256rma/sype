import React from 'react';
import {StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';

export default class FollowingButton extends React.Component {
  constructor(props) {
    super(props);
  }

  /** When the following button is clicked ==>
   * It open's up the list of user's
   * that is linked to  the profile
   * ie, the array of following is passed.
   *  */
  onFollowingClicked = () => {
    return console.log('Pressed Following');
  };

  render() {
    /** The user profile's followers */
    //const user_id = this.props.user_id;

    /** Here, we just need the count of following,
     * which is created when we query the users.
     */
    const following_count = this.props.following_count;

    return (
      <Chip style={styles.chip} onPress={this.onFollowingClicked}>
        Following {following_count}
      </Chip>
    );
  }
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: 'white',
  },
});
