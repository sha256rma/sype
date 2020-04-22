import 'react-native';
import React from 'react';
import FollowingButton from '@screens/app/Components/FollowingButton/FollowingButton';
import {shallow} from 'enzyme';
import {Chip} from 'react-native-paper';
import renderer from 'react-test-renderer';

/** See FollowerButton-test for more notes on the tests! */

test('Following Button Snapshot Test', () => {
  const tree = renderer.create(<FollowingButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

/** This is currently testing the dummy placeholder code. However,
 * it will need to be resturcutred to open up a new page that passes through an array of following.
 */
function testOnFollowingClicked(user_id) {
  it('onFollowingClicked username is returned', () => {
    const wrapper = shallow(<FollowingButton user_id={user_id} />);
    const chipWrapper = wrapper.find(Chip);
    const chipProps = chipWrapper.first().props();
    const chipPressFunctionVal = chipProps.onPress();
    console.log(chipPressFunctionVal);
    expect(chipPressFunctionVal).toEqual(
      'This is the following list of ' + user_id,
    );
  });
}

/** Check that the property values passed into the prop, appear on the prop. */
function testProperPropsPassed(user_id, following_count) {
  it('User ID value is the Following Button prop value', () => {
    /** Does it matter if we pass in follower_count simulatanously? */
    const wrapper = shallow(<FollowingButton user_id={user_id} />);
    const instance = wrapper.instance();
    const userIDProp = instance.props.user_id;
    expect(user_id).toEqual(userIDProp);
  });

  it('Follower Count value is the Following Button prop value', () => {
    /** Does it matter if we pass in following_count simulatanously? */
    const wrapper = shallow(
      <FollowingButton following_count={following_count} />,
    );
    const instance = wrapper.instance();
    const followingCountProp = instance.props.following_count;
    expect(following_count).toEqual(followingCountProp);
  });
}

describe('Following Button Unit Tests', () => {
  testOnFollowingClicked('bujarsefa');
  testOnFollowingClicked('');
  testOnFollowingClicked('!');
  /** Do we make this function handle only string data types? Something that we
   * should get back to.
   */
  testOnFollowingClicked(0);
  testOnFollowingClicked(-1);
  testOnFollowingClicked(undefined);

  /**Again, do we allow strings in for follower count??? */
  testProperPropsPassed('bujarsefa', 0);
  testProperPropsPassed('', '');
  testProperPropsPassed(undefined, undefined);
  testProperPropsPassed(0, '');
});
