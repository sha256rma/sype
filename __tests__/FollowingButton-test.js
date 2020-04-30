import 'react-native';
import React from 'react';
import FollowingButton from '@screens/app/Components/FollowingButton/FollowingButton';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {Chip} from 'react-native-paper';
import {numberFormat} from '../src/common/numberFormatter';
import checkPropTypes from 'check-prop-types';
var assert = require('assert'); /** NODE.js assert function */

/** ================ HELPER FUNCTIONS ================ */

/** This is currently testing the dummy placeholder code. However,
 * it will need to be resturcutred to open up a new page that passes through an array of Followings.
 */
function testOnFollowingClicked(username) {
  it('onFollowingClicked username is returned', () => {
    const wrapper = shallow(<FollowingButton username={username} />);
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
      'This is the following list of ' + username,
    );
  });
}

/** Check that the property values passed into the prop, appear on the prop. Checks each one individually, and forces true for the other. */
function testProperPropsPassed(username, following_count) {
  it('Username value is the FollowingButton prop value', () => {
    const wrapper = shallow(
      <FollowingButton username={username} following_count={0} />,
    );
    const instance = wrapper.instance();
    const usernameProp = instance.props.username;
    expect(username).toEqual(usernameProp);
  });

  it('Following Count value is the FollowingButton prop value', () => {
    const wrapper = shallow(
      <FollowingButton username={''} following_count={following_count} />,
    );
    const instance = wrapper.instance();
    const FollowingCountProp = instance.props.following_count;
    expect(following_count).toEqual(FollowingCountProp);
  });
}

/** Pass in all props for when we require them */
function testChipInnerText(username, following_count) {
  it('Following Chip should Display Followings ' + following_count, () => {
    const wrapper = shallow(
      <FollowingButton username={username} following_count={following_count} />,
    );
    const chipWrapper = wrapper.find(Chip);
    const chipText = chipWrapper.text();
    /**Check if following_count is undefined -> expect 0 */
    const expectedFollowingCount =
      Number.isInteger(following_count) && following_count >= 0
        ? following_count
        : 0;

    /**Formatting seems to work with ''  */
    expect(chipText).toEqual(
      'Following ' + numberFormat(expectedFollowingCount),
    );
  });
}

/** ================ SNAPSHOT TEST ================ */
test('Following Button Snapshot Test', () => {
  const tree = renderer
    .create(<FollowingButton username={''} following_count={0} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/** ================ UNIT TESTS ================ */
describe('Following Button onFollowingClicked Unit Tests', () => {
  testOnFollowingClicked('bujarsefa');
  testOnFollowingClicked('');
  testOnFollowingClicked('!');

  /** Do we make this function handle only string data types?
   * Something that we should get back to.
   */
  testOnFollowingClicked(0);
  testOnFollowingClicked(-1);
  testOnFollowingClicked(undefined);
  testOnFollowingClicked(true);
  testOnFollowingClicked(false);
  testOnFollowingClicked([]);
  testOnFollowingClicked({});
});

describe('Following Button Proper Props Passed Unit Tests', () => {
  /**Again, do we allow strings in for Following count??? */
  testProperPropsPassed('bujarsefa', 0);
  testProperPropsPassed('', ''); //Should not Pass on following_count due to required type. However required type only gives warning. So it will work.
  testProperPropsPassed(undefined, undefined); //Should not Pass due to required type. However required type only gives warning. So it will work.
  testProperPropsPassed(0, ''); //Should not Pass due to required type. However required type only gives warning. So it will work.
});

describe('Following Button Chip Inner Text Unit Tests', () => {
  testChipInnerText('bujarsefa', 0);
  testChipInnerText('', ''); //Should not Pass on following_count due to required type. However required type only gives warning. So it will work.
  testChipInnerText(undefined, undefined); //Should not Pass on following_count due to required type. However required type only gives warning. So it will work.
  testChipInnerText(0, ''); //Should not Pass on due to required type. However required type only gives warning. So it will work.
  testChipInnerText('bujarsefa', 100);

  /** THIS SHOULD FAIL IN THE FUTURE! Right now just checking that the same value appears. */
  testChipInnerText('bujarsefa', -100); //Should not Pass on following_count due to required type. However required type only gives warning. So it will work.
  //Still passes with strings as it returns NaN. But again, once we enforce type, we don't have to manually check each type (which we are avoiding doing right now.)
  //testChipInnerText('bujarsefa', 'bujarsefa');
});

describe('FollowingButton valid username proptype Unit Tests', () => {
  it('Throws failed propType erorr for not providing username', () => {
    let result = checkPropTypes(
      FollowingButton.propTypes,
      {following_count: 1},
      'prop',
      FollowingButton,
    );
    assert(
      result.includes(
        'Failed prop type: The prop `username` is marked as required',
      ),
    );
  });

  it('Throws Failed propType Error for providing username value of undefined and not required value', () => {
    let result = checkPropTypes(
      FollowingButton.propTypes,
      {username: undefined},
      'prop',
      FollowingButton,
    );
    assert(
      result.includes(
        'Failed prop type: The prop `username` is marked as required in `function FollowingButton',
      ) && result.includes('but its value is `undefined`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of true and not string', () => {
    let result = checkPropTypes(
      FollowingButton.propTypes,
      {username: true},
      'prop',
      FollowingButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `boolean` supplied to `function FollowingButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of false and not string', () => {
    let result = checkPropTypes(
      FollowingButton.propTypes,
      {username: false},
      'prop',
      FollowingButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `boolean` supplied to `function FollowingButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of integer number and not string', () => {
    let result = checkPropTypes(
      FollowingButton.propTypes,
      {username: 12},
      'prop',
      FollowingButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `number` supplied to `function FollowingButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of double number and not string', () => {
    let result = checkPropTypes(
      FollowingButton.propTypes,
      {username: 12.1},
      'prop',
      FollowingButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `number` supplied to `function FollowingButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of array and not string', () => {
    let result = checkPropTypes(
      FollowingButton.propTypes,
      {username: []},
      'prop',
      FollowingButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `array` supplied to `function FollowingButton',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of object and not string', () => {
    let result = checkPropTypes(
      FollowingButton.propTypes,
      {username: {}},
      'prop',
      FollowingButton,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `object` supplied to `function FollowingButton',
      ) && result.includes('expected `string`.'),
    );
  });
});
