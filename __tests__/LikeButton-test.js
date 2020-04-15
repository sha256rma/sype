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
});

describe('testing icon button heart values', () => {
  const heart = 'heart';
  const heartOutline = 'heart-outline';
  const wrapper = shallow(<LikeButton isLiked={false} />);
  const iconButton = wrapper.find(IconButton).at(0);
  it('heart outlined when isLiked is false', () => {
    const heartValue = iconButton.props().icon;
    expect(heartValue).toEqual(heartOutline);
  });
  const newWrapper = shallow(<LikeButton isLiked={true} />);
  const newIconButton = newWrapper.find(IconButton).at(0);
  it('heart filled when isLiked is true', () => {
    const heartValue = newIconButton.props().icon;
    expect(heartValue).toEqual(heart);
  });
});
