import { IconButton } from 'react-native-paper';
import React from 'react'
import styles from './styles';

export default class SettingsButtonVertical extends React.Component {
    state = {
        iconSize: 30,
        settingsButtonVerticalIcon: "dots-horizontal"
    }


    render() {
        handleSettingsClick = () => {

        }
        return (
            <IconButton
                icon={this.state.settingsButtonVerticalIcon}
                size={this.state.iconSize}
                onPress={this.handleSettingsClick}
            />
        )
    }
}