import {IconButton } from 'react-native-paper';
import React from 'react'
import styles from './styles';

export default class BookmarkButton extends React.Component{
    state = {
        iconSize : 20,
        unbookmarkedIcon: "bookmark-outline",
        bookmarkedIcon : "bookmark"
    }

    
    render() {
        handleSaveClick = () => {

        }
    return(     
        <IconButton                         
            icon={this.state.unbookmarkedIcon}
            size={this.state.iconSize}
            onPress={this.handleSaveClick}
        />  
      )
    } 
}