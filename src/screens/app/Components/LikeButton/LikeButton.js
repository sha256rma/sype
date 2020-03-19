import {IconButton } from 'react-native-paper';
import React from 'react'
import styles from './styles';

export default class LikeButton extends React.Component{
    state = {
        iconSize : 20,
        likeIconColor : 'red',
        likeStatusIcon: "heart-outline",
        unlikeStatusIcon: 'heart'
    }

    
    render() {
        handleLikeClick = () => {

        }
    return(
          
        <IconButton
            style={styles.likeIconStyle}
            icon={this.state.likeStatusIcon}
            size={this.state.iconSize}
            color={this.state.likeIconColor}
            onPress={this.handleLikeClick}
        />
      )
    } 
}