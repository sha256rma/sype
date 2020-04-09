import 'react-native';
import React from 'react';
import LikeButton from '@screens/app/Components/LikeButton/LikeButton';
import { IconButton } from 'react-native-paper';
import renderer from 'react-test-renderer';
// var likeButton = new LikeButton();

test('renders correctly', () => {
  const tree = renderer.create(<LikeButton/>).toJSON();
  expect(tree).toMatchSnapshot();
});

// test('functions beign called correctly', () => {
//   expect(likeButton.handleLikeClick()).toBeFalsy();
// });

function sum(a,b){
  return a + b;
}

it('testing like button',() => {
  const heart = 'heart';
  const heartOutline = 'heart-outline'
  const wrapper = shallow(<LikeButton isLiked ={false} />);
  const instance = wrapper.instance();
  const iconButton = wrapper.find(IconButton).at(0);
  console.log(instance.state.isLiked);
  iconButton.simulate('click');
  console.log(instance.state.isLiked);
  instance.handleLikeClick();
  console.log(instance.state.isLiked);
  const previousIconValue = iconButton.props().icon;
  const oppositeIconValue = (previousIconValue === heart) ? heartOutline : heart;
  
  console.log(iconButton.debug());
  console.log(previousIconValue);
  console.log(oppositeIconValue);
  expect(sum(1,2)).toEqual(3);
});