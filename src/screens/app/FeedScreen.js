import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card, Caption, IconButton } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';

export default class FeedScreen extends React.Component {
    constructor(props) {
        super(props);

    }
    // handle like button. Will be working with denny to ensure this works
    handleLikeClick = () => {
        
    }
    // renders each post function. Each post is a card with a cover(the image) and content. Content for now has a caption with the username and 2 buttons
    renderPosts = element => {
        const { img, caption, likes, saves,likeStatusIcon, saveStatusIcon, comments, username } = element.item;
        return (
            <Card>
                <Card.Cover source={{ uri: img }} style={{ height: '70%' }} />
                <Card.Content>
                    <Caption><Text>{username} : </Text>{caption}</Caption>
                    <View style={styles.buttonContainer}>
                        <IconButton
                            //style={styles.likeButton}
                            icon={likeStatusIcon}
                            color="red"
                            size={20}
                            onPress={this.handleLikeClick}
                        />
                        <IconButton
                        //style={styles.saveButton}
                            icon={saveStatusIcon}
                            style={styles.button}
                            size={20}
                            onPress={this.handleLikeClick}
                        />
                    </View>
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
                likeStatusIcon: "heart-outline",
                saveStatusIcon: "content-save-outline",
                saves: 0,
                comments: ['youre fucking bot', 'dumb fucking infected bitch', 'bobs and vagen pls'],
                username: 'gabriela'
            },
            {
                img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
                caption: 'Quarantine selfie #corona',
                likes: 2,
                likeStatusIcon: "heart-outline", 
                saveStatusIcon: "content-save-outline",
                saves: 0,
                comments: ['youre fucking bot', 'dumb fucking infected bitch', 'bobs and vagen pls'],
                username: 'gabriela'
            },
            {
                img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
                caption: 'Quarantine selfie #corona',
                likes: 2,
                likeStatusIcon: "heart-outline",
                saveStatusIcon: "content-save-outline",
                saves: 0,
                comments: ['youre fucking bot', 'dumb fucking infected bitch', 'bobs and vagen pls'],
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

