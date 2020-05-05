import React, { useContext, useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

import { AuthContext } from '../navigation/AuthNavigator';

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');
  const [friend, setFriend] = useState({});

  const user = useContext(AuthContext);

  async function onSearch() {
    await firestore().collection('users').where("email", '==', friend).get().then(snapshot => {
      console.log();
      if (!snapshot.empty) {
        console.log('friend', snapshot);
      } else {
        console.log('no friends found')
      }
    })
  }

  // async function logOut() {
  //   try {
  //     await auth().signOut();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }



  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder='Find friends...'
        value={searchText}
        onChangeText={text => setSearchText(text)}
        onIconPress={onSearch}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
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
