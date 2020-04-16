import { IconButton } from 'react-native-paper';
import React from 'react'

import renderer from 'react-test-renderer';

test('liked is hearted red', () => {
    const likeButton = renderer.create(<LikeButton isLiked={true} />).toJSON();

    expect(handleLikeClick(true)).toBe(false);
    expect(handleLikeClick(false)).toBe(true);
});




// function file

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
    }

    handleLikeClick = (isLiked) => {
        return isLiked ? false : true;
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