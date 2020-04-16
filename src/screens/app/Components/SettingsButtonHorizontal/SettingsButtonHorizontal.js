import {IconButton} from 'react-native-paper';
import React from 'react';

export default class SettingsButtonHorizontal extends React.Component {
  state = {
    iconSize: 30,
    settingsButtonHorizontalIcon: 'dots-horizontal',
  };

  handleSettingsClick = () => {};

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
