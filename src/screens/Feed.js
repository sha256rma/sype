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

import Post from './app/Components/Post/Post';
import Swiper from 'react-native-swiper';
import { Divider } from 'react-native-paper';

import { AuthContext } from '../navigation/AuthNavigator';
import firestore from '@react-native-firebase/firestore';
import auth, { firebase } from '@react-native-firebase/auth';
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

    this.eventEmitter = ScreenshotDetector.subscribe(async () => {
      const { swiperIndex, posts } = this.state;
      let uid = ''; // the uid of the person whose post got screenshotted
      let key = '';
      posts.map((element, index) => {
        if (index == swiperIndex) {
          uid = element.uid;
          key = element.key;
        }
      });

      firestore().collection('users').where('uid', '==', uid).get().then(snapshot => {
        snapshot.forEach(doc => {
          firestore().collection('users').doc(doc.id).update({ [key]: firebase.auth().currentUser.uid });
        })
      })

      Alert.alert(
        'The post with caption',
        posts[swiperIndex].caption,
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
      saves,
      uid,
      username,
    } = element;
    // const isLiked = likers[uid] ? true : false; // if i liked it
    // const isBookmarked = bookmarkers[uid] ? true : false;

    return (
      <View>
        <Post
          img={image}
          isLiked={true}
          likes={hearts}
          isBookmarked={true}
          caption={caption}
          username={username}
          commentsLength={0}
          key={key}
        />
        <Divider />
      </View>
    );
  };

  //sample post data for ui testing purposes. We also have use react-native carousel for swiping posts.
  render() {

    return (
      <SafeAreaView style={{ backgroundColor: '#212121', flex: 1 }}>
        <View style={styles.topLogoBar}>
          <Text style={styles.logoText}>Sype</Text>
        </View>
        <Swiper
          horizontal={false}
          showsPagination={false}
          onIndexChanged={index => this.setState({ swiperIndex: index })}
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
  topLogoBar: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#6200ee',
    marginBottom: '3%',
  },
  logoText: {
    fontFamily: 'Georgia',
    color: 'white',
    padding: '3%',
    fontSize: 22,
  },
});
