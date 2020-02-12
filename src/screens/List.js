import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PhotoComponent from '../components/PhotoComponent';

import { db } from '../config';

let photosRef = db.ref('/photos');

export default class List extends Component {

    state = {
        photos: []
    };

    componentDidMount() {
        photosRef.on('value', snapshot => {
            let data = snapshot.val();
            if(data) {
                let items = Object.values(data);
                let photos = Object.values(data);
                this.setState({ photos });
            } else {
                this.setState({ photos: [] });
            }
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.photos.length > 0 ? (
                    <PhotoComponent photos={this.state.photos} />
                ) : (
                    <Text>No photos</Text>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ebebeb'
    }
});