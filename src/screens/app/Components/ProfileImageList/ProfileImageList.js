import React from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity} from 'react-native';
import { Image } from 'react-native';
import { IconButton } from 'react-native-paper';
import Post from './../Post/Post'
 

export default class ProfileImageList extends React.Component {
 
    
    
    
    
  
    state = {
      visible: true,
      username: 'bujarsefa',
      profile_img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg',
      followers: '100',
      following: '2',
      posts: '10',
      postList: [
        {
            
            post_id: 1, 
            isLiked: false,
            isBookmarked: false,
            commentsLength: 1,
            caption: 'Quarantine selfie #corona', 
            likes: 2, 
            saves: 0, 
            username: 'bujarsefa',
            likers: 
              {
                dennyliang: true
              }, 
            bookmarkers: 
              {
                dennyliang: true
              }, 
            comments: [
              {
                userName: 'Model1234',
                userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                comment: 'Slay girllll!!!'
              }
            ], 
            
            img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg', 
            date_posted: '10-10-2019'
        },
        {
          post_id: 2,
          isLiked: false,
        isBookmarked: false,
        commentsLength: 1,
          caption: 'Quarantine selfie #corona', 
          likes: 2, 
          saves: 0, 
          username: 'bujarsefa',
          likers: 
            {
              dennyliang: true
            }, 
          bookmarkers: 
            {
              dennyliang: true
            }, 
          comments: [
            {
              userName: 'Model1234',
              userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
              comment: 'Slay girllll!!!'
            }
          ], 
          
          img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg', 
          date_posted: '10-10-2019'
      },
      {
        post_id: 3,
        isLiked: false,
        isBookmarked: false, 
        commentsLength: 1,
        caption: 'Quarantine selfie #corona', 
        likes: 2, 
        username: 'bujarsefa',
        saves: 0, 
        likers: 
          {
            dennyliang: true
          }, 
        bookmarkers: 
          {
            dennyliang: true
          }, 
        comments: [
          {
            userName: 'Model1234',
            userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
            comment: 'Slay girllll!!!'
          }
        ], 
        
        img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg', 
        date_posted: '10-10-2019'
    },
    {
      post_id: 4,
      isLiked: false,
        isBookmarked: false, 
        commentsLength: 1, 
      caption: 'Quarantine selfie #corona', 
      likes: 2, 
      username: 'bujarsefa',
      saves: 0, 
      likers: 
        {
          dennyliang: true
        }, 
      bookmarkers: 
        {
          dennyliang: true
        }, 
      comments: [
        {
          userName: 'Model1234',
          userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          comment: 'Slay girllll!!!'
        }
      ], 
      
      img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg', 
      date_posted: '10-10-2019'
  },
  {
    post_id: 5, 
    isLiked: false,
        isBookmarked: false, 
        commentsLength: 1,
    caption: 'Quarantine selfie #corona', 
    likes: 2,
    username: 'bujarsefa', 
    saves: 0, 
    likers: 
      {
        dennyliang: true
      }, 
    bookmarkers: 
      {
        dennyliang: true
      }, 
    comments: [
      {
        userName: 'Model1234',
        userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        comment: 'Slay girllll!!!'
      }
    ], 
    
    img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg', 
    date_posted: '10-10-2019'
},
{
  post_id: 6, 
  isLiked: false,
        isBookmarked: false, 
        commentsLength: 1,
  caption: 'Quarantine selfie #corona', 
  likes: 2, 
  username: 'bujarsefa',
  saves: 0, 
  likers: 
    {
      dennyliang: true
    }, 
  bookmarkers: 
    {
      dennyliang: true
    }, 
  comments: [
    {
      userName: 'Model1234',
      userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      comment: 'Slay girllll!!!'
    }
  ], 
  
  img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg', 
  date_posted: '10-10-2019'
},
{
    post_id: 7, 
    isLiked: false,
        isBookmarked: false, 
        commentsLength: 1,
    caption: 'Quarantine selfie #corona', 
    likes: 2, 
    username: 'bujarsefa',
    saves: 0, 
    likers: 
      {
        dennyliang: true
      }, 
    bookmarkers: 
      {
        dennyliang: true
      }, 
    comments: [
      {
        userName: 'Model1234',
        userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        comment: 'Slay girllll!!!'
      }
    ], 
    
    img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg', 
    date_posted: '10-10-2019'
  },
  {
    post_id: 8, 
    isLiked: false,
        isBookmarked: false, 
        commentsLength: 1,
    caption: 'Quarantine selfie #corona', 
    likes: 2, 
    saves: 0, 
    username: 'bujarsefa',
    likers: 
      {
        dennyliang: true
      }, 
    bookmarkers: 
      {
        dennyliang: true
      }, 
    comments: [
      {
        userName: 'Model1234',
        userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        comment: 'Slay girllll!!!'
      }
    ], 
    
    img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg', 
    date_posted: '10-10-2019'
  },
  {
    post_id: 9, 
    isLiked: false,
        isBookmarked: false, 
        commentsLength: 1,
    caption: 'Quarantine selfie #corona', 
    likes: 2, 
    saves: 0,
    username: 'bujarsefa', 
    likers: 
      {
        dennyliang: true
      }, 
    bookmarkers: 
      {
        dennyliang: true
      }, 
    comments: [
      {
        userName: 'Model1234',
        userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        comment: 'Slay girllll!!!'
      }
    ], 
    
    img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg', 
    date_posted: '10-10-2019'
  },
  {
    post_id: 10, 
    isLiked: false,
        isBookmarked: false, 
        commentsLength: 1,
    caption: 'Quarantine selfie #corona', 
    likes: 2, 
    saves: 0, 
    username: 'bujarsefa',
    likers: 
      {
        dennyliang: true
      }, 
    bookmarkers: 
      {
        dennyliang: true
      }, 
    comments: [
      {
        userName: 'Model1234',
        userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        comment: 'Slay girllll!!!'
      }
    ], 
    
    img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg', 
    date_posted: '10-10-2019'
  },
  {
    post_id: 11, 
    isLiked: false,
        isBookmarked: false, 
        commentsLength: 1,
    caption: 'Quarantine selfie #corona', 
    likes: 2, 
    saves: 0, 
    username: 'bujarsefa',
    likers: 
      {
        dennyliang: true
      }, 
    bookmarkers: 
      {
        dennyliang: true
      }, 
    comments: [
      {
        userName: 'Model1234',
        userImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        comment: 'Slay girllll!!!'
      }
    ], 
    
    img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg', 
    date_posted: '10-10-2019'
  },

      ],
      
      
      profile_view: 'grid', 
      /** This is our 'global' constant which determines how the user's profile images are displayed on the screen.
       * If it is a grid layout, we can view 3 images in each row. If it is listview, we only view one.
       * Note the check occurs in function renderList and in passing to 
       */


    };



