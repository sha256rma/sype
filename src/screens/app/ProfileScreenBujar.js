//import React from 'react';
//import {SafeAreaView, FlatList, View, Text, StyleSheet} from 'react-native';
//import {Image} from 'react-native';
//import {
//  Avatar,
//  Button,
//  Card,
//  Title,
//  Paragraph,
//  Banner,
//  Chip,
//  IconButton,
//  Divider,
//  Caption,
//  Subheading,
//} from 'react-native-paper';
//import {
//  ScrollView,
//  TouchableOpacity,
//  TouchableWithoutFeedback,
//} from 'react-native-gesture-handler';
//import {SafeAreaContext} from 'react-native-safe-area-context';
//import LikeButton from './Components/LikeButton/LikeButton';
//import BookmarkButton from './Components/BookmarkButton/BookmarkButton';
//import SettingsButtonVertical from './Components/SettingsButtonVertical/SettingsButtonVertical';
//
//
//
//export default class ProfileScreen extends React.Component {
//
//
//
//    state = {
//    visible: true,
//    username: 'bujarsefa',
//    profile_image_src:
//      'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
//    followers: '100',
//    following: '2',
//    posts: '10',
//    postList: [
//      {
//
//            post_id: 1,
//        image_src:
//          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
//        date_posted: '10-10-2019',
//      },
//      {
//        post_id: 2,
//        image_src:
//          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
//        date_posted: '10-10-2019',
//      },
//      {
//        post_id: 3,
//        image_src:
//          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
//        date_posted: '10-10-2019',
//      },
//      {
//        post_id: 4,
//        image_src:
//          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
//        date_posted: '10-10-2019',
//      },
//      {
//        post_id: 5,
//        image_src:
//          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
//        date_posted: '10-10-2019',
//      },
//      {
//        post_id: 6,
//        image_src:
//          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
//        date_posted: '10-10-2019',
//      },
//      {
//        post_id: 7,
//        image_src:
//          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
//        date_posted: '10-10-2019',
//      },
//      {
//        post_id: 8,
//        image_src:
//          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
//        date_posted: '10-10-2019',
//      },
//      {
//        post_id: 9,
//        image_src:
//          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
//        date_posted: '10-10-2019',
//      },
//      {
//        post_id: 10,
//        image_src:
//          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
//        date_posted: '10-10-2019',
//      },
//      {
//        post_id: 11,
//        image_src:
//          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
//        date_posted: '10-10-2019',
//      }],
//
//
//    profile_view: 'grid'
//    /** This is our 'global' constant which determines how the user's profile images are displayed on the screen.
//     * If it is a grid layout, we can view 3 images in each row. If it is listview, we only view one.
//     * Note the check occurs in function renderList and in passing to
//     */
//  };
//
//  renderGrid = element => {
//    return (
//      /** My goal for is to list 3 per row! -- This styling might now
//       * work so would need to get back to it.
//       */
//
//
//
//        <TouchableWithoutFeedback style={{ width:  '33%', margin: '.166%' }} onPress = {() => {console.log(element.item.post_id);}}>
//        <Image
//          source={{uri: element.item.image_src}}
//          style={{width: '100%', aspectRatio: 1}}
//        />
//      </TouchableWithoutFeedback>
//    );
//  };
//
//  renderList = element => {
//    return (
//      /** My goal for is to list 3 per row! -- This styling might now
//       * work so would need to get back to it.
//       */
//
//
//
//        <TouchableWithoutFeedback style={{ width:  '100%', margin: '.166%' }} onPress = {() => {console.log(element.item.post_id);}}>
//        <Image
//          source={{uri: element.item.image_src}}
//          style={{width: '100%', aspectRatio: 1}}
//        />
//      </TouchableWithoutFeedback>
//    );
//  };
//
//  render() {
//    return (
//      <View style={{flex: 1, backgroundColor: 'white'}}>
//        {/** This view is for the User's Infomation -- Banner  */}
//
//        <View
//          style={{
//            flexDirection: 'row',
//            paddingVertical: 5,
//            paddingHorizontal: 5,
//          }}>
//          {/** The left Portion is the users profile pictre */}
//          <View style={{}}>
//            <Avatar.Image
//              size={75}
//              source={{uri: this.state.profile_image_src}}
//            />
//          </View>
//
//          <View style={{flex: 1}}>
//            <View
//              style={{
//                flexDirection: 'row',
//                justifyContent: 'center',
//                alignItems: 'center',
//              }}>
//              <Text style={{fontSize: 25}}>{this.state.username}</Text>
//            </View>
//
//            <View
//              style={{
//                flexDirection: 'row',
//                justifyContent: 'center',
//                alignItems: 'center',
//              }}>
//              <Chip
//                style={{backgroundColor: 'white'}}
//                icon=""
//                onPress={() => console.log('Pressed Followers')}>
//                Followers {this.state.followers}
//              </Chip>
//              <Chip
//                style={{backgroundColor: 'white'}}
//                icon=""
//                onPress={() => console.log('Pressed Following')}>
//                Following {this.state.following}
//              </Chip>
//              <Chip style={{backgroundColor: 'white'}}>
//                Posts {this.state.posts}
//              </Chip>
//            </View>
//            <View
//              style={{
//                flexDirection: 'row',
//                justifyContent: 'center',
//                alignItems: 'center',
//              }}>
//              <IconButton
//                style={{backgroundColor: 'white'}}
//                icon="apps"
//                onPress={() => this.setState({profile_view: 'grid'})}
//              />
//              <IconButton
//                style={{backgroundColor: 'white'}}
//                icon="view-headline"
//                onPress={() => this.setState({profile_view: 'list'})}
//              />
//
//
//
//
//          </View>
//        </View>
//
//        {/** We need to hand in a key becasue number of columns cannot change 'on the fly' thus we pass in the key to re-render the whole list.
//                there may be a better implementation to this, but will have to get back to . */}
//        <FlatList
//          key={this.state.profile_view}
//          data={this.state.postList}
//          renderItem={
//            this.state.profile_view == 'grid'
//              ? element => this.renderGrid(element)
//              : element => this.renderList(element)
//          }
//          keyExtractor={element => element}
//          numColumns={this.state.profile_view == 'grid' ? 3 : 1}
//          extraData={this.state.profile_view}
//        />
//      </View>
//    );
//  }
//}
//}
//
//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
