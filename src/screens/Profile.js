import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
/**
import Showcase from '@gorhom/showcase-template';
import {version, description} from '../../package.json';
*/
import ProfileBanner from './app/Components/ProfileBanner/ProfileBanner';
import ProfileImageList from './app/Components/ProfileImageList/ProfileImageList';

/**
const examples = [
  {
    name: 'Settings',
    slug: 'Settings',
  },
  {
    name: 'FAQ',
    slug: 'faq',
  },
  {
    name: 'Privacy and Security',
    slug: 'privacy',
  },
];

*/

const ProfileScreen = () => {
  // hooks
  //const {navigate} = useNavigation();

  // callbacks
  /**
  const handleOnExamplePress = (slug: string) => {
    navigate(slug);
  };
  */

  /** NOTE, added your_id becasue that can different from the user that you are viewing! */
  this.state = {
    username: 'bujarsfa',
    user_id: 'bujarsefa',
    following_count: 20000000,
    follower_count: 15000,
    posts_count: 673,
    your_id: 'bujarsefa',
    profile_image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    postList: [
      {
        post_id: 1,
        isLiked: false,
        isBookmarked: false,
        commentsLength: 1,
        caption: 'Quarantine selfie #corona',
        likes: 2,
        saves: 0,
        username: 'bujarsefa',
        likers: {
          dennyliang: true,
        },
        bookmarkers: {
          dennyliang: true,
        },
        comments: [
          {
            userName: 'Model1234',
            userImage:
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            comment: 'Slay girllll!!!',
          },
        ],
        img:
          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
        date_posted: '10-10-2019',
      },
      {
        post_id: 2,
        isLiked: false,
        isBookmarked: false,
        commentsLength: 1,
        caption: 'Quarantine selfie #corona',
        likes: 2,
        saves: 0,
        username: 'bujarsefa',
        likers: {
          dennyliang: true,
        },
        bookmarkers: {
          dennyliang: true,
        },
        comments: [
          {
            userName: 'Model1234',
            userImage:
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            comment: 'Slay girllll!!!',
          },
        ],
        img:
          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
        date_posted: '10-10-2019',
      },
      {
        post_id: 3,
        isLiked: false,
        isBookmarked: false,
        commentsLength: 1,
        caption: 'Quarantine selfie #corona',
        likes: 2,
        username: 'bujarsefa',
        saves: 0,
        likers: {
          dennyliang: true,
        },
        bookmarkers: {
          dennyliang: true,
        },
        comments: [
          {
            usernamee: 'Model1234',
            userImage:
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            comment: 'Slay girllll!!!',
          },
        ],
        img:
          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
        date_posted: '10-10-2019',
      },
      {
        post_id: 4,
        isLiked: false,
        isBookmarked: false,
        commentsLength: 1,
        caption: 'Quarantine selfie #corona',
        likes: 2,
        username: 'bujarsefa',
        saves: 0,
        likers: {
          dennyliang: true,
        },
        bookmarkers: {
          dennyliang: true,
        },
        comments: [
          {
            userName: 'Model1234',
            userImage:
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            comment: 'Slay girllll!!!',
          },
        ],
        img:
          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
        date_posted: '10-10-2019',
      },
      {
        post_id: 5,
        isLiked: false,
        isBookmarked: false,
        commentsLength: 1,
        caption: 'Quarantine selfie #corona',
        likes: 2,
        username: 'bujarsefa',
        saves: 0,
        likers: {
          dennyliang: true,
        },
        bookmarkers: {
          dennyliang: true,
        },
        comments: [
          {
            userName: 'Model1234',
            userImage:
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            comment: 'Slay girllll!!!',
          },
        ],
        img:
          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
        date_posted: '10-10-2019',
      },
      {
        post_id: 6,
        isLiked: false,
        isBookmarked: false,
        commentsLength: 1,
        caption: 'Quarantine selfie #corona',
        likes: 2,
        username: 'bujarsefa',
        saves: 0,
        likers: {
          dennyliang: true,
        },
        bookmarkers: {
          dennyliang: true,
        },
        comments: [
          {
            userName: 'Model1234',
            userImage:
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            comment: 'Slay girllll!!!',
          },
        ],
        img:
          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
        date_posted: '10-10-2019',
      },
      {
        post_id: 7,
        isLiked: false,
        isBookmarked: false,
        commentsLength: 1,
        caption: 'Quarantine selfie #corona',
        likes: 2,
        username: 'bujarsefa',
        saves: 0,
        likers: {
          dennyliang: true,
        },
        bookmarkers: {
          dennyliang: true,
        },
        comments: [
          {
            userName: 'Model1234',
            userImage:
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            comment: 'Slay girllll!!!',
          },
        ],
        img:
          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
        date_posted: '10-10-2019',
      },
      {
        post_id: 8,
        isLiked: false,
        isBookmarked: false,
        commentsLength: 1,
        caption: 'Quarantine selfie #corona',
        likes: 2,
        saves: 0,
        username: 'bujarsefa',
        likers: {
          dennyliang: true,
        },
        bookmarkers: {
          dennyliang: true,
        },
        comments: [
          {
            userName: 'Model1234',
            userImage:
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            comment: 'Slay girllll!!!',
          },
        ],
        img:
          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
        date_posted: '10-10-2019',
      },
      {
        post_id: 9,
        isLiked: false,
        isBookmarked: false,
        commentsLength: 1,
        caption: 'Quarantine selfie #corona',
        likes: 2,
        saves: 0,
        username: 'bujarsefa',
        likers: {
          dennyliang: true,
        },
        bookmarkers: {
          dennyliang: true,
        },
        comments: [
          {
            userName: 'Model1234',
            userImage:
              'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            comment: 'Slay girllll!!!',
          },
        ],
        img:
          'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
        date_posted: '10-10-2019',
      },
    ],
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topLogoBar}>
        <Text style={styles.logoText}>Sype</Text>
      </View>
      {/** Passing in state for testing purposes, but we can/should switch this to individual props :) */}
      <ProfileBanner {...this.state} />
      {/** Adding this view just to show where images would  */}
      <ProfileImageList postList={this.state.postList} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    flex: 1,
    top: '5%',
  },
  imageContainer: {
    borderColor: 'purple',
    borderWidth: 1,
    marginTop: 20,
  },
  topLogoBar: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#6200ee',
  },
  logoText: {
    fontFamily: 'Georgia',
    color: 'white',
    padding: '3%',
    fontSize: 22,
  },
});

export default ProfileScreen;