    renderGrid = (element) => {
        const styling = {
            width: '32.5%',
            margin: 1,
            overflow: 'hidden',
            borderRadius: 5
        }
        return (
            <TouchableOpacity activeOpacity= {1} style={styling} onPress = {() => {console.log(element.item.post_id)}}>
                <Image source={{ uri: element.item.img }} style={{width: '100%', aspectRatio: 1 }} />
            </TouchableOpacity>
        );
    }




    render() {
        return (
            <View style={styles.profileImageViewContainer}>
    
                <View style={styles.profileViewButtonsContainer}>
                    <IconButton style={{backgroundColor: 'white'}} icon="apps" onPress={() => this.setState({profile_view : 'grid'})} />
                    <IconButton style={{backgroundColor: 'white'}} icon="view-headline" onPress={() => this.setState({profile_view : 'list'})  }/>
                </View>
            
                
                { this.state.profile_view == 'grid' ? 
                
                    <FlatList
                        key= {this.state.profile_view} 
                        data = {this.state.postList}
                        renderItem = {element => this.renderGrid(element) }
                        keyExtractor = {element => element}
                        numColumns={3}
                        extraData={this.state.profile_view}
                    />
                
                    :
                    /** NOTE, we must directly pass in each prop. Otherwise, it will issue an error. */
                    <FlatList
                    key= {this.state.profile_view} 
                    data = {this.state.postList}
                    renderItem = {element => <Post img = {element.item.img} commentsLength = {element.item.commentsLength} caption = {element.item.caption} likes = {element.item.likes} isLiked={element.item.isLiked} isBookmarked={element.item.isBookmarked} username={element.item.username}/> }
                    keyExtractor = {element => element}
                    numColumns={1}
                    extraData={this.state.profile_view}
                    />

                    /** Also note, i originaly had conditions on both numColum + renderItem function
                      * which would render a different list based on the variable profile_view.
                      * But, I'm not sure which one is the 'better' solution + why. */

                
                
                }


                

            </View>




      );
    }
  }


const styles = StyleSheet.create({
  profileViewButtonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImageViewContainer: {
      flex: 1, 
      backgroundColor: 'white'
  }
});