import {IconButton } from 'react-native-paper';
import React from 'react'
import styles from './styles';

export default class SaveButton extends React.Component{
    state = {
        iconSize : 20,
        saveStatusIcon: "content-save-outline"
    }

    
    render() {
        handleSaveClick = () => {

        }
    return(     
        <IconButton                         
            icon={this.state.saveStatusIcon}
            size={this.state.iconSize}
            onPress={this.handleSaveClick}
        />  
      )
    } 
}