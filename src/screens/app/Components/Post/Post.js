import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Divider } from 'react-native-paper';
import LikeButton from '../LikeButton/LikeButton'
import BookmarkButton from '../BookmarkButton/BookmarkButton'
import CommentsTouchBox from '../CommentsTouchBox/CommentsTouchBox'
import UserCaption from '../UserCaption/UserCaption'
// import styles from './styles'
export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            img: this.props.img,
            isLiked: this.props.isLiked,
            likes: this.props.likes,
            isBookmarked: this.props.isBookmarked,
            caption: this.props.caption,
            username: this.props.username,
            commentsLength: this.props.commentsLength
        }
        
    }

 

    render() {

        return (
            <Card style={{ height: '100%', width: '100%' }} >
            <Card.Cover source={{ uri: this.state.img }} style={{ height: '50%', width: '100%' }} />
            <Card.Content>
                <View style={styles.rowContainer}>
                    <View style={styles.rowContainer} >
                        <LikeButton isLiked={this.state.isLiked} ></LikeButton>
                        <Text style={{ fontSize: 18 }} >{this.state.likes}</Text>
                    </View>
                    <View style={{ borderLeftWidth: .5, marginLeft: 17, height: 30, borderColor: 'grey' }} />
                    <BookmarkButton isBookmarked={this.state.isBookmarked} ></BookmarkButton>
                </View>
                <Divider style={{ marginBottom: 5 }} />
                <View >
                    <UserCaption username={this.state.username} caption={this.state.caption}></UserCaption>
                    <CommentsTouchBox commentsLength = {this.state.commentsLength}></CommentsTouchBox>
                </View>
            </Card.Content>
        </Card>

        )
    }
    
}
const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})