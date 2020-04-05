import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Card, Avatar, Title, Divider, Subheading } from 'react-native-paper';
import Carousel from 'react-native-snap-carousel';
import LikeButton from './Components/LikeButton/LikeButton'
import BookmarkButton from './Components/BookmarkButton/BookmarkButton'
import CommentsTouchBox from './Components/CommentsTouchBox/CommentsTouchBox'
import SettingsButtonHorizontal from './Components/SettingsButtonHorizontal/SettingsButtonHorizontal'
import UserCaption from './Components/UserCaption/UserCaption'
export default class FeedScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    // renders each post function. Each post is a card with a cover(the image) and content. Content for now has a caption with the username and 2 buttons
    renderPosts = element => {
        const { img, caption, username, comments, likes, likers, bookmarkers } = element.item;
        const uid = 'dennyliang'; // this is the acc im logged on
        const isLiked = likers[uid] == true ? true : false; // if i liked it
        const isBookmarked = bookmarkers[uid] == true ? true : false;
        return (
            <Card style={{ height: '100%', width: '100%' }} >
                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, justifyContent: 'space-between' }} >
                    <View style={styles.rowContainer} >
                        <Avatar.Image size={24} source={{ uri: img }} />
                        <Title style={{ marginHorizontal: 10 }} >{username}</Title>
                    </View>
                    <SettingsButtonHorizontal />
                </View>
                <Card.Cover source={{ uri: img }} style={{ height: '50%', width: '100%' }} />
                <Card.Content>
                    <View style={styles.rowContainer}>
                        <View style={styles.rowContainer} >
                            <LikeButton isLiked={isLiked} ></LikeButton>
                            <Text style={{ fontSize: 18 }} >{likes}</Text>
                        </View>
                        <View style={{ borderLeftWidth: .5, marginLeft: 17, height: 30, borderColor: 'grey' }} />
                        <BookmarkButton isBookmarked={isBookmarked} ></BookmarkButton>
                    </View>
                    <Divider style={{ marginBottom: 5 }} />
                    <View >
                        <UserCaption username={username} caption={caption}></UserCaption>
                        <CommentsTouchBox commentsLength = {comments.length}></CommentsTouchBox>
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
                caption: 'Quarantine selfie #coronasa dsajl as lnsaln aln flsan lsan lfaslf fnasl nfals nlsan lsan lasn lfasn lfasnf lan',
                likes: 2,
                saves: 0,
                comments: [
                    {
                        userName: 'Model1234',
                        userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                        comment: 'Slay girllll!!!'
                    }
                ],
                username: 'gabriela',
                likers: {
                    dennyliang: true
                },
                bookmarkers: {
                    dennyliang: true
                }
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
                username: 'gabriela',
                likers: {
                    dennyliang: true
                },
                bookmarkers: {
                }
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
                username: 'gabriela',
                likers: {
                    dennyliang: true
                },
                bookmarkers: {
                    dennyliang: true
                }
            }
        ]
        return (
            <View style={styles.container}>
                <Carousel
                    vertical={true}
                    layout={'tinder'}
                    data={posts}
                    renderItem={this.renderPosts}
                    itemWidth={Dimensions.get('window').width}
                    sliderWidth={Dimensions.get('window').width}
                    itemHeight={Dimensions.get('window').height}
                    sliderHeight={Dimensions.get('window').height * .9}
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
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})

