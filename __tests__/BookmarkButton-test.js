import 'react-native';
import React from 'react';
import BookmarkButton from '@screens/app/Components/BookmarkButton/BookmarkButton';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {IconButton} from 'react-native-paper';

test('bookmark snapshot test', () => {
  const tree = renderer.create(<BookmarkButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

function testHandleSaveClick(initialBookmarkStatus) {
  const bookmarkStatus = initialBookmarkStatus ? 'bookmarked' : 'unbookmarked';
  it(
    'testing handleBookmarkClick function - initially ' + bookmarkStatus,
    () => {
      const wrapper = shallow(
        <BookmarkButton isBookmarked={initialBookmarkStatus} />,
      );
      const instance = wrapper.instance();
      const previousBookmarkValue = instance.state.isBookmarked;
      instance.handleSaveClick();
      const currentBookmarkValue = instance.state.isBookmarked;
      expect(currentBookmarkValue).toEqual(!previousBookmarkValue);
    },
  );
}

describe('testing handleSaveClick function', () => {
  testHandleSaveClick(true);
  testHandleSaveClick(false);
  testHandleSaveClick(undefined);
});

describe('testing icon button bookmark values', () => {
  const bookmark = 'bookmark';
  const bookmarkOutline = 'bookmark-outline';
  const falseWrapper = shallow(<BookmarkButton isBookmarked={false} />);
  const falseIconButton = falseWrapper.find(IconButton).at(0);
  it('bookmark outlined when isBookmarked is false', () => {
    const bookmarkValue = falseIconButton.props().icon;
    expect(bookmarkValue).toEqual(bookmarkOutline);
  });
  const trueWrapper = shallow(<BookmarkButton isBookmarked={true} />);
  const trueIconButton = trueWrapper.find(IconButton).at(0);
  it('bookmark filled when isLiked is true', () => {
    const bookmarkValue = trueIconButton.props().icon;
    expect(bookmarkValue).toEqual(bookmark);
  });
  const undefinedWrapper = shallow(<BookmarkButton isBookmarked={undefined} />);
  const undefinedIconButton = undefinedWrapper.find(IconButton).at(0);
  it('bookmark filled when isLiked is undefined ', () => {
    const bookmarkValue = undefinedIconButton.props().icon;
    expect(bookmarkValue).toEqual(bookmarkOutline);
  });
});
