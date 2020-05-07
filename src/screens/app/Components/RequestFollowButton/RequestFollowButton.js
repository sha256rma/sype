import {Button} from 'react-native-paper';
import React from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';

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
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {this.state.isFollowing ? (
          <Button
            mode={'text'}
            color={'black'}
            style={{backgroundColor: '#efe5ef', width: '65%', height: '90%'}}
            onPress={() => this.removeFollower()}>
            Unfollow
          </Button>
        ) : (
          <Button
            mode={'text'}
            dark={true}
            color={'white'}
            style={{backgroundColor: 'purple', width: '65%', height: '90%'}}
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
