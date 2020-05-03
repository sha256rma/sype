import 'react-native';
import React from 'react';
import Post from '@screens/app/Components/Post/Post';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {IconButton} from 'react-native-paper';
import checkPropTypes from 'check-prop-types';
import LikeButton from '../src/screens/app/Components/LikeButton/LikeButton';

var assert = require('assert');

test('like button snapshot test', () => {
  const treeTrue = renderer.create(<Post isLiked={true} isBookmarked={true} caption={"What times we live in now" } username={"emanasia"} commentsLength={0} likes={0}/>).toJSON();
  expect(treeTrue).toMatchSnapshot();
  const treeFalse = renderer.create(<Post isLiked={false} isBookmarked={false} caption={"What times we live in now" } username={"emanasia"} commentsLength={0} likes={0}/>).toJSON();
  expect(treeFalse).toMatchSnapshot();
  const treeTrueAndFalse = renderer.create(<Post isLiked={true} isBookmarked={false} caption={"What times we live in now" } username={"emanasia"} commentsLength={0} likes={0}/>).toJSON();
  expect(treeTrueAndFalse).toMatchSnapshot();
  const treeFalseAndTrue = renderer.create(<Post isLiked={false} isBookmarked={true} caption={"What times we live in now" } username={"emanasia"} commentsLength={0} likes={0}/>).toJSON();
  expect(treeFalseAndTrue).toMatchSnapshot();
  //didnt test likes > 0 because we don't have a different behavior for that like we do with comments
  const treeWithImgCommentsLengthZeroAndLikesZero = renderer.create(<Post img="https://images.app.goo.gl/HPsoQwfF6dpaqUqG8" isLiked={false} isBookmarked={true} caption={"What times we live in now" } username={"emanasia"} commentsLength={0} likes={0}/>).toJSON();
  expect(treeWithImgCommentsLengthZeroAndLikesZero).toMatchSnapshot();
  const treeWithoutImgCommentsLengthZeroAndLikesZero = renderer.create(<Post isLiked={false} isBookmarked={true} caption={"What times we live in now" } username={"emanasia"} commentsLength={0} likes={0}/>).toJSON();
  expect(treeWithoutImgCommentsLengthZeroAndLikesZero).toMatchSnapshot();
  const treeWithCommentLengthOneAndImgAndLikesZero = renderer.create(<Post img="https://images.app.goo.gl/HPsoQwfF6dpaqUqG8" isLiked={false} isBookmarked={true} caption={"What times we live in now" } username={"emanasia"} commentsLength={1} likes={0}/>).toJSON();
  expect(treeWithCommentLengthOneAndImgAndLikesZero).toMatchSnapshot();
  const treeWithCommentLengthOneAndNoImgAndLikesZero = renderer.create(<Post isLiked={false} isBookmarked={true} caption={"What times we live in now" } username={"emanasia"} commentsLength={1} likes={0}/>).toJSON();
  expect(treeWithCommentLengthOneAndNoImgAndLikesZero).toMatchSnapshot();
  const treeWithCommentLengthTwoAndImgAndLikesZero = renderer.create(<Post img="https://images.app.goo.gl/HPsoQwfF6dpaqUqG8" isLiked={false} isBookmarked={true} caption={"What times we live in now" } username={"emanasia"} commentsLength={2} likes={0}/>).toJSON();
  expect(treeWithCommentLengthTwoAndImgAndLikesZero).toMatchSnapshot();
  const treeWithCommentLengthTwoAndNoImgAndLikesZero = renderer.create(<Post isLiked={false} isBookmarked={true} caption={"What times we live in now" } username={"emanasia"} commentsLength={2} likes={0}/>).toJSON();
  expect(treeWithCommentLengthTwoAndNoImgAndLikesZero).toMatchSnapshot();
});

