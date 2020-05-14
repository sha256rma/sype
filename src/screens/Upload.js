import React, {useState, useContext} from 'react';
import {
  Image,
  PixelRatio,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  SafeAreaView,
} from 'react-native';
import {Button, TextInput, ToggleButton} from 'react-native-paper';
import ImagePicker from 'react-native-image-picker';
import {AuthContext} from '../navigation/AuthNavigator';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import RNFetchBlob from 'rn-fetch-blob';
import {uniqueId} from '@common/functions';
import {useNavigation} from '@react-navigation/native';

export default function SearchScreen() {
  const user = useContext(AuthContext);
  const [avatarSource, setAvatarSource] = useState(null);
  const [caption, setCaption] = useState('');
  const {navigate} = useNavigation();

  function selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response.uri);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = null;

        if (Platform.OS === 'ios') {
          source = {uri: response.uri.replace('file:', '')};
        } else {
          source = {uri: response.uri};
        }

        setAvatarSource(source);
      }
    });
  }

  function onSubmit() {
    const image = avatarSource.uri;
    let imageId = uniqueId();
    const Blob = RNFetchBlob.polyfill.Blob;
    const fs = RNFetchBlob.fs;
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
    window.Blob = Blob;
    let uploadBlob = null;
    const imageRef = storage()
      .ref(`Image/${user.uid}`)
      .child(imageId + '.png');
    let mime = 'image/png';

    fs.readFile(image, 'base64')
      .then(data => {
        return Blob.build(data, {type: `${mime};BASE64`});
      })
      .then(blob => {
        uploadBlob = blob;
        console.log(uploadBlob._ref);
        return imageRef.putFile(uploadBlob._ref, {contentType: mime});
      })
      .then(() => {
        uploadBlob.close();
        return imageRef.getDownloadURL();
      })
      .then(uri => {
        processUpload(uri);
      })
      .catch(error => {
        console.log('Error when uploading image to database', error);
      });
  }

  function processUpload(uri) {
    const ref = firestore().collection('posts');

    ref
      .add({
        uid: user.uid,
        username: user.email.slice(0, user.email.indexOf('@')),
        image: uri,
        caption,
        dateCreated: Math.floor(Date.now() / 1000),
        hearts: 0,
        allowScreenshot: true,
        comments: [],
      })
      .then(() => {
        console.log('posted item!');
        setAvatarSource(null);
        setCaption('');
        navigate('Feed');
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topLogoBar}>
        <Text style={styles.logoText}>Sype</Text>
      </View>

      <TouchableOpacity
        onPress={selectPhotoTapped}
        testID="select_photo"
        style={[styles.avatar, styles.avatarContainer]}>
        {avatarSource === null ? (
          <Text>Select a Photo</Text>
        ) : (
          <Image style={styles.avatar} source={avatarSource} />
        )}
      </TouchableOpacity>

      <View style={{flexDirection: 'row'}}>
        <TextInput
          testID="upload-text-box"
          label="Caption"
          mode="outlined"
          value={caption}
          onChangeText={text => setCaption(text)}
          style={{
            borderRadius: 10,
            width: '85%',
            alignSelf: 'center',
            marginBottom: 10,
            marginTop: 10,
          }}
        />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Button
          testID="upload-post-button"
          mode="contained"
          onPress={onSubmit}
          style={{
            borderRadius: 10,
            width: '85%',
            alignSelf: 'center',
            justifyContent: 'center',
            marginBottom: 10,
            marginTop: 10,
            backgroundColor: '#bb86fc',
          }}>
          Post
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121',
  },
  avatarContainer: {
    borderColor: '#03dac6',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#018786',
    height: '70%',
    width: '94%',
    borderRadius: 10,
  },
  topLogoBar: {
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#6200ee',
    marginBottom: '3%',
    width: '100%',
  },
  logoText: {
    fontFamily: 'Georgia',
    color: 'white',
    padding: '3%',
    fontSize: 22,
  },
});
