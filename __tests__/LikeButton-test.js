import 'react-native';
import React from 'react';
import LikeButton from '@screens/app/Components/LikeButton/LikeButton';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {IconButton} from 'react-native-paper';

test('like button snapshot test', () => {
  const tree = renderer.create(<LikeButton />).toJSON();
  expect(tree).toMatchSnapshot();
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
  testHandleLikeClick(undefined);
});

describe('testing icon button heart values', () => {
  const heart = 'heart';
  const heartOutline = 'heart-outline';
  const falseWrapper = shallow(<LikeButton isLiked={false} />);
  const falseIconButton = falseWrapper.find(IconButton).at(0);
  it('heart outlined when isLiked is false', () => {
    const heartValue = falseIconButton.props().icon;
    expect(heartValue).toEqual(heartOutline);
  });
  const trueWrapper = shallow(<LikeButton isLiked={true} />);
  const trueIconButton = trueWrapper.find(IconButton).at(0);
  it('heart filled when isLiked is true', () => {
    const heartValue = trueIconButton.props().icon;
    expect(heartValue).toEqual(heart);
  });
  const undefinedWrapper = shallow(<LikeButton isLiked={undefined} />);
  const underfinedIconButton = undefinedWrapper.find(IconButton).at(0);
  it('heart filled when isLiked undefined', () => {
    const heartValue = underfinedIconButton.props().icon;
    expect(heartValue).toEqual(heartOutline);
  });
});
