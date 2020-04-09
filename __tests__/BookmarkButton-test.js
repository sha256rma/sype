import 'react-native';
import React from 'react';
import BookmarkButton from '@screens/app/Components/BookmarkButton/BookmarkButton';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<BookmarkButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
