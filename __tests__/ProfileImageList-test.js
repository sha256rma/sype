import 'react-native';
import React from 'react';
import ProfileImageList from '@screens/app/Components/ProfileImageList/ProfileImageList';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {IconButton} from 'react-native-paper';
import {FlatList} from 'react-native';

/** ======== SNAPSHOT TEST =========== */
test('Profile Image List snapshot test', () => {
  /**  ProfileImageList has no passed in props. By default profileview state is 'grid' */
  const treeGrid = renderer.create(<ProfileImageList />).toJSON();
  expect(treeGrid).toMatchSnapshot();
});


/** ======= HELPER FUNCTIONS ======== */

/** Function: testIconButtonClicked() 
 * Test for ensuring that the profile_view state changes when the appropriate icon view button is selected.
 * Note the onPress is a sub-child component of the ProfileImageList component.  
 * Clicking app icon button changes profile_view state to 'grid'
 * Clicking view-headline icon button changes profile_view state to 'list'
*/
function testIconButtonClicked() {
  describe('Test for profile_view state change based on associated icon', () => { 
    it('onAppsIconButtonClicked profile_view state is grid', () => {
      const wrapper = shallow(<ProfileImageList />);
      const profileImageListInstance = wrapper.instance(); /** To ensure they all use the same instance declare above */
      const iconButtonWrapper = wrapper.find(IconButton);
      const appsIconButtonWrapper = iconButtonWrapper.find({
        icon: 'apps',
      }); /** Next find the one that has the property icon grid. */
      const appsIconButtonProps = appsIconButtonWrapper.first().props();
      appsIconButtonProps.onPress(); /** Click the onPress function which changes the state. */
      /** We only care that the state is changing as needed. and not what it was before */
      const profileViewStateAfterClick =
        profileImageListInstance.state.profile_view;
      expect(profileViewStateAfterClick).toEqual('grid');
    });

    it('onViewHeadlineIconButtonClicked profile_view state is list', () => {
      const wrapper = shallow(<ProfileImageList />);
      const profileImageListInstance = wrapper.instance(); /** To ensure they all use the same instance declare above. */
      const iconButtonWrapper = wrapper.find(IconButton);
      const viewHeadlineIconButtonWrapper = iconButtonWrapper.find({
        icon: 'view-headline',
      }); /** Next find the one that has the property icon grid. */
      const viewHeadlineIconButtonProps = viewHeadlineIconButtonWrapper
        .first()
        .props();
      viewHeadlineIconButtonProps.onPress(); /** Click the onPress function which changes the state. */
      /** We only care that the state is changing as needed. and not what it was before */
      const profileViewStateAfterClick =
        profileImageListInstance.state.profile_view;
      expect(profileViewStateAfterClick).toEqual('list');
    });
  } );  
}


/** Funciton: testWhichFlatlistRenders 
 * The profile_view dictates how many columns the flatlist that render has.
 * A grid profile view will have 3 column flat list rendered (and not 1)
 * A list profile view will have 1 column flatlist rendered (and not 3)
*/
function testWhichFlatlistRenders() {
  describe('Test the rendered flatlist based on profile_view state', () => {
    it('Profile View state = grid and 3 column flatlist is present', () => {
      const wrapper = shallow(<ProfileImageList />);
      const instance = wrapper.instance();
      instance.setState({
        profile_view: 'grid',
      }); /** WE just want to check the grid view first. (Force value) */
      const flatlistWrapper = wrapper.find(FlatList);
      expect(flatlistWrapper.find({numColumns: 3})).toHaveLength(1);
    });

    it('Profile View state = grid and 2 column flatlist is NOT present', () => {
      const wrapper = shallow(<ProfileImageList />);
      const instance = wrapper.instance();
      instance.setState({
        profile_view: 'grid',
      }); /** WE just want to check the grid view first. (Force value) */
  
      const flatlistWrapper = wrapper.find(FlatList);
      expect(flatlistWrapper.find({numColumns: 1})).toHaveLength(0);
    });

    it('Profile View state = list and 1 column flatlist is present', () => {
      const wrapper = shallow(<ProfileImageList />);
      const instance = wrapper.instance();
      instance.setState({
        profile_view: 'list',
      }); /** WE just want to check the list view first. (Force value) */
      /** get the current state -- For what reason? */
      const flatlistWrapper = wrapper.find(FlatList);
      expect(flatlistWrapper.find({numColumns: 1})).toHaveLength(1);
    });

    it('Profile View state = list and 3 column flatlist is NOT present', () => {
      const wrapper = shallow(<ProfileImageList />);
      const instance = wrapper.instance();
      instance.setState({
        profile_view: 'list',
      }); /** WE just want to check the list view first. (Force value) */

      const flatlistWrapper = wrapper.find(FlatList);
      expect(flatlistWrapper.find({numColumns: 3})).toHaveLength(0);
    });
  });
}






/** PropTypes Tests! Each ProfileImageList has the posts and postchildren prop tests */

function testPropTypesWithoutErrors(postList) {
  
  it(
    'testing FlatList data (No errors) where postList is ' + postList,
    () => {
      const wrapper = shallow(<ProfileImageList postList = {postList} />);
      const flatList = wrapper.find(FlatList).at(0);
      const flatListData = flatList.props().data;
      expect(flatListData).toEqual(postList);
      
    },
  );
}



/** CALL THE TESTS */
testIconButtonClicked();
testWhichFlatlistRenders();
testPropTypesWithoutErrors([{username: 'bujarsefa', commentsLength: 0, caption: '', likes: 10, isLiked: true, isBookmarked: false}]);

