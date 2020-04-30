import 'react-native';
import React from 'react';
import ProfileBanner from '@screens/app/Components/ProfileBanner/ProfileBanner';

import renderer from 'react-test-renderer';

test('Profile Banner Snapshot Test', () => {
  const tree = renderer
    .create(
      <ProfileBanner
        username={''}
        posts_count={0}
        follower_count={0}
        following_count={0}
        profile_image={''}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
