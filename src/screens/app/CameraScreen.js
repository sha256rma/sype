import React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView, Image, FlatList, Alert, View, Dimensions, Platform, Linking } from 'react-native';
import { Appbar, Text, IconButton, Button } from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import { RNCamera } from 'react-native-camera';
import FeatherIcon from 'react-native-vector-icons/Feather';

import color from '@misc/color';

const DESIRED_RATIO = "1:1";

class CameraScreen extends React.Component {


  constructor() {
    super();
    this.state = {
      isCameraVisible: false,
      photos: [],
      image_count: 0,
      frontCamera: false,
      flashOn: false,
      heightLeft: Dimensions.get('window').height - Dimensions.get('window').width * .9 - 10,
    };
  }

  componentDidMount() {
    this.setState({
      isCameraVisible: true
    })
  }

  showAlert() {
    if (this.state.photos.length > 12)
      Alert.alert('Overload', 'Reached Maximum Pictures(12)');
  }

  _renderImages = (element) => {
    const { index, item } = element;
    const { heightLeft } = this.state;
    return <Image key={index} source={{ uri: item }} style={{ aspectRatio: 1, height: heightLeft * .15 > 50 ? 50 : heightLeft * .15, marginRight: 5, marginVertical: heightLeft * .025 > 5 ? 5 : heightLeft * .025 }} />;
  }

  cancel = () => {
    this.setState({ photos: [], isCameraVisible: false, image_count: 0 });
    this.props.navigation.goBack()
  }

  takePicture = async (camera) => {
    if (camera && this.state.photos.length < 12) {
      const options = { quality: 0.8, base64: true, fixOrientation: true };
      const data = await camera.takePictureAsync(options);
      this.setState({
        image_count: this.state.image_count + 1
      });
      if (Platform.OS === 'ios') {
        const filename = data.uri.replace('file:', '');
        this.setState({ photos: [...this.state.photos, filename] });
      } else {
        this.setState({ photos: [...this.state.photos, data.uri] });
      }
    }
  }

  done = async () => {
    const { photos } = this.state;
    if (photos.length !== 0) {

      console.log(photos);

      this.props.navigation.navigate("Upload", {
        photos: photos.slice(0, 12)
      })

      this.setState({ isCameraVisible: false, photos: [], image_count: 0 });

    } else {
      Alert.alert("No Images Chosen", "You must have atleast one image!");
    }
  }

  removeImage = () => {
    let photos = [...this.state.photos];
    photos.splice(-1, 1);
    this.setState({ photos: photos, });
    if (this.state.image_count > 0) {
      this.setState({
        image_count: this.state.image_count - 1
      })
    }
  }

  multipleSelect = async () => {
    let images = await ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      maxFiles: 12
    })
    images.forEach((object, index) => {
      images[index] = object.path
    })

    let total_images = images.length + this.state.photos.length;
    if (total_images <= 12) {
      this.setState({ photos: [...this.state.photos, ...images], image_count: this.state.image_count + images.length });
    } else {
      let excessImagesAmount = total_images - 12; //the images that are beyond the 12th element in the array
      let addedImagesAmount = images.length - excessImagesAmount
      this.setState({ photos: [...this.state.photos, ...images.splice(0, addedImagesAmount)], image_count: 12 })
      Alert.alert('Overload', 'Too many images chosen! Maximum 12');
    }
  }

  changeFlash = () => {
    this.setState({ flashOn: !this.state.flashOn });
  }

  changeCameraView = () => {
    this.setState({ frontCamera: !this.state.frontCamera });
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


  render() {
    this.showAlert();
    const { heightLeft } = this.state;

    return (
      <SafeAreaView style={styles.container}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: heightLeft * .15 > 50 ? 50 : heightLeft * .15 }} >
          <IconButton icon="close" color={color.black} size={heightLeft * .1 > 30 ? 30 : heightLeft * .1} onPress={this.cancel} />
          <View style={{ flexDirection: 'row', marginRight: 5 }}>
            <IconButton icon={this.state.flashOn ? 'flash' : 'flash-off'} color={color.black} size={heightLeft * .1 > 30 ? 30 : heightLeft * .1} onPress={this.changeFlash} />
            <IconButton icon='camera-retake' color={color.black} size={heightLeft * .1 > 30 ? 30 : heightLeft * .1} onPress={this.changeCameraView} />
          </View>
        </View>


        <View style={styles.elementsContainer}>
          {
            this.state.isCameraVisible ? (
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
                  type={this.state.frontCamera ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
                  flashMode={this.state.flashOn ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
                  androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'Allow Dype access to your camera to start uploading!',
                    buttonPositive: 'Sure',
                    buttonNegative: 'Cancel',
                  }}
                >
                </RNCamera>
              </View>
            ) : (
                <TouchableOpacity style={{ aspectRatio: 1, backgroundColor: color.black2, justifyContent: 'center', alignItems: 'center' }} onPress={() => this.setState({ isCameraVisible: true })}>
                  <FeatherIcon style={[{ color: color.white }]} size={45} name={'camera'} />
                  <Text style={{ color: color.white }}>Turn on camera</Text>
                </TouchableOpacity>
              )
          }
          <FlatList
            data={this.state.photos}
            renderItem={this._renderImages}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ borderWidth: .5, borderRadius: 10, marginTop: 10, height: heightLeft * .2 > 60 ? 60 : heightLeft * .2, flexDirection: 'row', paddingHorizontal: 10 }}
          />

          <Text style={{ color: color.grey, fontSize: 14, fontWeight: 'bold', alignSelf: 'flex-end', marginHorizontal: 7 }}>{this.state.image_count}/12</Text>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 10 }} >
            <IconButton icon='folder-multiple-image' color={color.black} size={heightLeft * .1 > 30 ? 30 : heightLeft * .1} onPress={this.multipleSelect} />

            <View style={[styles.takePictureButton, { height: heightLeft * .2 > 60 ? 60 : heightLeft * .2, borderRadius: heightLeft * .1 > 30 ? 30 : heightLeft * .1 }]} >
              <IconButton style={{ backgroundColor: color.black }} icon='camera-outline' color={color.white} size={heightLeft * .1 > 30 ? 30 : heightLeft * .1} onPress={() => this.takePicture(this.camera)} />
            </View>

            <IconButton icon='undo' color={color.black} size={heightLeft * .1 > 30 ? 30 : heightLeft * .1} onPress={this.removeImage} />
          </View>
        </View>

        <Button
          disabled={!this.state.image_count > 0}
          icon="check"
          mode="contained"
          color={color.black}
          onPress={this.done}
          style={{ marginHorizontal: '5%', height: heightLeft * .15 > 35 ? 35 : heightLeft * .15, justifyContent: 'center', marginTop: heightLeft * .1 > 40 ? 40 : heightLeft * .1 }}
        >
          CONTINUE
        </Button>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    flex: 1,
  },
  elementsContainer: {
    marginRight: '4%',
    marginLeft: '4%',
  },
  takePictureButton: {
    aspectRatio: 1,
    borderWidth: 6,
    borderColor: color.black,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default CameraScreen;