import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { List, Avatar } from 'react-native-paper'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyWord: '',
      users: [{
            username: 'bujarsefa', 
            img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg'
          }, 
          {
            username: 'denny',
            img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg'
          }, 
          {
            username: 'marvin',
            img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg'
          }, 
          {
            username: 'kartikeya',
            img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg'
          }, 
          {
            username: 'eram',
            img: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg'
          }]

    }

  }


  /** When a user types, we change the state of the search word and generate the 10 mostly likely connected users.
   * We don't have to limit the query to 10, (and to my knowledge flatlist continues to render items as they are seen)
   * However, we cannot query the whole database. So we have to find a good searching function that updates after a certain increment.
   */
  onSearchUser = (textInput) => {
    return this.setState({searchKeyWord : textInput});
  }


  /** This is a function that when the user clicks on a specific username, it will open the user's profile! */
  openSelectedUserPage = (user) => {
    return console.log("Open the page for this user: " + user.username)
  }



  renderList = (listItem) => {
      return(
        
        <View>
        <List.Item 
            style={{borderColor: 'gray', borderBottomWidth: 1}}
            title={listItem.item.username}
            onPress={listItem => this.openSelectedUserPage(listItem)}
            left={ (listItem) => <Avatar.Image size={40} source={ {uri: 'https://www.familyandmedia.eu/wp-content/uploads/2018/10/529382-4386816-selfie-psicologia-725x545.jpg'}} />} 
        />
        </View>

      );
  }


  render() {
    return (
      <View style={styles.container}>

          {/** NOTE, for all search pages/login/signup --> WE should not have autoCorrect or autoCapitalize */}
          <TextInput
            placeholder={'Search Users'}
            onChangeText = {text => this.onSearchUser(text)}
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 16, margin: 5}}
            value={this.state.searchKeyWord}
            autoCorrect={false}
            autoCapitalize={false}
          />


          <Text>{this.state.searchKeyWord}</Text>




          
          <FlatList 
            key={this.state.users.username}
            contentContainerStyle= {{flex: 1, margin: 5}}
            data={this.state.users}
            renderItem={listItem => this.renderList(listItem) }
            keyExtractor={listItem => listItem}
            numColumns={1}

          />


      </View>
    );
  }
}
