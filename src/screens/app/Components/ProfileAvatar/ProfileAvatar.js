import React from 'react'
import styles from './styles';
import {View} from 'react-native'
import {Avatar, Title} from 'react-native-paper'
export default class ProfileAvatar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleCommentClick = () => {

    }

    render() {

        return (
            <View style={{ flexDirection: 'row', alignItems: 'center'}} >
                <Avatar.Image size={24} source={{ uri: this.props.img }} />
                <Title style={{ marginHorizontal: 10 }} >{this.props.username}</Title>
            </View>

        )
    }
}