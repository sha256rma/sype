import 'react-native';
import React from 'react';
import FollowingButton from '@screens/app/Components/FollowingButton/FollowingButton';

import renderer from 'react-test-renderer';

test('Following Button Snapshot Test', () => {
  const tree = renderer.create(<FollowingButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
