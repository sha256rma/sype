import 'react-native';
import React from 'react';
import ProfileUsername from '@screens/app/Components/ProfileUsername/ProfileUsername';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import checkPropTypes from 'check-prop-types';
var assert = require('assert'); /** NODE.js assert function */

/** ================ HELPER FUNCTIONS ================ */

function testAllProperPropsPassed(username) {
  it('Username value is the ProfileUsername prop value', () => {
    const wrapper = shallow(<ProfileUsername username={username} />);
    const instance = wrapper.instance();
    const usernameProp = instance.props.username;
    expect(username).toEqual(usernameProp);
  });
}

/** ================ SNAPSHOT TEST ================ */

test('Profile Username Snapshot Test', () => {
  const tree = renderer.create(<ProfileUsername username={''} />).toJSON();
  expect(tree).toMatchSnapshot();
});

/** ================ UNIT TESTS ================ */
/**  -- To do, localize + refactor code. */

describe('Profile Username Unit Testing', () => {
  const stringUsernameTest = 'bsefa';
  testAllProperPropsPassed(stringUsernameTest);

  it('Throws failed propType erorr for not providing any props', () => {
    let result = checkPropTypes(
      ProfileUsername.propTypes,
      {},
      'prop',
      ProfileUsername,
    );
    console.log(result);
    assert(
      result.includes(
        'Failed prop type: The prop `username` is marked as required',
      ),
    );
  });

  it('Throws failed propType erorr for not providing username', () => {
    let result = checkPropTypes(
      ProfileUsername.propTypes,
      {},
      'prop',
      ProfileUsername,
    );
    console.log(result);
    assert(
      result.includes(
        'Failed prop type: The prop `username` is marked as required',
      ),
    );
  });

  it('Throws Failed propType Error for providing username value of undefined and not required value', () => {
    let result = checkPropTypes(
      ProfileUsername.propTypes,
      {username: undefined},
      'prop',
      ProfileUsername,
    );
    console.log(result);
    assert(
      result.includes(
        'Failed prop type: The prop `username` is marked as required in `function ProfileUsername',
      ) && result.includes('but its value is `undefined`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of true and not string', () => {
    let result = checkPropTypes(
      ProfileUsername.propTypes,
      {username: true},
      'prop',
      ProfileUsername,
    );
    console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `boolean` supplied to `function ProfileUsername',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of false and not string', () => {
    let result = checkPropTypes(
      ProfileUsername.propTypes,
      {username: false},
      'prop',
      ProfileUsername,
    );
    console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `boolean` supplied to `function ProfileUsername',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of integer number and not string', () => {
    let result = checkPropTypes(
      ProfileUsername.propTypes,
      {username: 12},
      'prop',
      ProfileUsername,
    );
    console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `number` supplied to `function ProfileUsername',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of double number and not string', () => {
    let result = checkPropTypes(
      ProfileUsername.propTypes,
      {username: 12.1},
      'prop',
      ProfileUsername,
    );
    console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `number` supplied to `function ProfileUsername',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of array and not string', () => {
    let result = checkPropTypes(
      ProfileUsername.propTypes,
      {username: []},
      'prop',
      ProfileUsername,
    );
    console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `array` supplied to `function ProfileUsername',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of object and not string', () => {
    let result = checkPropTypes(
      ProfileUsername.propTypes,
      {username: {}},
      'prop',
      ProfileUsername,
    );
    console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `object` supplied to `function ProfileUsername',
      ) && result.includes('expected `string`.'),
    );
  });
});
