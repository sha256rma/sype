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
});

describe('testing icon button heart values', () => {
  const bookmark = 'bookmark';
  const bookmarkOutline = 'bookmark-outline';
  const wrapper = shallow(<BookmarkButton isBookmarked={false} />);
  const iconButton = wrapper.find(IconButton).at(0);
  it('heart outlined when isLiked is false', () => {
    const heartValue = iconButton.props().icon;
    expect(heartValue).toEqual(bookmarkOutline);
  });
  const newWrapper = shallow(<BookmarkButton isBookmarked={true} />);
  const newIconButton = newWrapper.find(IconButton).at(0);
  it('heart filled when isLiked is true', () => {
    const heartValue = newIconButton.props().icon;
    expect(heartValue).toEqual(bookmark);
  });
});
