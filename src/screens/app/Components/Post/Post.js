import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import LikeButton from '../LikeButton/LikeButton';
import BookmarkButton from '../BookmarkButton/BookmarkButton';
import CommentsTouchBox from '../CommentsTouchBox/CommentsTouchBox';
import UserCaption from '../UserCaption/UserCaption';
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
    };
  }

  render() {
    return (
      <Card style={styles.cardDimensions}>
        <Card.Cover
          source={{uri: this.state.img}}
          style={styles.cardCoverDimensions}
        />
        <Card.Content>
          <View style={styles.rowContainer}>
            <View style={styles.rowContainer}>
              <LikeButton isLiked={this.state.isLiked} />
              <Text style={styles.fontSizeLikes}>{this.state.likes}</Text>
            </View>
            <View style={styles.viewBetweenLikeAndVerticalButtonStyle} />
            <BookmarkButton isBookmarked={this.state.isBookmarked} />
          </View>
          <Divider style={styles.dividerStyles} />
          <View>
            <UserCaption
              username={this.state.username}
              caption={this.state.caption}
            />
            <CommentsTouchBox commentsLength={this.state.commentsLength} />
          </View>
        </Card.Content>
      </Card>
    );
  }
}
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontSizeLikes: {
    fontSize: 18,
  },
  cardCoverDimensions: {
    height: '50%',
    width: '100%',
  },
  cardDimensions: {
    marginRight: '5%',
    marginLeft: '5%',
    height: '88%',
    backgroundColor: '#9400D3',
  },
  dividerStyles: {
    marginBottom: 5,
  },
  viewBetweenLikeAndVerticalButtonStyle: {
    borderLeftWidth: 2,
    marginLeft: '5%',
    height: 30,
    borderColor: 'grey',
  },
});