function testPropTypesWithoutErrors(isLiked, isBookmarked, username, caption, commentsLength, likes) {
  const heart = 'heart';
  const heartOutline = 'heart-outline';
  const colorRed = 'red';
  const colorGrey = 'grey';
  it(
    'testing Post values (No errors) where isLiked is ' + isLiked + " isBookmarked is " + isBookmarked + " username is " + username + " caption is " + caption + " commentsLength is " + commentsLength + "likes is " + likes,
    () => {
    const wrapper = shallow(<Post isLiked={isLiked} username={username} caption={caption} isBookmarked={isBookmarked} commentsLength={commentsLength} likes={likes} />);
    const instance = wrapper.instance();
    const commentsLengthProp = instance.props.commentsLength;
    expect(commentsLength).toEqual(commentsLengthProp);
    const likePropValue = instance.props.isLiked;
    expect(isLiked).toEqual(likePropValue);
    const BookmarkPropValue = instance.props.isBookmarked;
    expect(isBookmarked).toEqual(BookmarkPropValue);
    const usernamePropValue = instance.props.username;
    expect(username).toEqual(usernamePropValue);
    const captionPropValue = instance.props.caption;
    expect(caption).toEqual(captionPropValue);
    const likesPropValue = instance.props.likes;
    expect(likes).toEqual(likesPropValue);
  },
  );
}

function testPropTypesWithErrors(isLiked,isBookmarked, username, caption, commentsLength, likes,  errorMsg, testDescription) {
  it('Throws failed propType Error for ' + testDescription, () => {
    let result = checkPropTypes(
        Post.propTypes,
      {isLiked: isLiked, isBookmarked:isBookmarked, caption: caption, username: username, commentsLength: commentsLength, likes: likes},
      'prop',
      Post.isLiked,
    );
    console.log("result is ", result);
    assert(result === errorMsg);
  });
}

