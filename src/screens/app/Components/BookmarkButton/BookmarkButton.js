import { IconButton } from 'react-native-paper';
import React from 'react'
import styles from './styles';

export default class BookmarkButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleSaveClick = () => {

    }

    render() {
        return (
            <IconButton
                icon={this.props.isBookmarked ? 'bookmark' : 'bookmark-outline'}
                size={25}
                color={this.props.isBookmarked ? 'black' : 'grey'}
                onPress={this.handleSaveClick}
            />
        )
    }
}