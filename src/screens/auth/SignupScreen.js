import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

})

export default class SignupScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Signup Screen</Text>
            </View>
        );
    }
}