import 'react-native';
import React from 'react';
import LikeButton from '@screens/app/Components/LikeButton/LikeButton';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

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
