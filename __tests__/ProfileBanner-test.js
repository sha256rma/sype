import 'react-native';
import React from 'react';
import ProfileBanner from '@screens/app/Components/ProfileBanner/ProfileBanner';

import renderer from 'react-test-renderer';

test('Profile Banner Snapshot Test', () => {
  const tree = renderer.create(<ProfileBanner />).toJSON();
  expect(tree).toMatchSnapshot();
});
