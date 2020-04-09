import React from 'react';
import styles from './styles';
import {Subheading} from 'react-native-paper';
import {Text} from 'react-native';

export default class UserCaption extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCommentClick = () => {};

  render() {
    return (
      <Subheading style={{textAlignVertical: 'center'}}>
        <Text style={{fontWeight: 'bold'}}>{this.props.username}</Text>{' '}
        <Text style={{textAlignVertical: 'center', flexWrap: 'wrap'}}>
          {this.props.caption}
        </Text>
      </Subheading>
    );
  }
}
