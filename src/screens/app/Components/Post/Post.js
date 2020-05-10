import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import LikeButton from '../LikeButton/LikeButton';
import BookmarkButton from '../BookmarkButton/BookmarkButton';
import CommentsTouchBox from '../CommentsTouchBox/CommentsTouchBox';
import UserCaption from '../UserCaption/UserCaption';
import SettingsButton from '../SettingsButton/SettingsButton';
import ProfileAvatar from '../ProfileAvatar/ProfileAvatar';


export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: this.props.img,
      isLiked: this.props.isLiked,
      likes: this.props.likes,
      isBookmarked: this.props.isBookmarked,
      caption: this.props.caption,
      username: this.props.username,
      commentsLength: this.props.commentsLength,
      key: this.props.key,
    };
  }

  render() {
    return (
      <Card style={styles.cardDimensions}>
        <ImageBackground
          source={{uri: this.state.img}}
          style={styles.cardCoverDimensions}>
          <TouchableWithoutFeedback
            key={this.state.key}
            onPress={() => this.props.navigation.navigate('UserProfile')}>
          <View style={styles.topBarViewStyles}>
            <ProfileAvatar username={this.state.username} img={this.state.img} />
            <SettingsButton icon="horizontal" />
          </View>
          </TouchableWithoutFeedback>
        <Card.Content><View style={styles.cardEmptyContent}></View></Card.Content>
        <Card.Content style={styles.cardElementcontent} >
          <View style={styles.rowIconContainer}>
          <UserCaption
              username={this.state.username}
              caption={this.state.caption}
            />
            <View style={styles.rowContainer}>
          <LikeButton isLiked={this.state.isLiked} />
          <BookmarkButton isBookmarked={this.state.isBookmarked} />
          </View>
          
          

          </View>
        </Card.Content>
        </ImageBackground>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fontSizeLikes: {
    fontSize: 16,
  },
  cardCoverDimensions: {
    height: '100%',
    width: '100%',
  },
  cardDimensions: {
    marginRight: '3%',
    marginLeft: '3%',
    height: '97%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden'
  },
  image: {
    flex:1 ,
    resizeMode: "cover",
    justifyContent: "center",
  },
  topBarViewStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    opacity: 0.7,
    justifyContent: 'space-between',
  },
  cardEmptyContent: {
    height: '84%'
  },
  cardElementcontent: {

    justifyContent: 'flex-end', 
    backgroundColor: '#ffffff', 
    opacity: 0.7,
  }
});
