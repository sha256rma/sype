import {IconButton} from 'react-native-paper';
import React from 'react';

export default class SettingsButtonHorizontal extends React.Component {
  state = {
    iconSize: 30,
    settingsButtonVerticalIcon: 'dots-vertical',
  };
  handleSettingsClick = () => {};
  render() {
    return (
      <IconButton
        icon={this.state.settingsButtonVerticalIcon}
        size={this.state.iconSize}
        onPress={this.handleSettingsClick}
      />
    );
  }
}
