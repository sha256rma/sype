import 'react-native';
import React from 'react';
import UserCaption from '@screens/app/Components/UserCaption/UserCaption';
import PropTypes from 'prop-types';
import checkPropTypes from 'check-prop-types';
var assert = require('assert');
import sinon from 'sinon';

import renderer from 'react-test-renderer';

test('user caption snapshot test', () => {
  const tree = renderer.create(<UserCaption username="test" caption="test" />).toJSON();
  expect(tree).toMatchSnapshot();
});
// test numbers, arrays, strings, booleans combinations of other data types
describe('testing UserCaption values', () => {
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
    it('Throws an error', () => {
        // result = checkPropTypes(UserCaption.propTypes, { username: 123 }, 'prop', UserCaption.username);
        // assert(result === 'Failed prop type: Invalid prop `username` of type `username` supplied to `UserCaption`, expected `string`.');
        let stub;
        <UserCaption />
        sinon.stub(console, 'error', (warning) => { throw new Error(warning) })
        const wrapper = shallow(<UserCaption username="here" caption={stringCaptionTest} />);

        // expect(stub.calledOnce).to.equal(true);
        expect(stub.calledWithExactly('Warning: Failed prop type: The prop `caption` is marked as required in `UserCaption`, but its value is `undefined`. .')).to.equal(true);

        console.error.restore();


    });



});


//TODO : test handleCommentClick function
