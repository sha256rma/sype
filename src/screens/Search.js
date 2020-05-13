import React, { useContext, useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Searchbar, Card, Title, Divider } from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import { AuthContext } from '../navigation/AuthNavigator';

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const [friend, setFriend] = useState({});

  const user = useContext(AuthContext);

  async function onSearch() {
    await firestore()
      .collection('users')
      .where('email', '==', searchText)
      .get()
      .then(snapshot => {
        if (!snapshot.empty) {
          snapshot.forEach(doc => {
            setFriend(doc.data());
          })
        } else {
          setFriend({});
        }
      });
  }


  function showResults() {
    if (friend.email === undefined) {
      console.log('friend initial', friend);
      return (
        <Title style={{ alignSelf: 'center', marginVertical: 100 }} >There are no results to your request</Title>
      );
    } else {
      return (
        <Card elevation={10} style={{ marginVertical: 50, marginHorizontal: 10, borderWidth: 1 }} >
          <Card.Cover source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png' }} />
          <Card.Title title={`${friend.email.slice(0, friend.email.indexOf('@'))}`} />
          <Divider />
          <Card.Content>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingTop: 15 }} >
              <View style={{ alignItems: 'center' }} >
                <Text>Followers</Text>
                <Text>{friend.followers}</Text>
              </View>
              <View style={{ alignItems: 'center' }} >
                <Text>Following</Text>
                <Text>{friend.following}</Text>
              </View>
              <View style={{ alignItems: 'center' }} >
                <Text>Posts</Text>
                <Text>{friend.totalPosts}</Text>
              </View>
            </View>
          </Card.Content>
        </Card>
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search email of a friend..."
        value={searchText}
        onChangeText={text => setSearchText(text)}
        onIconPress={onSearch}
      />
      {showResults()}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 28,
    fontWeight: '500',
    color: '#7f78d2',
  },
  button: {
    flexDirection: 'row',
    borderRadius: 30,
    marginTop: 10,
    marginBottom: 10,
    width: 160,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#481380',
  },
  buttonText: {
    color: '#ffe2ff',
    fontSize: 24,
    marginRight: 5,
  },
});


