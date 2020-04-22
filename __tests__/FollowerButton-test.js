import 'react-native';
import React from 'react';
import FollowerButton from '@screens/app/Components/FollowerButton/FollowerButton';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {Chip} from 'react-native-paper';

/** Snapshot test */
test('Follower Button Snapshot Test', () => {
  const tree = renderer.create(<FollowerButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

/** This is currently testing the dummy placeholder code. However,
 * it will need to be resturcutred to open up a new page that passes through an array of followers.
 */
function testOnFollowerClicked(user_id) {
  it('onFollowerClicked username is returned', () => {
    const wrapper = shallow(<FollowerButton user_id={user_id} />);
    /** DONT FORGET TO PASS IN THE PROP TO THE FUNCTION. */
    /** After another hour.....
     * 1. this link helped: https://docs.reactnativestarter.com/testing
     * 2. Import the component + search by component.
     * Passing in String component name DOES NOT return ANY nodes.
     */
    const chipWrapper = wrapper.find(Chip);
    const chipProps = chipWrapper.first().props();
    const chipPressFunctionVal = chipProps.onPress();
    console.log(chipPressFunctionVal);
    expect(chipPressFunctionVal).toEqual(
      'This is the follower list of ' + user_id,
    );
  });
}

/** Check that the property values passed into the prop, appear on the prop. */
function testProperPropsPassed(user_id, follower_count) {
  it('User ID value is the FollowerButton prop value', () => {
    /** Does it matter if we pass in follower_count simulatanously? */
    const wrapper = shallow(<FollowerButton user_id={user_id} />);
    const instance = wrapper.instance();
    const userIDProp = instance.props.user_id;
    expect(user_id).toEqual(userIDProp);
  });

  it('Follower Count value is the FollowerButton prop value', () => {
    /** Does it matter if we pass in follower_count simulatanously? */
    const wrapper = shallow(<FollowerButton follower_count={follower_count} />);
    const instance = wrapper.instance();
    const followerCountProp = instance.props.follower_count;
    expect(follower_count).toEqual(followerCountProp);
  });
}

describe('Follower Button Unit Tests', () => {
  testOnFollowerClicked('bujarsefa');
  testOnFollowerClicked('');
  testOnFollowerClicked('!');
  /** Do we make this function handle only string data types? Something that we
   * should get back to.
   */
  testOnFollowerClicked(0);
  testOnFollowerClicked(-1);
  testOnFollowerClicked(undefined);

  /**Again, do we allow strings in for follower count??? */
  testProperPropsPassed('bujarsefa', 0);
  testProperPropsPassed('', '');
  testProperPropsPassed(undefined, undefined);
  testProperPropsPassed(0, '');
});
