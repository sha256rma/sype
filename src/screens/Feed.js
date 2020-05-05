import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Text,
  SafeAreaView,
  Alert,
} from 'react-native';

import SettingsButton from './app/Components/SettingsButton/SettingsButton';
import ProfileAvatar from './app/Components/ProfileAvatar/ProfileAvatar';
import Post from './app/Components/Post/Post';
import Swiper from 'react-native-swiper';
import {Divider} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import * as ScreenshotDetector from 'react-native-screenshot-detect';

export default class FeedScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      swiperIndex: 0,
      posts: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchPosts();

    this.eventEmitter = ScreenshotDetector.subscribe(() => {
      Alert.alert(
        'The post with caption',
        posts[this.state.swiperIndex].caption,
        'was screenshotted',
      );
    });
  }

  componentWillUnmount() {
    ScreenshotDetector.unsubscribe(this.eventEmitter);
  }

  fetchPosts = () => {
    const subscriber = firestore()
      .collection('posts')
      .onSnapshot(querySnapshot => {
        const posts = [];

        querySnapshot.forEach(documentSnapshot => {
          posts.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        this.setState({
          posts,
          loading: false,
        });
      });
  };

  // renders each post function. Each post is a card with a cover(the image) and content. Content for now has a caption with the username and 2 buttons
  renderPosts = element => {
    const {
      allowScreenshot,
      caption,
      dateCreated,
      hearts,
      image,
      key,
      uid,
      username,
    } = element;
    // const isLiked = likers[uid] ? true : false; // if i liked it
    // const isBookmarked = bookmarkers[uid] ? true : false;

    return (
      <TouchableWithoutFeedback
        key={key}
        onPress={() => this.props.navigation.navigate('UserProfile')}>
        <View>
          <View style={styles.topBarViewStyles}>
            <ProfileAvatar username={username} img={image} />
            <SettingsButton icon="horizontal" />
          </View>
          <Post
            img={image}
            isLiked={true}
            likes={hearts}
            isBookmarked={true}
            caption={caption}
            username={username}
            commentsLength={0}
          />
          <Divider />
        </View>
      </TouchableWithoutFeedback>
    );
  };

  //sample post data for ui testing purposes. We also have use react-native carousel for swiping posts.
  render() {
    console.log('Posts are:', this.state.posts);
    return (
      <SafeAreaView style={{flex: 1}}>
        <Swiper
          horizontal={false}
          showsPagination={false}
          onIndexChanged={index => this.setState({swiperIndex: index})}
          loop={false}>
          {this.state.posts.map(element => {
            return this.renderPosts(element);
          })}
        </Swiper>
      </SafeAreaView>
    );
  }
}
// const Comments = (props) => {
//     return (
//         <View style={styles.commentContainer}>
//             <Avatar.Image size={this.state.commentImageSize} source={{ uri: this.props.data.userImage }} />
//             <Text style={{ fontWeight: 'bold' }}>{this.props.data.userName}</Text>
//             <Text>: {this.props.data.comment}</Text>
//         </View>

//     );
// }

//styles for our elements. container is used for our carousel. buttonContainer is used for our buttons, to put them in one row.
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topBarViewStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
    justifyContent: 'space-between',
  },
});

const posts = [
  {
    id: 0,
    img:
      'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
    caption:
      'Quarantine selfie oronasa dsajl as lnsaln aln flsan lsan lfaslf fnasl nfals nlsan lsan lasn lfasn lfasnf lan',
    likes: 2,
    saves: 0,
    comments: [
      {
        userName: 'Model1234',
        userImage:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        comment: 'Sla girlll!!',
      },
    ],
    username: 'gabriela',
    likers: {
      dennyliang: true,
    },
    bookmarkers: {
      dennyliang: false,
    },
  },
  {
    id: 1,
    img:
      'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
    caption: 'Quarae selfie #corona',
    likes: 2,
    saves: 0,
    comments: [
      {
        userName: 'Model1234',
        userImage:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        comment: 'Slay girl!!',
      },
    ],
    username: 'gabriellllla',
    likers: {
      dennyliang: false,
    },
    bookmarkers: {},
  },
  {
    id: 2,
    img:
      'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
    caption: 'Quarantine selfie #corona',
    likes: 2,
    saves: 0,
    comments: [
      {
        userName: 'Model1234',
        userImage:
          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        comment: 'Slay girllll!!!',
      },
    ],
    username: 'gabriela',
    likers: {},
    bookmarkers: {
      dennyliang: true,
    },
  },
];
