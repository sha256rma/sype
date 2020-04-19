import 'react-native';
import React from 'react';
import FollowerButton from '@screens/app/Components/FollowerButton/FollowerButton';

import renderer from 'react-test-renderer';

test('Follower Button Snapshot Test', () => {
  const tree = renderer.create(<FollowerButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
