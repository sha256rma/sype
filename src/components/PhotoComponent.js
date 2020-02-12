import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class PhotoComponent extends Component {
  
  static propTypes = {
    photos: PropTypes.array.isRequired
  };

  render() {
    return (
      <View style={styles.photosList}>
        {this.props.photos.map((photo, index) => {
          return (
            <View key={index}>
              <Text style={styles.phototext}>{photo.name}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photosList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  phototext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});