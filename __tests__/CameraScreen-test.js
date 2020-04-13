import 'react-native';
import React from 'react';
import CameraScreen from '@screens/app/CameraScreen';

import renderer from 'react-test-renderer';

test('camera screen snapshot test', () => {
  const tree = renderer.create(<CameraScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
