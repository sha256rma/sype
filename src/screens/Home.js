import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View>
                <Text>Home Screen</Text>

                <Button
                    title="Add a photo"
                    onPress={() => this.props.navigation.navigate('AddPhoto')}
                />

                <Button
                    title="List of photos"
                    color="green"
                    onPress={() => this.props.navigation.navigate('List')}
                />
            </View>
        );
    }
}