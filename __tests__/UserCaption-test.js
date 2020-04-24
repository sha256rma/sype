import 'react-native';
import React from 'react';
import UserCaption from '@screens/app/Components/UserCaption/UserCaption';
import PropTypes from 'prop-types';
import checkPropTypes from 'check-prop-types';
var assert = require('assert');

import renderer from 'react-test-renderer';
import { types } from '@babel/core';

test('user caption snapshot test', () => {
  const tree = renderer.create(<UserCaption username="test" caption="test" />).toJSON();
  expect(tree).toMatchSnapshot();
});
// test numbers, arrays, strings, booleans combinations of other data types
describe('testing UserCaption values, should not throw errors', () => {
    const stringCaptionTest = 'Hi World, Missed Me ?';
    const stringUsernameTest = 'e805';
     it('testing UserCaption Creation String', () => {
         const wrapper = shallow(<UserCaption username={stringUsernameTest} caption={stringCaptionTest} />);
          const instance = wrapper.instance();
          const currentUsername = instance.state.username;
          const currentCaption = instance.state.caption;
          expect(currentUsername).toEqual(stringUsernameTest);
          expect(currentCaption).toEqual(stringCaptionTest);
         });

});
describe('testing UserCaption values, should throw errors', () => {
    it('Throws failed propType Error for not providing caption', () => { 
        result = checkPropTypes(UserCaption.propTypes, { username: 'bsefa' }, 'prop', UserCaption.username);
        assert(result === 'Failed prop type: The prop `caption` is marked as required in `<<anonymous>>`, but its value is `undefined`.'); 
    });
    it('Throws failed propType Error for not providing username', () => { 
        result = checkPropTypes(UserCaption.propTypes, { caption: 'corona is wack' }, 'prop', UserCaption.caption);
        assert(result === 'Failed prop type: The prop `username` is marked as required in `<<anonymous>>`, but its value is `undefined`.'); 
    });
    it('Throws failed propType Error for not providing caption', () => { 
        result = checkPropTypes(UserCaption.propTypes, { }, 'prop', UserCaption);
        assert(result.includes('Failed prop type: The prop `caption` is marked as required')); 
    });


    
});



//TODO : test handleCommentClick function
