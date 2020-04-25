import {IconButton} from 'react-native-paper';
import React from 'react';
import PropTypes from 'prop-types';

export default class SettingsButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconSize: 30,
      icon: 'dots-' + this.props.icon,
    };
  }

  handleSettingsClick = () => {};
  render() {
    return (
      <IconButton
        icon={this.state.icon}
        size={this.state.iconSize}
        onPress={this.handleSettingsClick}
      />
    );
  }
}

SettingsButton.propTypes = {
  icon: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
};
