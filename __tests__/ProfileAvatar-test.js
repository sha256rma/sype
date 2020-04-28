import 'react-native';
import React from 'react';
import ProfileAvatar from '@screens/app/Components/ProfileAvatar/ProfileAvatar';
import checkPropTypes from 'check-prop-types';
var assert = require('assert');
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

test('profile avarar snapshot test', () => {
  const treeWithoutProps = renderer.create(<ProfileAvatar />).toJSON();
  expect(treeWithoutProps).toMatchSnapshot();
  const treeWithUsername = renderer.create(<ProfileAvatar username="emanasia" />).toJSON();
  expect(treeWithUsername).toMatchSnapshot();
  const treeWithUsernameAndImage = renderer.create(<ProfileAvatar username="emanasia" img="https://images.app.goo.gl/HPsoQwfF6dpaqUqG8" />).toJSON();
  expect(treeWithUsernameAndImage).toMatchSnapshot();
});

function testPropTypesWithoutErrors(username) {
  it(
    'testing ProfileAvatar Creation with proper props where ' +
      'username : ' +
      username , () => {
      const wrapper = shallow(
        <ProfileAvatar username={username} />,
      );
      const instance = wrapper.instance();
      const usernameProp = instance.props.username;
      expect(username).toEqual(usernameProp);
    },
  );
}

// test numbers, arrays, strings, booleans combinations of other data types
describe('testing ProfileAvatar values, should not throw errors', () => {
  testPropTypesWithoutErrors('e805');
  testPropTypesWithoutErrors('bsefa');

});

function testPropTypesWithErrors(username, errorMsg, testDescription) {
  it('Throws failed propType Error for ' + testDescription, () => {
    let result = checkPropTypes(
      ProfileAvatar.propTypes,
      {username: username},
      'prop',
      ProfileAvatar.username,
    );
    assert(result === errorMsg);
  });
}

describe('testing ProfileAvatar values, should throw errors', () => {
  testPropTypesWithErrors(
    null,
    'Failed prop type: The prop `username` is marked as required in `<<anonymous>>`, but its value is `null`.',
    'not providing username',
  );
  testPropTypesWithErrors(
    true,
    'Failed prop type: Invalid prop `username` of type `boolean` supplied to `<<anonymous>>`, expected `string`.',
    'providing username value of true and not string',
  );
  testPropTypesWithErrors(
    false,
    'Failed prop type: Invalid prop `username` of type `boolean` supplied to `<<anonymous>>`, expected `string`.',
    'providing username value of false and not string',
  );
  testPropTypesWithErrors(
    undefined,
    'Failed prop type: The prop `username` is marked as required in `<<anonymous>>`, but its value is `undefined`.',
    'not providing username',
  );
  testPropTypesWithErrors(
    234,
    'Failed prop type: Invalid prop `username` of type `number` supplied to `<<anonymous>>`, expected `string`.',
    'providing username value of number and not string',
  );
  testPropTypesWithErrors(
    234.5,
    'Failed prop type: Invalid prop `username` of type `number` supplied to `<<anonymous>>`, expected `string`.',
    'providing username value of number and not string',
  );

});
