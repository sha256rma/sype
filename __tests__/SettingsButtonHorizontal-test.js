import 'react-native';
import React from 'react';
import SettingsButtonHorizontal from '@screens/app/Components/SettingsButtonHorizontal/SettingsButtonHorizontal';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<SettingsButtonHorizontal />).toJSON();
  expect(tree).toMatchSnapshot();
});
