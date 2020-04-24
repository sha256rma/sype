import 'react-native';
import React from 'react';
import UserCaption from '@screens/app/Components/UserCaption/UserCaption';
import checkPropTypes from 'check-prop-types';
var assert = require('assert');
import {shallow} from 'enzyme';

import renderer from 'react-test-renderer';

test('user caption snapshot test', () => {
  const tree = renderer
    .create(<UserCaption username="test" caption="test" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
// test numbers, arrays, strings, booleans combinations of other data types
describe('testing UserCaption values, should not throw errors', () => {
  const stringCaptionTest = 'Hi World, Missed Me ?';
  const stringUsernameTest = 'e805';
  it('testing UserCaption Creation String', () => {
    const wrapper = shallow(
      <UserCaption username={stringUsernameTest} caption={stringCaptionTest} />,
    );
    const instance = wrapper.instance();
    const currentUsername = instance.state.username;
    const currentCaption = instance.state.caption;
    expect(currentUsername).toEqual(stringUsernameTest);
    expect(currentCaption).toEqual(stringCaptionTest);
  });
});
describe('testing UserCaption values, should throw errors', () => {
  it('Throws failed propType Error for not providing caption', () => {
    let result = checkPropTypes(
      UserCaption.propTypes,
      {username: 'bsefa'},
      'prop',
      UserCaption.username,
    );
    assert(
      result ===
        'Failed prop type: The prop `caption` is marked as required in `<<anonymous>>`, but its value is `undefined`.',
    );
  });
  it('Throws failed propType Error for not providing username', () => {
    let result = checkPropTypes(
      UserCaption.propTypes,
      {caption: 'corona is wack'},
      'prop',
      UserCaption.caption,
    );
    assert(
      result ===
        'Failed prop type: The prop `username` is marked as required in `<<anonymous>>`, but its value is `undefined`.',
    );
  });
  it('Throws failed propType Error for not providing caption', () => {
    let result = checkPropTypes(UserCaption.propTypes, {}, 'prop', UserCaption);
    assert(
      result.includes(
        'Failed prop type: The prop `caption` is marked as required',
      ),
    );
  });
  it('Throws failed propType Error for providing username value of true and not string', () => {
    let result = checkPropTypes(
      UserCaption.propTypes,
      {username: true, caption: 'corona is wack'},
      'prop',
      UserCaption.username,
    );
    assert(
      result ===
        'Failed prop type: Invalid prop `username` of type `boolean` supplied to `<<anonymous>>`, expected `string`.',
    );
  });
  it('Throws failed propType Error for providing username value of false and not string', () => {
    let result = checkPropTypes(
      UserCaption.propTypes,
      {username: false, caption: 'corona is wack'},
      'prop',
      UserCaption.username,
    );
    assert(
      result ===
        'Failed prop type: Invalid prop `username` of type `boolean` supplied to `<<anonymous>>`, expected `string`.',
    );
  });
  it('Throws failed propType Error for providing username value of undefined and not string', () => {
    let result = checkPropTypes(
      UserCaption.propTypes,
      {username: undefined, caption: 'corona is wack'},
      'prop',
      UserCaption.username,
    );
    assert(
      result ===
        'Failed prop type: The prop `username` is marked as required in `<<anonymous>>`, but its value is `undefined`.',
    );
  });
  it('Throws failed propType Error for providing username value of number and not string', () => {
    let result = checkPropTypes(
      UserCaption.propTypes,
      {username: 234, caption: 'corona is wack'},
      'prop',
      UserCaption.username,
    );
    assert(
      result ===
        'Failed prop type: Invalid prop `username` of type `number` supplied to `<<anonymous>>`, expected `string`.',
    );
  });
  it('Throws failed propType Error for providing username value of number and not string', () => {
    let result = checkPropTypes(
      UserCaption.propTypes,
      {username: 234.5, caption: 'corona is wack'},
      'prop',
      UserCaption.username,
    );
    assert(
      result ===
        'Failed prop type: Invalid prop `username` of type `number` supplied to `<<anonymous>>`, expected `string`.',
    );
  });
  it('Throws failed propType Error for providing caption value of true and not string', () => {
    let result = checkPropTypes(
      UserCaption.propTypes,
      {caption: true, username: 'emanasia'},
      'prop',
      UserCaption.username,
    );
    assert(
      result ===
        'Failed prop type: Invalid prop `caption` of type `boolean` supplied to `<<anonymous>>`, expected `string`.',
    );
  });
  it('Throws failed propType Error for providing caption value of false and not string', () => {
    let result = checkPropTypes(
      UserCaption.propTypes,
      {caption: false, username: 'emanasia'},
      'prop',
      UserCaption.username,
    );
    assert(
      result ===
        'Failed prop type: Invalid prop `caption` of type `boolean` supplied to `<<anonymous>>`, expected `string`.',
    );
  });
  it('Throws failed propType Error for providing caption value of undefined and not string', () => {
    let result = checkPropTypes(
      UserCaption.propTypes,
      {caption: undefined, username: 'emanasia'},
      'prop',
      UserCaption.username,
    );
    assert(
      result ===
        'Failed prop type: The prop `caption` is marked as required in `<<anonymous>>`, but its value is `undefined`.',
    );
  });
  it('Throws failed propType Error for providing caption value of number and not string', () => {
    let result = checkPropTypes(
      UserCaption.propTypes,
      {caption: 234, username: 'emanasia'},
      'prop',
      UserCaption.username,
    );
    assert(
      result ===
        'Failed prop type: Invalid prop `caption` of type `number` supplied to `<<anonymous>>`, expected `string`.',
    );
  });
  it('Throws failed propType Error for providing caption value of number and not string', () => {
    let result = checkPropTypes(
      UserCaption.propTypes,
      {caption: 234.5, username: 'emanasia'},
      'prop',
      UserCaption.username,
    );
    assert(
      result ===
        'Failed prop type: Invalid prop `caption` of type `number` supplied to `<<anonymous>>`, expected `string`.',
    );
  });
});

//TODO : test handleCommentClick function
