import 'react-native';
import React from 'react';
import ProfileUsername from '@screens/app/Components/ProfileUsername/ProfileUsername';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import {Text} from 'react-native';

test('Profile Username Snapshot Test', () => {
    const tree = renderer.create(<ProfileUsername />).toJSON();
    expect(tree).toMatchSnapshot();
});

function testUsernamePropInput(usernamePropInput){
    
    const usernamePropInputWrapper = shallow(<ProfileUsername username={usernamePropInput}/>);
    const profileUsernameTextComponent = usernamePropInputWrapper.find(Text).at(0);

    it( 'ProfileUsername username prop equals passed in username:' + usernamePropInput, () => {
        const profileUsernameUsernameProp = profileUsernameTextComponent.props().username;
        expect(profileUsernameUsernameProp).toEqual(usernamePropInput);
    });
}

/** THis styling of testing came from:  https://blog.cloudboost.io/jest-and-react-go-good-together-part-3-639932d8ee32*/
describe( 'Profile Username Component Test Suite', () => {

    /** NOT sure if I need to pass in some initial props... */
    it('reders without crashing', () => {
        expect(shallow(<ProfileUsername />)).toBeDefined();
    });

    testUsernamePropInput('');
    testUsernamePropInput('bujarsefa');
    testUsernamePropInput('a');
    testUsernamePropInput('1');
    testUsernamePropInput('!');
    testUsernamePropInput(undefined);
});
