import 'react-native';
import React from 'react';
import PostCountButton from '@screens/app/Components/PostCountButton/PostCountButton';
import {Chip} from 'react-native-paper';
import {numberFormat} from '../../../../common/numberFormatter';

import renderer from 'react-test-renderer';

test('Post Count Button Snapshot Test', () => {
  const tree = renderer.create(<PostCountButton />).toJSON();
  expect(tree).toMatchSnapshot();
});


describe(
  
);