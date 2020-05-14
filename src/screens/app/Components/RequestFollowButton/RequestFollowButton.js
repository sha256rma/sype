import {Button} from 'react-native-paper';
import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

/** This is the 'Follow Unfollow' button a user would see to follow or unfollow a user */

export default class RequestFollowButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFollowing: this.props.isFollowing,
    };
  }

  /** For Backend, also make sure thats the case, tht we add and unadd. We also need to think about
   * how we would be able to update Follower/Following buttons. we would have to re-direct state? Or maybe when re-rendering this state,
   * it can somehow change that state? Like on currentMount? Not sure....
   */
  removeFollower = () => {
    /** Set the state to no longer following, and do backend to remove! */
    this.setState({isFollowing: false});
    console.log('Follower Removed!');
    /** Do componenets re-render when state changes? I believe so.... */
  };

  addFollower = () => {
    this.setState({isFollowing: true});
    console.log('Follower Added!');
  };

  render() {
    return (
      <View style={styles.requestButtonContainer}>
        {this.state.isFollowing ? (
          <Button
            testID="request-unfollow-button"
            mode={'text'}
            color={'black'}
            style={styles.unfollowTextButton}
            onPress={() => this.removeFollower()}>
            Unfollow
          </Button>
        ) : (
          <Button
            testID="request-follow-button"
            mode={'text'}
            dark={true}
            color={'white'}
            style={styles.followTextButton}
            onPress={() => this.addFollower()}>
            Follow
          </Button>
        )}
      </View>
    );
  }
}
RequestFollowButton.propTypes = {
  isFollowing: PropTypes.bool.isRequired,
};

const styles = StyleSheet.create({
  requestButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unfollowTextButton: {
    backgroundColor: '#efe5ef',
    width: '65%',
    height: '90%',
  },
  followTextButton: {
    backgroundColor: 'purple',
    width: '65%',
    height: '90%',
  },
});
