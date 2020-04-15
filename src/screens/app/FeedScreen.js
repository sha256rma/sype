import React from 'react';
import { View, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native';
import SettingsButtonHorizontal from './Components/SettingsButtonHorizontal/SettingsButtonHorizontal'
import ProfileAvatar from './Components/ProfileAvatar/ProfileAvatar'
import Post from './Components/Post/Post'
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
            <TouchableWithoutFeedback onPress={()=>{}}>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10, justifyContent: 'space-between'}} >
                        <ProfileAvatar username={username} img={img}/>
                        <SettingsButtonHorizontal />
                    </View>
                    <Post img={img} isLiked={isLiked} likes={likes} isBookmarked={isBookmarked} caption={caption} username={username} commentsLength={comments.length}/>
                </View>
             </TouchableWithoutFeedback>

        );
    }

    //sample post data for ui testing purposes. We also have use react-native carousel for swiping posts.
    render() {

        const posts = [
            {
                id:0,
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
                    dennyliang: false
                }
            },
            {
                id:1,
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
                    dennyliang: false
                },
                bookmarkers: {
                }
            },
            {
                id:2,
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
                },
                bookmarkers: {
                    dennyliang: true
                }
            }
        ]
        return (
            // <View style={{flex:1}}>
                <FlatList
                    data={posts}
                    renderItem={this.renderPosts}
                    keyExtractor={item => item.id}           
                />
            // </View>
        );
    }
}
// const Comments = (props) => {
//     return (
//         <View style={styles.commentContainer}>
//             <Avatar.Image size={this.state.commentImageSize} source={{ uri: this.props.data.userImage }} />
//             <Text style={{ fontWeight: 'bold' }}>{this.props.data.userName}</Text>
//             <Text>: {this.props.data.comment}</Text>
//         </View>

//     );
// }

//styles for our elements. container is used for our carousel. buttonContainer is used for our buttons, to put them in one row.
const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
})

