import {IconButton } from 'react-native-paper';
import React from 'react'
import styles from './styles';

export default class LikeButton extends React.Component{
    state = {
        iconSize : 20,
        likeIconColor : 'red',
        unlikeStatusIcon: "heart-outline",
        likeStatusIcon: 'heart'
    }
    render() {
        handleLikeClick = () => {
            
        }
    return(
          
        <IconButton
            icon={this.state.unlikeStatusIcon}
            size={this.state.iconSize}
            color={this.state.likeIconColor}
            onPress={this.handleLikeClick}
        />
      )
    } 
}