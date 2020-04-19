import 'react-native';
import React from 'react';
import ProfileUsername from '@screens/app/Components/ProfileUsername/ProfileUsername';

import renderer from 'react-test-renderer';

test('Profile Username Snapshot Test', () => {
  const tree = renderer.create(<ProfileUsername />).toJSON();
  expect(tree).toMatchSnapshot();
});