describe('testing Post prop values', () => {
  testPropTypesWithoutErrors(true, true, "What times we live in now", "emanasia", 0, 0) ;
  testPropTypesWithoutErrors(true, true, "What times we live in now", "emanasia", 1, 0) ;
  testPropTypesWithoutErrors(true, true, "What times we live in now", "emanasia", 2, 1) ;
  testPropTypesWithoutErrors(true, true, "What times we live in now", "emanasia", 1, 1) ;
  testPropTypesWithoutErrors(false, false, "What times we live in now", "emanasia", 0, 0) ;
  testPropTypesWithoutErrors(false, false, "What times we live in now", "emanasia", 1, 0) ;
  testPropTypesWithoutErrors(false, false, "What times we live in now", "emanasia", 2, 1) ;
  testPropTypesWithoutErrors(false, false, "What times we live in now", "emanasia", 1, 1) ;
  testPropTypesWithoutErrors(true, false, "What times we live in now", "emanasia", 0, 0) ;
  testPropTypesWithoutErrors(true, false, "What times we live in now", "emanasia", 1, 0) ;
  testPropTypesWithoutErrors(true, false, "What times we live in now", "emanasia", 2, 1) ;
  testPropTypesWithoutErrors(true, false, "What times we live in now", "emanasia", 1, 1) ;
  testPropTypesWithoutErrors(false, true, "What times we live in now", "emanasia", 0, 0) ;
  testPropTypesWithoutErrors(false, true, "What times we live in now", "emanasia", 1, 0) ;
  testPropTypesWithoutErrors(false, true, "What times we live in now", "emanasia", 2, 1) ;
  testPropTypesWithoutErrors(false, true, "What times we live in now", "emanasia", 1, 1) ;
  testPropTypesWithErrors(
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    'Failed prop type: The prop `username` is marked as required in `<<anonymous>>`, but its value is `undefined`.',
    'undefined value given to all props',
  );
  testPropTypesWithErrors(
    undefined,
    true,
    'emanasia',
    'What times we live in now',
    0,
    0,
    'Failed prop type: The prop `isLiked` is marked as required in `<<anonymous>>`, but its value is `undefined`.',
    'undefined value given to isLiked',
  );
  testPropTypesWithErrors(
    true,
    undefined,
    'emanasia',
    'What times we live in now',
    0,
    0,
    'Failed prop type: The prop `isBookmarked` is marked as required in `<<anonymous>>`, but its value is `undefined`.',
    'undefined value given to isBookmarked',
  );
  testPropTypesWithErrors(
    true,
    true,
    undefined,
    'What times we live in now',
    0,
    0,
    'Failed prop type: The prop `username` is marked as required in `<<anonymous>>`, but its value is `undefined`.',
    'undefined value given to username',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    undefined,
    0,
    0,
    'Failed prop type: The prop `caption` is marked as required in `<<anonymous>>`, but its value is `undefined`.',
    'undefined value given to caption',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    undefined,
    0,
    'Failed prop type: commentsLength in undefined must be an integer',
    'undefined value given to commentsLength',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    0,
    undefined,
    'Failed prop type: likes in undefined must be an integer',
    'undefined value given to likes',
  );
  testPropTypesWithErrors(
    null,
    null,
    null,
    null,
    null,
    null,
    'Failed prop type: The prop `username` is marked as required in `<<anonymous>>`, but its value is `null`.',
    'null value given to all props',
  );
  testPropTypesWithErrors(
    null,
    true,
    'emanasia',
    'What times we live in now',
    0,
    0,
    'Failed prop type: The prop `isLiked` is marked as required in `<<anonymous>>`, but its value is `null`.',
    'null value given to isLiked',
  );
  testPropTypesWithErrors(
    true,
    null,
    'emanasia',
    'What times we live in now',
    0,
    0,
    'Failed prop type: The prop `isBookmarked` is marked as required in `<<anonymous>>`, but its value is `null`.',
    'null value given to isBookmarked',
  );
  testPropTypesWithErrors(
    true,
    true,
    null,
    'What times we live in now',
    0,
    0,
    'Failed prop type: The prop `username` is marked as required in `<<anonymous>>`, but its value is `null`.',
    'null value given to username',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    null,
    0,
    0,
    'Failed prop type: The prop `caption` is marked as required in `<<anonymous>>`, but its value is `null`.',
    'null value given to caption',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    null,
    0,
    'Failed prop type: commentsLength in undefined must be an integer',
    'null value given to commentsLength',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    0,
    null,
    'Failed prop type: likes in undefined must be an integer',
    'null value given to likes',
  );
  testPropTypesWithErrors(
    '',
    true,
    'emanasia',
    'What times we live in now',
    0,
    0,
    'Failed prop type: Invalid prop `isLiked` of type `string` supplied to `<<anonymous>>`, expected `boolean`.',
    'empty string value given to isLiked',
  );
  testPropTypesWithErrors(
    'test',
    true,
    'emanasia',
    'What times we live in now',
    0,
    0,
    'Failed prop type: Invalid prop `isLiked` of type `string` supplied to `<<anonymous>>`, expected `boolean`.',
    'string value given to isLiked',
  );
  testPropTypesWithErrors(
    234,
    true,
    'emanasia',
    'What times we live in now',
    0,
    0,
    'Failed prop type: Invalid prop `isLiked` of type `number` supplied to `<<anonymous>>`, expected `boolean`.',
    'integer value given to isLiked',
  );
  testPropTypesWithErrors(
    234.5,
    true,
    'emanasia',
    'What times we live in now',
    0,
    0,
    'Failed prop type: Invalid prop `isLiked` of type `number` supplied to `<<anonymous>>`, expected `boolean`.',
    'decimal value given to isLiked',
  );
  testPropTypesWithErrors(
    true,
    '',
    'emanasia',
    'What times we live in now',
    0,
    0,
    'Failed prop type: Invalid prop `isBookmarked` of type `string` supplied to `<<anonymous>>`, expected `boolean`.',
    'empty string value given to isBookmarked',
  );
  testPropTypesWithErrors(
    true,
    'test',
    'emanasia',
    'What times we live in now',
    0,
    0,
    'Failed prop type: Invalid prop `isBookmarked` of type `string` supplied to `<<anonymous>>`, expected `boolean`.',
    'string value given to isBookmarked',
  );
  testPropTypesWithErrors(
    true,
    234,
    'emanasia',
    'What times we live in now',
    0,
    0,
    'Failed prop type: Invalid prop `isBookmarked` of type `number` supplied to `<<anonymous>>`, expected `boolean`.',
    'integer value given to isBookmarked',
  );
  testPropTypesWithErrors(
    true,
    234.5,
    'emanasia',
    'What times we live in now',
    0,
    0,
    'Failed prop type: Invalid prop `isBookmarked` of type `number` supplied to `<<anonymous>>`, expected `boolean`.',
    'decimal value given to isBookmarked',
  );
  testPropTypesWithErrors(
    true,
    true,
    true,
    'What times we live in now',
    0,
    0,
    'Failed prop type: Invalid prop `username` of type `boolean` supplied to `<<anonymous>>`, expected `string`.',
    'true value given to username',
  );
  testPropTypesWithErrors(
    true,
    true,
    false,
    'What times we live in now',
    0,
    0,
    'Failed prop type: Invalid prop `username` of type `boolean` supplied to `<<anonymous>>`, expected `string`.',
    'false value given to username',
  );
  testPropTypesWithErrors(
    true,
    true,
    234,
    'What times we live in now',
    0,
    0,
    'Failed prop type: Invalid prop `username` of type `number` supplied to `<<anonymous>>`, expected `string`.',
    'integer value given to username',
  );
  testPropTypesWithErrors(
    true,
    true,
    234.5,
    'What times we live in now',
    0,
    0,
    'Failed prop type: Invalid prop `username` of type `number` supplied to `<<anonymous>>`, expected `string`.',
    'decimal value given to username',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    true,
    0,
    0,
    'Failed prop type: Invalid prop `caption` of type `boolean` supplied to `<<anonymous>>`, expected `string`.',
    'true value given to caption',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    false,
    0,
    0,
    'Failed prop type: Invalid prop `caption` of type `boolean` supplied to `<<anonymous>>`, expected `string`.',
    'false value given to caption',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    234,
    0,
    0,
    'Failed prop type: Invalid prop `caption` of type `number` supplied to `<<anonymous>>`, expected `string`.',
    'integer value given to caption',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    234.5,
    0,
    0,
    'Failed prop type: Invalid prop `caption` of type `number` supplied to `<<anonymous>>`, expected `string`.',
    'decimal value given to caption',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    '',
    0,
    'Failed prop type: commentsLength in undefined must be an integer',
    'empty string value given to commentsLength',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    'test',
    0,
    'Failed prop type: commentsLength in undefined must be an integer',
    'string value given to commentsLength',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    true,
    0,
    'Failed prop type: commentsLength in undefined must be an integer',
    'true value given to commentsLength',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    false,
    0,
    'Failed prop type: commentsLength in undefined must be an integer',
    'false value given to commentsLength',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    234.5,
    0,
    'Failed prop type: commentsLength in undefined must be an integer',
    'decimal value given to commentsLength',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    -234.5,
    0,
    'Failed prop type: commentsLength in undefined must be an integer',
    'negative decimal value given to commentsLength',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    -235,
    0,
    'Failed prop type: commentsLength in undefined must be a non-negative number',
    'negative integer value given to commentsLength',
  );


  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    0,
    '',
    'Failed prop type: likes in undefined must be an integer',
    'empty string value given to likes',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    0,
    'test',
    'Failed prop type: likes in undefined must be an integer',
    'string value given to likes',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    0,
    true,
    'Failed prop type: likes in undefined must be an integer',
    'true value given to likes',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    0,
    false,
    'Failed prop type: likes in undefined must be an integer',
    'false value given to commentsLength',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    0,
    234.5,
    'Failed prop type: likes in undefined must be an integer',
    'decimal value given to likes',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    0,
    -234.5,
    'Failed prop type: likes in undefined must be an integer',
    'negative decimal value given to likes',
  );
  testPropTypesWithErrors(
    true,
    true,
    'emanasia',
    'What times we live in now',
    0,
    -235,
    'Failed prop type: likes in undefined must be a non-negative number',
    'negative integer value given to likes',
  );


});
