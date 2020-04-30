import 'react-native';
import React from 'react';
import CommentsTouchBox from '@screens/app/Components/CommentsTouchBox/CommentsTouchBox';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import checkPropTypes from 'check-prop-types';
var assert = require('assert');

test('like button snapshot test', () => {
  const treeWithoutCommentsLength = renderer
    .create(<CommentsTouchBox />)
    .toJSON();
  expect(treeWithoutCommentsLength).toMatchSnapshot();
  const treeWithCommentLengthZero = renderer
    .create(<CommentsTouchBox commentsLength={0} />)
    .toJSON();
  expect(treeWithCommentLengthZero).toMatchSnapshot();
  const treeWithCommentLengthOne = renderer
    .create(<CommentsTouchBox commentsLength={1} />)
    .toJSON();
  expect(treeWithCommentLengthOne).toMatchSnapshot();
  const treeWithCommentLengthGreaterThanOne = renderer
    .create(<CommentsTouchBox commentsLength={2} />)
    .toJSON();
  expect(treeWithCommentLengthGreaterThanOne).toMatchSnapshot();
});

function testPropTypesWithoutErrors(commentsLength) {
  it(
    'testing commentsLength values (No errors) where commentsLength is ' +
      commentsLength,
    () => {
      const wrapper = shallow(
        <CommentsTouchBox commentsLength={commentsLength} />,
      );
      const instance = wrapper.instance();
      const commentsLengthProp = instance.props.commentsLength;
      expect(commentsLength).toEqual(commentsLengthProp);
    },
  );
}

function testPropTypesWithErrors(commentLength, errorMsg, testDescription) {
  it('Throws failed propType Error for ' + testDescription, () => {
    let result = checkPropTypes(
      CommentsTouchBox.propTypes,
      {commentsLength: commentLength},
      'prop',
      CommentsTouchBox.commentsLength,
    );
    assert(result === errorMsg);
  });
}

describe('testing commentsLength values', () => {
  testPropTypesWithoutErrors(0);
  testPropTypesWithoutErrors(1);
  testPropTypesWithoutErrors(1000);
  testPropTypesWithErrors(
    undefined,
    'Failed prop type: commentsLength in undefined must be an integer',
    'undefined value given to commentsLength',
  );
  testPropTypesWithErrors(
    null,
    'Failed prop type: commentsLength in undefined must be an integer',
    'null value given to commentsLength',
  );
  testPropTypesWithErrors(
    '',
    'Failed prop type: commentsLength in undefined must be an integer',
    'empty string value given to commentsLength',
  );
  testPropTypesWithErrors(
    'test',
    'Failed prop type: commentsLength in undefined must be an integer',
    'string value with length > 0, given to commentsLength',
  );
  testPropTypesWithErrors(
    true,
    'Failed prop type: commentsLength in undefined must be an integer',
    'true bool value given to commentsLength',
  );
  testPropTypesWithErrors(
    false,
    'Failed prop type: commentsLength in undefined must be an integer',
    'false bool value given to commentsLength',
  );
  testPropTypesWithErrors(
    234.5,
    'Failed prop type: commentsLength in undefined must be an integer',
    'positive float given to commentsLength',
  );
  testPropTypesWithErrors(
    -1.5,
    'Failed prop type: commentsLength in undefined must be an integer',
    'negative float given to commentsLength',
  );
  testPropTypesWithErrors(
    -1,
    'Failed prop type: commentsLength in undefined must be a non-negative number',
    'negative integer given to commentsLength',
  );
});
