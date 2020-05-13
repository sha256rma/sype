import 'react-native';
import React from 'react';
import ProfileBanner from '@screens/app/Components/ProfileBanner/ProfileBanner';

import renderer from 'react-test-renderer';

test('Profile Banner Snapshot Test', () => {
  const treeMatchingUsername = renderer
    .create(
      <ProfileBanner
        username={''}
        posts_count={0}
        follower_count={0}
        following_count={0}
        profile_image={''}
        your_id={''}
      />,
    )
    .toJSON();
  expect(treeMatchingUsername).toMatchSnapshot();

  const treeNotMatchingUsernameTrueFollowing = renderer
    .create(
      <ProfileBanner
        username={'a'}
        posts_count={0}
        follower_count={0}
        following_count={0}
        profile_image={''}
        isFollowing={true}
        your_id={'b'}
      />,
    )
    .toJSON();
  expect(treeNotMatchingUsernameTrueFollowing).toMatchSnapshot();

  const treeNotMatchingUsernameFalseFollowing = renderer
    .create(
      <ProfileBanner
        username={'a'}
        posts_count={0}
        follower_count={0}
        following_count={0}
        profile_image={''}
        isFollowing={false}
        your_id={'b'}
      />,
    )
    .toJSON();
  expect(treeNotMatchingUsernameFalseFollowing).toMatchSnapshot();
});
