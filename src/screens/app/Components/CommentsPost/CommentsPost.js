import {IconButton } from 'react-native-paper';
import React from 'react'
import styles from './styles';
import moment from "moment";
import Comments from "react-native-comments";
import { getComments } from '../../tempData/commentsData';

export default class CommentsPost extends React.Component{
    state = {
        comments
    }

    
    render() {
        handleLikeClick = () => {

        }
    return(
          
        <Comments
        data={comments}
        keyExtractor={item => item.commentId}
        usernameExtractor={item => this.extractUsername(item)}
        keyExtractor={item => item.commentId}
        //Extract the key indicating comments parent
        parentIdExtractor={item => item.parentId}
        //what prop holds the comment owners username
        usernameExtractor={item => this.extractUsername(item)}
        //when was the comment last time edited
        editTimeExtractor={item => this.extractEditTime(item)}
        //When was the comment created
        createdTimeExtractor={item => this.extractCreatedTime(item)}
        //where is the body
        bodyExtractor={item => this.extractBody(item)}
        //where is the user image
        imageExtractor={item => this.extractImage(item)}
        //Where to look to see if user liked comment
        likeExtractor={item => this.likeExtractor(item)}
        //Where to look to see if user reported comment
        reportedExtractor={item => this.reportedExtractor(item)}
        //Where to find array with user likes
        likesExtractor={item => this.likesExtractor(item)}
        //Where to get nr of replies
        childrenCountExtractor={item => this.extractChildrenCount(item)}
        //what to do when user clicks submits edited comment
        saveAction={(text, parentCommentId) => {
            let date = moment().format("YYYY-MM-DD H:mm:ss");
            // let comments = this.actions.save(
            // this.state.comments,
            // text,
            // parentCommentId,
            // date,
            // "testUser"
            // );
            // this.setState({
            // comments: comments
            // });

            // if (!parentCommentId) {
            // this.refs.scrollView.scrollToEnd();
            // }
        }}
        //what to do when user clicks submits edited comment
        editAction={(text, comment) => {
            // let comments = this.actions.edit(
            // this.state.comments,
            // comment,
            // text
            // );
            // this.setState({
            // comments: comments
            // });
        }}
    />
      )
    } 
}