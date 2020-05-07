import 'react-native';
import React from 'react';
import RequestFollowButton from '@screens/app/Components/RequestFollowButton/RequestFollowButton';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {Button} from 'react-native-paper';
import checkPropTypes from 'check-prop-types';
var assert = require('assert');

/** ======= Snapshot Tests ========= */
test('Request Follow Button snapshot test', () => {
  const treeTrue = renderer.create(<RequestFollowButton isFollowing={true} />)
    .toJSON;
  expect(treeTrue).toMatchSnapshot();

  const treeFalse = renderer.create(<RequestFollowButton isFollowing={false} />)
    .toJSON;
  expect(treeFalse).toMatchSnapshot();
});

/** ====== Helper Functions ========  */
function testHandleFollowClick(initialFollowStatus) {
  const followStatus = initialFollowStatus ? true : false;
  it('testing handleFollowClick function - initially ' + followStatus, () => {
    const wrapper = shallow(
      <RequestFollowButton isFollowing={initialFollowStatus} />,
    );
    const instance = wrapper.instance();
    const previousFollowValue = instance.state.isFollowing;

    const buttonWrapper = wrapper.find(Button);

    /** NOTE, this might be a bad way to find the Components. Here I'm using the
     * color prop becasue follow versus unfollow are different. However, this
     * also can be the case with other buttons.
     * Rememebr color = text color! Not background color.
     */
    const originalColor = initialFollowStatus ? 'black' : 'white';
    const colorButtonWrapper = buttonWrapper.find({
      color: originalColor,
    });
    const colorButtonProps = colorButtonWrapper.first().props();
    colorButtonProps.onPress(); /** Click the onPress function which changes the state. */
    const currentFollowValue = instance.state.isFollowing;
    expect(currentFollowValue).toEqual(!previousFollowValue);
  });
}

describe('testing handeLikeClick cases', () => {
  testHandleFollowClick(true);
  testHandleFollowClick(false);
});

function testPropTypesWithoutErrors(isFollowing) {
  const colorFollow = 'white';
  const colorUnFollow = 'black';

  it(
    'testing request follow button values (No errors) where isFollowing is ' +
      isFollowing,
    () => {
      const wrapper = shallow(
        <RequestFollowButton isFollowing={isFollowing} />,
      );
      const buttonWrapper = wrapper.find(Button);
      const colorButtonFollow = wrapper.find({color: colorFollow});
      const colorButtonUnFollow = wrapper.find({color: colorUnFollow});

      /** If e are following, we should see unfollow button. */
      if (isFollowing === true) {
        expect(colorButtonFollow).toHaveLength(0);
        expect(colorButtonUnFollow).toHaveLength(1);
      } else if (isFollowing === false) {
        expect(colorButtonFollow).toHaveLength(1);
        expect(colorButtonUnFollow).toHaveLength(0);
      }
    },
  );
}

function testPropTypesWithErrors(isFollowing, errorMsg, testDescription) {
  it('Throws failed propType Error for ' + testDescription, () => {
    let result = checkPropTypes(
      RequestFollowButton.propTypes,
      {isFollowing: isFollowing},
      'prop',
      RequestFollowButton.isFollowing,
    );
    console.log(errorMsg);
    console.log(result);
    assert(result === errorMsg);
  });
}

/** Still need to create more tests for this, like checking prop values (not just state)
 * Checking how button changes (ie length) when onClicked is called ( just incase that somehow doesnt work linearly with state change...)
 *  Also need to update ProfileBanner, Profile (ie any pages that are connected to this.)
 */

describe('testing icon button heart values', () => {
  testPropTypesWithoutErrors(true);
  testPropTypesWithoutErrors(false);
  testPropTypesWithErrors(
    undefined,
    'Failed prop type: The prop `isFollowing` is marked as required in `<<anonymous>>`, but its value is `undefined`.',
    'undefined value given to isFollowing',
  );
  testPropTypesWithErrors(
    null,
    'Failed prop type: The prop `isFollowing` is marked as required in `<<anonymous>>`, but its value is `null`.',
    'null value given to isFollowing',
  );
  testPropTypesWithErrors(
    '',
    'Failed prop type: Invalid prop `isFollowing` of type `string` supplied to `<<anonymous>>`, expected `boolean`.',
    'empty string value given to isFollowing',
  );
  testPropTypesWithErrors(
    'test',
    'Failed prop type: Invalid prop `isFollowing` of type `string` supplied to `<<anonymous>>`, expected `boolean`.',
    'string value with length > 0, given to isFollowing',
  );
  testPropTypesWithErrors(
    234,
    'Failed prop type: Invalid prop `isFollowing` of type `number` supplied to `<<anonymous>>`, expected `boolean`.',
    'number given to isFollowing',
  );
  testPropTypesWithErrors(
    234.5,
    'Failed prop type: Invalid prop `isFollowing` of type `number` supplied to `<<anonymous>>`, expected `boolean`.',
    'number given to isFollowing',
  );
});
