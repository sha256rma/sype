import 'react-native';
import React from 'react';
import ProfileBannerAvatar from '@screens/app/Components/ProfileBannerAvatar/ProfileBannerAvatar';

import renderer from 'react-test-renderer';

test('Profile Banner Avatar Snapshot Test', () => {
  const tree = renderer.create(<ProfileBannerAvatar />).toJSON();
  expect(tree).toMatchSnapshot();
});
