import {IconButton} from 'react-native-paper';
import React from 'react';
<<<<<<< HEAD
=======
import styles from './styles';
>>>>>>> 36ab8c947c992f70038794805d31bae31b7c7a82

export default class SettingsButtonHorizontal extends React.Component {
  state = {
    iconSize: 30,
    settingsButtonHorizontalIcon: 'dots-horizontal',
  };
<<<<<<< HEAD
  handleSettingsClick = () => {};
=======

  handleSettingsClick = () => {};

>>>>>>> 36ab8c947c992f70038794805d31bae31b7c7a82
  render() {
    return (
      <IconButton
        icon={this.state.settingsButtonHorizontalIcon}
        size={this.state.iconSize}
        onPress={this.handleSettingsClick}
      />
    );
  }
}
