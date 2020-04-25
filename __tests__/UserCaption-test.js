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
function testPropTypesWithoutErrors(username, caption) {
  it(
    'testing UserCaption Creation with proper props where ' +
      'username : ' +
      username +
      ' and ' +
      'caption : ' +
      caption,
    () => {
      const wrapper = shallow(
        <UserCaption username={username} caption={caption} />,
      );
      const instance = wrapper.instance();
      const usernameProp = instance.props.username;
      expect(username).toEqual(usernameProp);
      const captionProp = instance.props.caption;
      expect(caption).toEqual(captionProp);
    },
  );
}

// test numbers, arrays, strings, booleans combinations of other data types
describe('testing UserCaption values, should not throw errors', () => {
  testPropTypesWithoutErrors('e805', 'Hi World, Missed Me ?');
  testPropTypesWithoutErrors('e805', '');
  testPropTypesWithoutErrors('', 'Hi World, Missed Me ?');
  testPropTypesWithoutErrors('', '');
});

function testPropTypesWithErrors(username, caption, errorMsg, testDescription) {
  it('Throws failed propType Error for ' + testDescription, () => {
    let result = checkPropTypes(
      UserCaption.propTypes,
      {username: username, caption: caption},
      'prop',
      UserCaption.username,
    );
    assert(result === errorMsg);
  });
}

describe('testing UserCaption values, should throw errors', () => {
  testPropTypesWithErrors(
    null,
    'corona is wack',
    'Failed prop type: The prop `username` is marked as required in `<<anonymous>>`, but its value is `null`.',
    'not providing username',
  );
  testPropTypesWithErrors(
    true,
    'corona is wack',
    'Failed prop type: Invalid prop `username` of type `boolean` supplied to `<<anonymous>>`, expected `string`.',
    'providing username value of true and not string',
  );
  testPropTypesWithErrors(
    false,
    'corona is wack',
    'Failed prop type: Invalid prop `username` of type `boolean` supplied to `<<anonymous>>`, expected `string`.',
    'providing username value of false and not string',
  );
  testPropTypesWithErrors(
    undefined,
    'corona is wack',
    'Failed prop type: The prop `username` is marked as required in `<<anonymous>>`, but its value is `undefined`.',
    'not providing username',
  );
  testPropTypesWithErrors(
    234,
    'corona is wack',
    'Failed prop type: Invalid prop `username` of type `number` supplied to `<<anonymous>>`, expected `string`.',
    'providing username value of number and not string',
  );
  testPropTypesWithErrors(
    234.5,
    'corona is wack',
    'Failed prop type: Invalid prop `username` of type `number` supplied to `<<anonymous>>`, expected `string`.',
    'providing username value of number and not string',
  );
  testPropTypesWithErrors(
    'bsefa',
    null,
    'Failed prop type: The prop `caption` is marked as required in `<<anonymous>>`, but its value is `null`.',
    'not providing caption',
  );
  testPropTypesWithErrors(
    'emanasia',
    true,
    'Failed prop type: Invalid prop `caption` of type `boolean` supplied to `<<anonymous>>`, expected `string`.',
    'providing caption value of true and not string',
  );
  testPropTypesWithErrors(
    'emanasia',
    false,
    'Failed prop type: Invalid prop `caption` of type `boolean` supplied to `<<anonymous>>`, expected `string`.',
    'providing caption value of false and not string',
  );
  testPropTypesWithErrors(
    'emanasia',
    undefined,
    'Failed prop type: The prop `caption` is marked as required in `<<anonymous>>`, but its value is `undefined`.',
    'not providing caption',
  );
  testPropTypesWithErrors(
    'emanasia',
    234,
    'Failed prop type: Invalid prop `caption` of type `number` supplied to `<<anonymous>>`, expected `string`.',
    'providing caption value of number and not string',
  );
  testPropTypesWithErrors(
    'emanasia',
    234.5,
    'Failed prop type: Invalid prop `caption` of type `number` supplied to `<<anonymous>>`, expected `string`.',
    'providing caption value of number and not string',
  );

  // we aren't using the function for the below test as it uses 'includes' instead of '==='
  it('Throws failed propType Error for not providing either', () => {
    let result = checkPropTypes(UserCaption.propTypes, {}, 'prop', UserCaption);
    assert(
      result.includes(
        'Failed prop type: The prop `caption` is marked as required',
      ),
    );
  });
});

//TODO : test handleCommentClick function
