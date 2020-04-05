import { IconButton } from 'react-native-paper';
import React from 'react'
import styles from './styles';

export default class SettingsButtonHorizontal extends React.Component {
    state = {
        iconSize: 30,
        settingsButtonHorizontalIcon: "dots-horizontal"
    }


    render() {
        handleSettingsClick = () => {

        }
        return (
            <IconButton
                icon={this.state.settingsButtonHorizontallIcon}
                size={this.state.iconSize}
                onPress={this.handleSettingsClick}
            />
        )
    }
}