// /**
//  * @format
//  */

// import 'react-native';
// import React from 'react';
// import App from '../App';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });

__tests__/Intro-test.js
import 'react-native';
import React from 'react';
import ChatScreen from '@screens/app/ChatScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<ChatScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
