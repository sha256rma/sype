import 'react-native';
import React from 'react';
import SettingsButton from '@screens/app/Components/SettingsButton/SettingsButton';
import renderer from 'react-test-renderer';
import checkPropTypes from 'check-prop-types';
var assert = require('assert');
import {shallow} from 'enzyme';

test('setting button snapshot test', () => {
  const treeHorizontal = renderer
    .create(<SettingsButton icon="horizontal" />)
    .toJSON();
  expect(treeHorizontal).toMatchSnapshot();
  const treeVertical = renderer
    .create(<SettingsButton icon="vertical" />)
    .toJSON();
  expect(treeVertical).toMatchSnapshot();
});
function testPropTypesWithoutErrors(icon) {
  it(
    'testing SettingsButton Creation with proper props where ' +
      'icon : ' +
      icon,
    () => {
      const wrapper = shallow(<SettingsButton icon={icon} />);
      const instance = wrapper.instance();
      const iconState = instance.state.icon;
      expect(iconState).toEqual('dots-' + icon);
    },
  );
}

// test numbers, arrays, strings, booleans combinations of other data types
describe('testing SettingsButton values, should not throw errors', () => {
  testPropTypesWithoutErrors('horizontal');
  testPropTypesWithoutErrors('vertical');
});

function testPropTypesWithErrors(icon, errorMsg, testDescription) {
  it('Throws failed propType Error for ' + testDescription, () => {
    let result = checkPropTypes(
      SettingsButton.propTypes,
      {icon: icon},
      'prop',
      SettingsButton.icon,
    );
    console.log(result);
    assert(result === errorMsg);
  });
}

describe('testing SettingsButton values, should throw errors', () => {
  testPropTypesWithErrors(
    null,
    'Failed prop type: The prop `icon` is marked as required in `<<anonymous>>`, but its value is `null`.',
    'not providing icon, icon is null',
  );
  testPropTypesWithErrors(
    undefined,
    'Failed prop type: The prop `icon` is marked as required in `<<anonymous>>`, but its value is `undefined`.',
    'not providing icon, icon is undefined',
  );
  testPropTypesWithErrors(
    true,
    'Failed prop type: Invalid prop `icon` of value `true` supplied to `<<anonymous>>`, expected one of ["horizontal","vertical"].',
    'providing value of true',
  );
  testPropTypesWithErrors(
    false,
    'Failed prop type: Invalid prop `icon` of value `false` supplied to `<<anonymous>>`, expected one of ["horizontal","vertical"].',
  );
  testPropTypesWithErrors(
    '',
    'Failed prop type: Invalid prop `icon` of value `` supplied to `<<anonymous>>`, expected one of ["horizontal","vertical"].',
    'providing value of empty string',
  );
  testPropTypesWithErrors(
    'test',
    'Failed prop type: Invalid prop `icon` of value `test` supplied to `<<anonymous>>`, expected one of ["horizontal","vertical"].',
    'providing value of test as string',
  );
  testPropTypesWithErrors(
    234,
    'Failed prop type: Invalid prop `icon` of value `234` supplied to `<<anonymous>>`, expected one of ["horizontal","vertical"].',
    'providing value of number',
  );
  testPropTypesWithErrors(
    234.5,
    'Failed prop type: Invalid prop `icon` of value `234.5` supplied to `<<anonymous>>`, expected one of ["horizontal","vertical"].',
    'providing value of number',
  );

  // testPropTypesWithErrors(false, 'corona is wack', 'Failed prop type: Invalid prop `username` of type `boolean` supplied to `<<anonymous>>`, expected `string`.', 'providing username value of false and not string');
  // testPropTypesWithErrors(234, 'corona is wack', 'Failed prop type: Invalid prop `username` of type `number` supplied to `<<anonymous>>`, expected `string`.', 'providing username value of number and not string');
  // testPropTypesWithErrors(234.5, 'corona is wack', 'Failed prop type: Invalid prop `username` of type `number` supplied to `<<anonymous>>`, expected `string`.', 'providing username value of number and not string');
});
//TODO:test setting button handleSttingsClick function
