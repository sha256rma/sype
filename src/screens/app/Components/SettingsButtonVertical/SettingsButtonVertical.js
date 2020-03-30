import {IconButton } from 'react-native-paper';
import React from 'react'
import styles from './styles';

export default class SettingsButtonVertical extends React.Component{
    state = {
        iconSize : 20,
        settingsButtonVerticalIcon: "dots-vertical"
    }

    
    render() {
        handleSettingsClick = () => {

        }
    return(     
        <IconButton                         
            icon={this.state.settingsButtonVerticalIcon}
            size={this.state.iconSize}
            onPress={this.handleSettingsClick}
        />  
      )
    } 
}