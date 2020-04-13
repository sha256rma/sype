import 'react-native';
import React from 'react';
import SettingsButtonHorizontal from '@screens/app/Components/SettingsButtonHorizontal/SettingsButtonHorizontal';

import renderer from 'react-test-renderer';

test('setting button snapshot test', () => {
  const tree = renderer.create(<SettingsButtonHorizontal />).toJSON();
  expect(tree).toMatchSnapshot();
});
