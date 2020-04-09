import 'react-native';
import React from 'react';
import ProfileAvatar from '@screens/app/Components/ProfileAvatar/ProfileAvatar';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ProfileAvatar />).toJSON();
  expect(tree).toMatchSnapshot();
});
