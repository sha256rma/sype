import 'react-native';
import React from 'react';
import CameraScreen from '@screens/app/CameraScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<CameraScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
