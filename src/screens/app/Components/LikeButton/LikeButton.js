import { IconButton } from 'react-native-paper';
import React from 'react'
import styles from './styles';

export default class LikeButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLikeClick = () => {
    }

    render() {

        return (
            <IconButton
                icon={this.props.isLiked ? 'heart' : 'heart-outline'}
                size={25}
                color={this.props.isLiked ? 'red' : 'grey'}
                onPress={this.handleLikeClick}
            />
        )
    }
}