/** Can we Create a snapshot test for both grid + list view */
/** Create unit test for how the value of state changes when the button is pressed */
/** Will need UI tests to verify the change of display of the pages  */

import 'react-native';
import React from 'react';
import ProfileImageList from '@screens/app/Components/ProfileImageList/ProfileImageList';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {IconButton} from 'react-native-paper';
import {FlatList} from 'react-native';

/** NO TESTS.
 * THis is becasue whenver I import ProfileImageList I am getting a TypeError issue from the importm
 */

test('Profile Image List snapshot test', () => {
  /**  ProfileImageList has no passed in props. By default profileview state is 'grid' */
  const treeGrid = renderer.create(<ProfileImageList />).toJSON();
  expect(treeGrid).toMatchSnapshot();
});

/** Test for ensuring that state changes when the appropriate icon view button is selected */
function testIconButtonClicked() {
  it('onAppsIconButtonClicked profile_view state is grid', () => {
    const wrapper = shallow(<ProfileImageList />);
    /** Do we actually need the state before? It shouldn't be of concern to us. */
    const profileImageListInstance = wrapper.instance(); /** To ensure they all use the same instance declare . */
    const profileViewStateBeforeClick =
      profileImageListInstance.state.profile_view;
    const iconButtonWrapper = wrapper.find(IconButton);
    const appsIconButtonWrapper = iconButtonWrapper.find({
      icon: 'apps',
    }); /** Next find the one that has the property icon grid. */
    const appsIconButtonProps = appsIconButtonWrapper.first().props();
    appsIconButtonProps.onPress(); /** Click the onPress function which changes the state. */
    /** We only care that the sate is changing as needed.  */
    const profileViewStateAfterClick =
      profileImageListInstance.state.profile_view;
    expect(profileViewStateAfterClick).toEqual('grid');
  });

  it('onViewHeadlineIconButtonClicked profile_view state is list', () => {
    const wrapper = shallow(<ProfileImageList />);
    /** Do we actually need the state before? It shouldn't be of concern to us. */
    const profileImageListInstance = wrapper.instance(); /** To ensure they all use the same instance declare . */
    const profileViewStateBeforeClick =
      profileImageListInstance.state.profile_view;
    const iconButtonWrapper = wrapper.find(IconButton);
    const viewHeadlineIconButtonWrapper = iconButtonWrapper.find({
      icon: 'view-headline',
    }); /** Next find the one that has the property icon grid. */
    const viewHeadlineIconButtonProps = viewHeadlineIconButtonWrapper
      .first()
      .props();
    viewHeadlineIconButtonProps.onPress(); /** Click the onPress function which changes the state. */
    /** We only care that the sate is changing as needed.  */
    const profileViewStateAfterClick =
      profileImageListInstance.state.profile_view;
    expect(profileViewStateAfterClick).toEqual('list');
  });
}

/** Test for which FlatList is rendered, depending on the profile view state */
function testWhichFlatlistShows() {
  it('Profile View state = grid and 3 column flatlist is present', () => {
    const wrapper = shallow(<ProfileImageList />);
    const instance = wrapper.instance();
    instance.setState({
      profile_view: 'grid',
    }); /** WE just want to check the grid view first. (Force value) */
    /** get the current state -- for what reason? */
    //const viewState = instance.state.profile_view;
    //expect(viewState).toEqual('grid');

    const flatlistWrapper = wrapper.find(FlatList);
    //const threeColWrapper = flatlistWrapper.find({numColumns: 3});
    //console.log(threeColWrapper.first().props().numColumns);

    expect(flatlistWrapper.find({numColumns: 3})).toHaveLength(1);
  });

  it('Profile View state = grid and 2 column flatlist is NOT present', () => {
    const wrapper = shallow(<ProfileImageList />);
    const instance = wrapper.instance();
    instance.setState({
      profile_view: 'grid',
    }); /** WE just want to check the grid view first. (Force value) */
    /** get the current state -- for what reason? */
    //const viewState = instance.state.profile_view;
    //expect(viewState).toEqual('grid');

    const flatlistWrapper = wrapper.find(FlatList);
    //const threeColWrapper = flatlistWrapper.find({numColumns: 3});
    //console.log(threeColWrapper.first().props().numColumns);

    expect(flatlistWrapper.find({numColumns: 1})).toHaveLength(0);
  });

  it('Profile View state = list and 1 column flatlist is present', () => {
    const wrapper = shallow(<ProfileImageList />);
    const instance = wrapper.instance();
    instance.setState({
      profile_view: 'list',
    }); /** WE just want to check the grid view first. (Force value) */
    /** get the current state -- For what reason? */
    //const viewState = instance.state.profile_view;
    //expect(viewState).toEqual('grid');

    const flatlistWrapper = wrapper.find(FlatList);
    //const threeColWrapper = flatlistWrapper.find({numColumns: 3});
    //console.log(threeColWrapper.first().props().numColumns);

    expect(flatlistWrapper.find({numColumns: 1})).toHaveLength(1);
  });

  it('Profile View state = list and 3 column flatlist is NOT present', () => {
    const wrapper = shallow(<ProfileImageList />);
    const instance = wrapper.instance();
    instance.setState({
      profile_view: 'list',
    }); /** WE just want to check the grid view first. (Force value) */
    /** get the current state -- For what reason?*/
    //const viewState = instance.state.profile_view;

    //expect(viewState).toEqual('grid');

    const flatlistWrapper = wrapper.find(FlatList);
    //const threeColWrapper = flatlistWrapper.find({numColumns: 3});
    //console.log(threeColWrapper.first().props().numColumns);

    expect(flatlistWrapper.find({numColumns: 3})).toHaveLength(0);
  });
}

testWhichFlatlistShows();

// function testOnViewHeadlineIconButtonClicked(initalProfileViewStatus){
//     const profileViewStatus = initalProfileViewStatus === 'grid' ? 'grid' : 'list';
//     const wrapper = shallow(<ProfileImageList />);
//     const iconButtonWrapper = wrapper.find(IconButton);
//     const viewHeadlineIconButtonWrapper = iconButtonWrapper.find({icon: 'view-headline'});
//     const viewHeadlineIconButtonProps = viewHeadlineIconButtonWrapper.first().props();
//     console.log(viewHeadlineIconButtonProps);
// }

//   function testHandleLikeClick(initialLikeStatus) {
//     const likeStatus = initialLikeStatus ? 'liked' : 'unliked';
//     it('testing handleLikeClick function - initially ' + likeStatus, () => {
//       const wrapper = shallow(<LikeButton isLiked={initialLikeStatus} />);
//       const instance = wrapper.instance();
//       const previousLikedValue = instance.state.isLiked;
//       instance.handleLikeClick();
//       const currentLikedValue = instance.state.isLiked;
//       expect(currentLikedValue).toEqual(!previousLikedValue);
//     });
//   }

//   testOnAppsIconButtonClicked();
//   testOnViewHeadlineIconButtonClicked();
testIconButtonClicked();
