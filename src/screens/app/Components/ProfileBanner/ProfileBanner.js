
import React from 'react';
import {SafeAreaView, FlatList, View, Text, StyleSheet} from 'react-native';
import { Image } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, Banner, Chip, IconButton, Divider, Caption, Subheading} from 'react-native-paper';
import { ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { SafeAreaContext } from 'react-native-safe-area-context';
import  ProfileBannerAvatar  from '../ProfileBannerAvatar/ProfileBannerAvatar'
import  ProfileUsername  from '../ProfileUsername/ProfileUsername'
import  FollowerButton  from '../FollowerButton/FollowerButton'
import  FollowingButton from '../FollowingButton/FollowingButton'
import  PostCountButton  from '../PostCountButton/PostCountButton'


export default class ProfileBanner extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        const { user_id, username, profile_image, following_count, follower_count, posts_count } = this.props;
        const profileImageSize = 75; 
        

        return ( 
            <View style={styles.profileBannerContainer}>
            
                <ProfileBannerAvatar   profile_image={this.props.profile_image} />
                
                {/** Create three rows --- Possibly 4 but wull get back to this
                * 1. Username
                * 2. Profile Content
                * 3. Profile Display Views
                */}

                <View style={styles.interactiveContentContainer}>
                    <View style={styles.rowContainer}>
                        <ProfileUsername username={username}/>
                    </View>

                    <View style={styles.rowContainer}>
                        <FollowerButton follower_count={follower_count}/>
                        <FollowingButton following_count={following_count}/>
                        <PostCountButton posts_count={posts_count}/>
                    </View>

                

                    <View style={styles.rowContainer}>

                    </View>
                </View>


            </View>





        );
    }


}

const styles = StyleSheet.create({
    profileBannerContainer: {
        flexDirection: 'row', 
        paddingVertical: 5, 
        paddingHorizontal: 5
    },
    usernameFontSize: {
        fontSize: 25
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    interactiveContentContainer: {
        flex: 1,
    }

});
