import 'react-native';
import React from 'react';
import LikeButton from '@screens/app/Components/LikeButton/LikeButton';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {IconButton} from 'react-native-paper';
import checkPropTypes from 'check-prop-types';

var assert = require('assert');



test('like button snapshot test', () => {
  const treeTrue = renderer.create(<LikeButton isLiked={true} />).toJSON();
  expect(treeTrue).toMatchSnapshot();
  const treeFalse = renderer.create(<LikeButton isLiked={false} />).toJSON();
  expect(treeFalse).toMatchSnapshot();

});

function testHandleLikeClick(initialLikeStatus) {
  const likeStatus = initialLikeStatus ? 'liked' : 'unliked';
  it('testing handleLikeClick function - initially ' + likeStatus, () => {
    const wrapper = shallow(<LikeButton isLiked={initialLikeStatus} />);
    const instance = wrapper.instance();
    const previousLikedValue = instance.state.isLiked;
    instance.handleLikeClick();
    const currentLikedValue = instance.state.isLiked;
    expect(currentLikedValue).toEqual(!previousLikedValue);
  });
}

describe('testing handeLikeClick cases', () => {
  testHandleLikeClick(true);
  testHandleLikeClick(false);
});
function testPropTypesWithoutErrors(isLiked) {
  const heart = 'heart';
  const heartOutline = 'heart-outline';
  const colorRed = 'red';
  const colorGrey = 'grey';
  it(
    'testing icon button heart values (No errors) where isLiked is ' +
      isLiked,
    () => {
      const wrapper = shallow(<LikeButton isLiked={isLiked} />);
      const iconButton = wrapper.find(IconButton).at(0);
      const iconHeartValue = iconButton.props().icon;
      const iconColorValue = iconButton.props().color;
      if(isLiked === true){
        expect(iconHeartValue).toEqual(heart);
        expect(iconColorValue).toEqual(colorRed);
      }
      else if(isLiked === false){
        expect(iconHeartValue).toEqual(heartOutline);
        expect(iconColorValue).toEqual(colorGrey);
      }
     
    });
}

function testPropTypesWithErrors(isLiked, errorMsg, testDescription) {
  it('Throws failed propType Error for ' + testDescription, () => {
    let result = checkPropTypes(
      LikeButton.propTypes,
      {isLiked: isLiked},
      'prop',
      LikeButton.isLiked,
    );
    assert(result === errorMsg);
  });
}

describe('testing icon button heart values', () => {
    testPropTypesWithoutErrors(true);
    testPropTypesWithoutErrors(false);
    testPropTypesWithErrors(undefined, 'Failed prop type: The prop `isLiked` is marked as required in `<<anonymous>>`, but its value is `undefined`.', 'undefined value given to isLiked');
    testPropTypesWithErrors(null, 'Failed prop type: The prop `isLiked` is marked as required in `<<anonymous>>`, but its value is `null`.', 'null value given to isLiked');
    testPropTypesWithErrors('', 'Failed prop type: Invalid prop `isLiked` of type `string` supplied to `<<anonymous>>`, expected `boolean`.', 'empty string value given to isLiked');
    testPropTypesWithErrors('test', 'Failed prop type: Invalid prop `isLiked` of type `string` supplied to `<<anonymous>>`, expected `boolean`.', 'string value with length > 0, given to isLiked');
    testPropTypesWithErrors(234, 'Failed prop type: Invalid prop `isLiked` of type `number` supplied to `<<anonymous>>`, expected `boolean`.', 'number given to isLiked');
    testPropTypesWithErrors(234.5, 'Failed prop type: Invalid prop `isLiked` of type `number` supplied to `<<anonymous>>`, expected `boolean`.', 'number given to isLiked');

});
