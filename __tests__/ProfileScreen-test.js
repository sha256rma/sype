import 'react-native';
import React from 'react';
import ProfileScreen from '@screens/app/ProfileScreen';

import renderer from 'react-test-renderer';

test('profile screen snapshot test', () => {
  const tree = renderer.create(<ProfileScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
