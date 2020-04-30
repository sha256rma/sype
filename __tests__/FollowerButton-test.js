import 'react-native';
import React from 'react';
import FollowerButton from '@screens/app/Components/FollowerButton/FollowerButton';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {Chip} from 'react-native-paper';
import {numberFormat} from '../src/common/numberFormatter';
import checkPropTypes from 'check-prop-types';
var assert = require('assert'); /** NODE.js assert function */

/** ================ HELPER FUNCTIONS =============== */

/** This is currently testing the dummy placeholder code. However,
 * it will need to be resturcutred to open up a new page that passes through an array of followers.
 */
function testOnFollowerClicked(username) {
  it('onFollowerClicked username is returned', () => {
    const wrapper = shallow(<FollowerButton username={username} />);
    /** DONT FORGET TO PASS IN THE PROP TO THE FUNCTION. */
    /** After another hour.....
     * 1. this link helped: https://docs.reactnativestarter.com/testing
     * 2. Import the component + search by component.
     * Passing in String component name DOES NOT return ANY nodes.
     */
    const chipWrapper = wrapper.find(Chip);
    const chipProps = chipWrapper.first().props();
    const chipPressFunctionVal = chipProps.onPress();
    //console.log(chipPressFunctionVal);
    expect(chipPressFunctionVal).toEqual(
      'This is the follower list of ' + username,
    );
  });
}

/** Check that the property values passed into the prop, appear on the prop. */
function testProperPropsPassed(username, follower_count) {
  it('Username value is the FollowerButton prop value', () => {
    /** Does it matter if we pass in follower_count simulatanously? */
    const wrapper = shallow(<FollowerButton username={username} />);
    const instance = wrapper.instance();
    const usernameProp = instance.props.username;
    expect(username).toEqual(usernameProp);
  });

  it('Follower Count value is the FollowerButton prop value', () => {
    /** Does it matter if we pass in follower_count simulatanously? */
    const wrapper = shallow(<FollowerButton follower_count={follower_count} />);
    const instance = wrapper.instance();
    const followerCountProp = instance.props.follower_count;
    expect(follower_count).toEqual(followerCountProp);
  });
}

/** Pass in all props for when we require them */
function testChipInnerText(username, follower_count) {
  it('Follower Chip should Display Followers ' + follower_count, () => {
    const wrapper = shallow(
      <FollowerButton username={username} follower_count={follower_count} />,
    );
    const chipWrapper = wrapper.find(Chip);
    const chipText = chipWrapper.text();
    /**Check if follower_count is undefined -> expect 0 */
    const expectedFollowerCount =
      Number.isInteger(follower_count) && follower_count >= 0
        ? follower_count
        : 0;

    /**Formatting seems to work with ''  */
    expect(chipText).toEqual(
      'Followers ' + numberFormat(expectedFollowerCount),
    );
  });
}

/** ================ SNAPSHOT TEST ================ */
test('Follower Button Snapshot Test', () => {
  const tree = renderer
    .create(<FollowerButton username={''} follower_count={0} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/** ================ UNIT TESTS ================ */
describe('Follower Button onFollowerClicked Unit Tests', () => {
  testOnFollowerClicked('bujarsefa');
  testOnFollowerClicked('');
  testOnFollowerClicked('!');

  /** Do we make this function handle only string data types?
   * Something that we should get back to.
   */
  testOnFollowerClicked(0);
  testOnFollowerClicked(-1);
  testOnFollowerClicked(undefined);
  testOnFollowerClicked(true);
  testOnFollowerClicked(false);
  testOnFollowerClicked([]);
  testOnFollowerClicked({});
});

describe('Follower Button Proper Props Passed Unit Tests', () => {
  /**Again, do we allow strings in for follower count??? */
  testProperPropsPassed('bujarsefa', 0);
  testProperPropsPassed('', ''); //Should not Pass on follower_count due to required type. However required type only gives warning. So it will work.
  testProperPropsPassed(undefined, undefined); //Should not Pass due to required type. However required type only gives warning. So it will work.
  testProperPropsPassed(0, ''); //Should not Pass due to required type. However required type only gives warning. So it will work.
});

describe('Follower Button Chip Inner Text Unit Tests', () => {
  testChipInnerText('bujarsefa', 0);
  testChipInnerText('', ''); //Should not Pass on follower_count due to required type. However required type only gives warning. So it will work.
  testChipInnerText(undefined, undefined); //Should not Pass on follower_count due to required type. However required type only gives warning. So it will work.
  testChipInnerText(0, ''); //Should not Pass on due to required type. However required type only gives warning. So it will work.
  testChipInnerText('bujarsefa', 100);

  /** THIS SHOULD FAIL IN THE FUTURE! Right now just checking that the same value appears. */
  testChipInnerText('bujarsefa', -100); //Should not Pass on follower_count due to required type. However required type only gives warning. So it will work.
  //Still passes with strings as it returns NaN. But again, once we enforce type, we don't have to manually check each type (which we are avoiding doing right now.)
  //testChipInnerText('bujarsefa', 'bujarsefa');
});

describe('FollowerButton valid username proptype Unit Tests', () => {
  it('Throws failed propType erorr for not providing username', () => {
    let result = checkPropTypes(
      FollowerButton.propTypes,
      {follower_count: 1},
      'prop',
      FollowerButton,
    );
    assert(
      result.includes(
        'Failed prop type: The prop `username` is marked as required',
      ),
    );
  });

  it('Throws Failed propType Error for providing username value of undefined and not required value', () => {
    let result = checkPropTypes(
      FollowerButton.propTypes,
      {username: undefined},
      'prop',
      FollowerButton,
    );
    assert(
      result.includes(
        'Failed prop type: The prop `username` is marked as required in `function FollowerButton',
      ) && result.includes('but its value is `undefined`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of true and not string', () => {
    let result = checkPropTypes(
      FollowerButton.propTypes,
      {username: true},
      'prop',
      FollowerButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `boolean` supplied to `function FollowerButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of false and not string', () => {
    let result = checkPropTypes(
      FollowerButton.propTypes,
      {username: false},
      'prop',
      FollowerButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `boolean` supplied to `function FollowerButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of integer number and not string', () => {
    let result = checkPropTypes(
      FollowerButton.propTypes,
      {username: 12},
      'prop',
      FollowerButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `number` supplied to `function FollowerButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of double number and not string', () => {
    let result = checkPropTypes(
      FollowerButton.propTypes,
      {username: 12.1},
      'prop',
      FollowerButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `number` supplied to `function FollowerButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of array and not string', () => {
    let result = checkPropTypes(
      FollowerButton.propTypes,
      {username: []},
      'prop',
      FollowerButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `array` supplied to `function FollowerButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of object and not string', () => {
    let result = checkPropTypes(
      FollowerButton.propTypes,
      {username: {}},
      'prop',
      FollowerButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `object` supplied to `function FollowerButton',
      ) && result.includes('expected `string`.'),
    );
  });
});
