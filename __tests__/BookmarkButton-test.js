import 'react-native';
import React from 'react';
import BookmarkButton from '@screens/app/Components/BookmarkButton/BookmarkButton';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {IconButton} from 'react-native-paper';
import checkPropTypes from 'check-prop-types';

var assert = require('assert');

test('like button snapshot test', () => {
  const treeTrue = renderer
    .create(<BookmarkButton isBookmarked={true} />)
    .toJSON();
  expect(treeTrue).toMatchSnapshot();
  const treeFalse = renderer
    .create(<BookmarkButton isBookmarked={false} />)
    .toJSON();
  expect(treeFalse).toMatchSnapshot();
});

function testHandleSaveClick(initialBookmarkedStatus) {
  const bookmarkedStatus = initialBookmarkedStatus
    ? 'bookmarked'
    : 'notBookmarked';
  it('testing handleSaveClick function - initially ' + bookmarkedStatus, () => {
    const wrapper = shallow(
      <BookmarkButton isBookmarked={initialBookmarkedStatus} />,
    );
    const instance = wrapper.instance();
    const previousBookmarkedValue = instance.state.isBookmarked;
    instance.handleSaveClick();
    const currentBookmarkedValue = instance.state.isBookmarked;
    expect(currentBookmarkedValue).toEqual(!previousBookmarkedValue);
  });
}

describe('testing handleSaveClick cases', () => {
  testHandleSaveClick(true);
  testHandleSaveClick(false);
});

function testPropTypesWithoutErrors(isBookmarked) {
  const bookmark = 'bookmark';
  const bookmarkOutline = 'bookmark-outline';
  const colorBlack = 'black';
  const color018786 = '#018786';
  it(
    'testing icon button heart values (No errors) where isBookmarked is ' +
      isBookmarked,
    () => {
      const wrapper = shallow(<BookmarkButton isBookmarked={isBookmarked} />);
      const iconButton = wrapper.find(IconButton).at(0);
      const iconBookmarkedValue = iconButton.props().icon;
      const iconColorValue = iconButton.props().color;
      if (isBookmarked === true) {
        expect(iconBookmarkedValue).toEqual(bookmark);
        expect(iconColorValue).toEqual(color018786);
      } else if (isBookmarked === false) {
        expect(iconBookmarkedValue).toEqual(bookmarkOutline);
        expect(iconColorValue).toEqual(colorBlack);
      }
    },
  );
}

function testPropTypesWithErrors(isBookmarked, errorMsg, testDescription) {
  it('Throws failed propType Error for ' + testDescription, () => {
    let result = checkPropTypes(
      BookmarkButton.propTypes,
      {isBookmarked: isBookmarked},
      'prop',
      BookmarkButton.isBookmarked,
    );
    console.log(result);
    assert(result === errorMsg);
  });
}

describe('testing icon button bookmarked values', () => {
  testPropTypesWithoutErrors(true);
  testPropTypesWithoutErrors(false);
  testPropTypesWithErrors(
    undefined,
    'Failed prop type: The prop `isBookmarked` is marked as required in `<<anonymous>>`, but its value is `undefined`.',
    'undefined value given to isBookmarked',
  );
  testPropTypesWithErrors(
    null,
    'Failed prop type: The prop `isBookmarked` is marked as required in `<<anonymous>>`, but its value is `null`.',
    'null value given to isBookmarked',
  );
  testPropTypesWithErrors(
    '',
    'Failed prop type: Invalid prop `isBookmarked` of type `string` supplied to `<<anonymous>>`, expected `boolean`.',
    'empty string value given to isBookmarked',
  );
  testPropTypesWithErrors(
    'test',
    'Failed prop type: Invalid prop `isBookmarked` of type `string` supplied to `<<anonymous>>`, expected `boolean`.',
    'string value with length > 0, given to isBookmarked',
  );
  testPropTypesWithErrors(
    234,
    'Failed prop type: Invalid prop `isBookmarked` of type `number` supplied to `<<anonymous>>`, expected `boolean`.',
    'number given to isBookmarked',
  );
  testPropTypesWithErrors(
    234.5,
    'Failed prop type: Invalid prop `isBookmarked` of type `number` supplied to `<<anonymous>>`, expected `boolean`.',
    'number given to isBookmarked',
  );
});
