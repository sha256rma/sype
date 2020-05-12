import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet} from 'react-native';
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

  this.state = {
    usernamee: 'bujarsefa',
    user_id: 'bujarsefa',
    following_count: 20000000,
    follower_count: 15000,
    posts_count: 673,
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
          usernamee: 'bujarsefa',
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
          usernamee: 'bujarsefa',
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
          usernamee: 'bujarsefa',
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
          usernamee: 'bujarsefa',
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
          usernamee: 'bujarsefa',
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
          usernamee: 'bujarsefa',
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
          usernamee: 'bujarsefa',
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
          usernamee: 'bujarsefa',
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
          usernamee: 'bujarsefa',
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
          post_id: 10,
          isLiked: false,
          isBookmarked: false,
          commentsLength: 1,
          caption: 'Quarantine selfie #corona',
          likes: 2,
          saves: 0,
          usernamee: 'bujarsefa',
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
        }
      ],
  };

  // renders
  return (
    <View style={styles.container}>
      {/** Passing in state for testing purposes, but we can/should switch this to individual props :) */}
      <ProfileBanner {...this.state} />
      {/** Adding this view just to show where images would  */}
      <ProfileImageList {...this.state}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    top: '5%',
  },
  imageContainer: {
    borderColor: 'purple',
    borderWidth: 1,
    marginTop: 20,
  },
});

export default ProfileScreen;
