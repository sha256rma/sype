import 'react-native';
import React from 'react';
import BookmarkButton from '@screens/app/Components/BookmarkButton/BookmarkButton';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';

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
