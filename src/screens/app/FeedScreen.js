import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Card, Caption, Avatar } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import LikeButton from './Components/LikeButton/LikeButton'
import BookmarkButton from './Components/BookmarkButton/BookmarkButton'
import SettingsButtonVertical from './Components/SettingsButtonVertical/SettingsButtonVertical'
// import {Comments} from './Components/Comments/Comments'
export default class FeedScreen extends React.Component {
    constructor(props) {
        super(props);
    }


    // renders each post function. Each post is a card with a cover(the image) and content. Content for now has a caption with the username and 2 buttons
    renderPosts = element => {
        const { img, caption, username, comments } = element.item;
        return (
            <Card>
                <Card.Cover source={{ uri: img }} style={{ height: '70%' }} />
                <View style={{ position: 'absolute', right: 0 }}>
                    <SettingsButtonVertical></SettingsButtonVertical>
                </View>
                <Card.Content>
                    <ScrollView
                        keyboardShouldPersistTaps="always"
                        onScroll={event => {
                            this.scrollIndex = event.nativeEvent.contentOffset.y;
                        }}
                        ref={"scrollView"}
                    >
                        <View>
                            <Caption><Text>{username} : </Text>{caption}</Caption>
                            <View style={styles.buttonContainer}>
                                <LikeButton></LikeButton>
                                <BookmarkButton></BookmarkButton>
                            </View>
                        </View>


                    </ScrollView>
                </Card.Content>
            </Card>
        );
    }

    //sample post data for ui testing purposes. We also have use react-native carousel for swiping posts.
    render() {

        const posts = [
            {
                img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
                caption: 'Quarantine selfie #corona',
                likes: 2,
                saves: 0,
                comments: [
                    {
                        userName: 'Model1234',
                        userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                        comment: 'Slay girllll!!!'
                    }
                ],
                username: 'gabriela'
            },
            {
                img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
                caption: 'Quarantine selfie #corona',
                likes: 2,
                saves: 0,
                comments: [
                    {
                        userName: 'Model1234',
                        userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                        comment: 'Slay girllll!!!'
                    }
                ],
                username: 'gabriela'
            },
            {
                img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
                caption: 'Quarantine selfie #corona',
                likes: 2,
                saves: 0,
                comments: [
                    {
                        userName: 'Model1234',
                        userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                        comment: 'Slay girllll!!!'
                    }
                ],
                username: 'gabriela'
            }
        ]
        return (
            <View style={styles.container}>
                <Carousel
                    layout={'tinder'}
                    data={posts}
                    renderItem={this.renderPosts}
                    sliderWidth={500}
                    itemWidth={400}
                />
            </View>
        );
    }
}
const Comments = (props) => {
    return (
        <View style={styles.commentContainer}>
            <Avatar.Image size={this.state.commentImageSize} source={{ uri: this.props.data.userImage }} />
            <Text style={{ fontWeight: 'bold' }}>{this.props.data.userName}</Text>
            <Text>: {this.props.data.comment}</Text>
        </View>

    );
}

//styles for our elements. container is used for our carousel. buttonContainer is used for our buttons, to put them in one row.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'row'
    },
})

