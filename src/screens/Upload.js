import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../navigation/AuthNavigator';
import { RNCamera } from 'react-native-camera';
import { Button } from 'react-native-paper';


class UploadScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      image: '',
      caption: ''
    }
  };

  logOut = async () => {
    try {
      await auth().signOut();
    } catch (e) {
      console.error(e);
    }
  }

  takePicture = async (camera) => {
    const options = { quality: 0.8, base64: true, fixOrientation: true };
    const data = await camera.takePictureAsync(options);
    const filename = data.uri.replace('file:', '');
    this.setState({ image: filename });
  }

  prepareRatio = async () => {
    if (Platform.OS === 'android' && this.cam) {
      const ratios = await this.cam.getSupportedRatiosAsync();

      // See if the current device has your desired ratio, otherwise get the maximum supported one
      // Usually the last element of "ratios" is the maximum supported ratio
      const ratio = ratios.find((ratio) => ratio === DESIRED_RATIO) || ratios[ratios.length - 1];

      this.setState({ ratio });
    }
  }

  renderImage = () => {
    if (this.state.image !== '') {
      return (<Image source={{ uri: this.state.image }} style={{ width: '100%', aspectRatio: 1 }} />);
    } else {
      return (
        <View style={{ aspectRatio: 1 }}>
          <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style={{ aspectRatio: 1 }}
            onCameraReady={this.prepareRatio}
            ratio={'1:1'}
            captureAudio={false}
            pendingAuthorizationView={null}
            cameraProps={{ captureAudio: false }}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'Allow Dype access to your camera to start uploading!',
              buttonPositive: 'Sure',
              buttonNegative: 'Cancel',
            }}
          />
        </View>
      )
    }
  }

  onPost = () => {
    setTimeout(() => Alert.alert('Your post was successful!'), 1000);

  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Upload Screen</Text>
        {this.renderImage()}
        <TouchableOpacity
          disabled={this.state.image !== ''}
          style={{ width: 60, height: 60, borderRadius: 30, alignSelf: 'center', marginTop: 10, backgroundColor: 'purple' }}
          onPress={() => this.takePicture(this.camera)}
        />
        <Text>Write your caption!</Text>
        <TextInput
          onChangeText={text => this.setState({ caption: text })}
          value={this.state.caption}
          style={{ width: '100%', height: 70, borderWidth: 1 }}
        />
        <Button
          icon='check'
          mode='contained'
          style={{ backgroundColor: 'purple', marginTop: 10 }}
          onPress={this.onPost}
        >
          Post!
        </Button>
      </SafeAreaView>
    );


  }

}

export default UploadScreen;

