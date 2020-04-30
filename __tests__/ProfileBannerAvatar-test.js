import 'react-native';
import React from 'react';
import ProfileBannerAvatar from '@screens/app/Components/ProfileBannerAvatar/ProfileBannerAvatar';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import checkPropTypes from 'check-prop-types';
var assert = require('assert');

/** ================ HELPER FUNCTIONS ================ */

/** NOTE, we will hack props not being singled out to pass + avoid warnings. */
function testAllProperPropsPassed(username, profile_image) {
  it('Username value is the ProfileBanner Avatar prop value', () => {
    const wrapper = shallow(
      <ProfileBannerAvatar username={username} profile_image={''} />,
    );
    const instance = wrapper.instance();
    const usernameProp = instance.props.username;
    expect(username).toEqual(usernameProp);
  });

  it('Profile Image value is the ProfileBanner Avatar prop value', () => {
    const wrapper = shallow(
      <ProfileBannerAvatar username={''} profile_image={profile_image} />,
    );
    const instance = wrapper.instance();
    const profileImageProp = instance.props.profile_image;
    expect(profile_image).toEqual(profileImageProp);
  });
}

/** ================ SNAPSHOT TEST ================ */

test('Profile Banner Avatar Snapshot Test', () => {
  const tree = renderer
    .create(<ProfileBannerAvatar username={''} profile_image={''} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/** ================ UNIT TESTS ================ */

/** Unit Test --> NOTE, we must test Avatar src prop! And verify it is the same as what we pass in OR it is the default image */
describe('Profile Banner Avatar Unit Testing', () => {
  const integerProfileImageTest = 'string';
  const stringUsernameTest = 'bsefa';
  testAllProperPropsPassed(stringUsernameTest, integerProfileImageTest);

  it('Throws failed propType erorr for not providing any props', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {},
      'prop',
      ProfileBannerAvatar,
    );
    assert(
      result.includes(
        'Failed prop type: The prop `username` is marked as required',
      ),
    );
  });

  it('Throws failed propType erorr for not providing username', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {profile_image: 1},
      'prop',
      ProfileBannerAvatar,
    );
    assert(
      result.includes(
        'Failed prop type: The prop `username` is marked as required',
      ),
    );
  });

  it('Throws failed propType erorr for not providing profile_image', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: 'bujar'},
      'prop',
      ProfileBannerAvatar,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: The prop `profile_image` is marked as required in `function ProfileBannerAvatar',
      ) && result.includes('but its value is `undefined`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of undefined and not required value', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: undefined},
      'prop',
      ProfileBannerAvatar,
    );
    assert(
      result.includes(
        'Failed prop type: The prop `username` is marked as required in `function ProfileBannerAvatar',
      ) && result.includes('but its value is `undefined`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of true and not string', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: true},
      'prop',
      ProfileBannerAvatar,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `boolean` supplied to `function ProfileBannerAvatar',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of false and not string', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: false},
      'prop',
      ProfileBannerAvatar,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `boolean` supplied to `function ProfileBannerAvatar',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of integer number and not string', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: 12},
      'prop',
      ProfileBannerAvatar,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `number` supplied to `function ProfileBannerAvatar',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of double number and not string', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: 12.1},
      'prop',
      ProfileBannerAvatar,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `number` supplied to `function ProfileBannerAvatar',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of array and not string', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: []},
      'prop',
      ProfileBannerAvatar,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `array` supplied to `function ProfileBannerAvatar',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing username value of object and not string', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: {}},
      'prop',
      ProfileBannerAvatar,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `username` of type `object` supplied to `function ProfileBannerAvatar',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing profile_image value of undefined and not required value', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: '', profile_image: undefined},
      'prop',
      ProfileBannerAvatar,
    );
    assert(
      result.includes(
        'Failed prop type: The prop `profile_image` is marked as required in `function ProfileBannerAvatar',
      ) && result.includes('but its value is `undefined`.'),
    );
  });

  it('Throws Failed propType Error for providing profile_image value of true and not string', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: '', profile_image: true},
      'prop',
      ProfileBannerAvatar,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `profile_image` of type `boolean` supplied to `function ProfileBannerAvatar',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing profile_image value of false and not string', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: '', profile_image: false},
      'prop',
      ProfileBannerAvatar,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `profile_image` of type `boolean` supplied to `function ProfileBannerAvatar',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing profile_image value of integer number and not string', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: '', profile_image: 12},
      'prop',
      ProfileBannerAvatar,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `profile_image` of type `number` supplied to `function ProfileBannerAvatar',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing profile_image value of dobule number and not string', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: '', profile_image: 12.1},
      'prop',
      ProfileBannerAvatar,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `profile_image` of type `number` supplied to `function ProfileBannerAvatar',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing profile_image value of array and not string', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: '', profile_image: []},
      'prop',
      ProfileBannerAvatar,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `profile_image` of type `array` supplied to `function ProfileBannerAvatar',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Throws Failed propType Error for providing profile_image value of object and not string', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: '', profile_image: {}},
      'prop',
      ProfileBannerAvatar,
    );
    //console.log(result);
    assert(
      result.includes(
        'Failed prop type: Invalid prop `profile_image` of type `object` supplied to `function ProfileBannerAvatar',
      ) && result.includes('expected `string`.'),
    );
  });

  it('Undefined returned for username and profile_image string type', () => {
    let result = checkPropTypes(
      ProfileBannerAvatar.propTypes,
      {username: '', profile_image: ''},
      'prop',
      ProfileBannerAvatar,
    );
    console.log(result);
    //result returns undefined when the values are true, as they should be.
    assert(result === undefined);
  });
});
