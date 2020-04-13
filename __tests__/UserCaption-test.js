import 'react-native';
import React from 'react';
import UserCaption from '@screens/app/Components/UserCaption/UserCaption';

import renderer from 'react-test-renderer';

test('user caption snapshot test', () => {
  const tree = renderer.create(<UserCaption />).toJSON();
  expect(tree).toMatchSnapshot();
});
