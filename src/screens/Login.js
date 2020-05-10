import React, { Component, useState } from 'react';
import {
  Platform,
  StyleSheet,
  UIManager,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  LayoutAnimation,
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth, { firebase } from '@react-native-firebase/auth';
if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Props = {};

const tag = 'FIREBASE';
export default class Login extends Component<Props> {
  state = {
    isLogin: false,
    authenticated: false,
  };
  componentDidMount() {
    this.__isTheUserAuthenticated();
  }

  __isTheUserAuthenticated = () => {
    let user = firebase.auth().currentUser;
    if (user) {
      console.log(tag, user);

      this.setState({ authenticated: true });
    } else {
      this.setState({ authenticated: false });
    }
  };

  render() {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    return (
      <View style={{ flex: 1, backgroundColor: '#212121'}}>
        {this.state.authenticated ? (
          <View style={styles.containerStyle}>
            <Text style={{ textAlign: 'center', color: '#bb86fc' }}>
              email {firebase.auth().currentUser.email}{' '}
            </Text>

            <View style={styles.loginButtonContainerStyle}>
              <TouchableOpacity
                style={styles.loginButtonStyle}
                onPress={async () => {
                  await firebase.auth().signOut();
                }}>
                <Text style={styles.loginButtonTextStyle}> Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
            <View style={{ flex: 1 }}>
              {this.state.isLogin ? <LoginComponent /> : <SigInComponent />}

              <View style={styles.loginButtonContainerStyle}>
                <TouchableOpacity
                  style={styles.loginButtonStyle}
                  onPress={() =>
                    this.setState(state => ({ isLogin: !state.isLogin }))
                  }>
                  <Text style={styles.bottomMessageStyle}>
                    {' '}
                    {this.state.isLogin
                      ? 'New? Create account.'
                      : 'Already have account? Log In'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
      </View>
    );
  }
}
const baseMargin = 5;
const doubleBaseMargin = 10;
const blue = '#ff0000';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'space-around',
  },
  headerContainerStyle: {
    flex: 0.2,
    alignItems: 'center',
  },
  headerTitleStyle: {
    color: '#bb86fc',
    fontSize: 30,
    fontWeight: 'bold',
  },
  formContainerStyle: {
    paddingHorizontal: doubleBaseMargin,
    justifyContent: 'space-around',
  },
  textInputStyle: {
    height: 60,
    marginVertical: baseMargin,
    borderRadius: 6,
    paddingHorizontal: doubleBaseMargin,
    backgroundColor: 'white',
    borderColor: '#888',
    borderWidth: 1,
    color: 'black'
  },
  signInButtonContainerStyle: {
    flex: 0.3,
    marginTop: doubleBaseMargin,
    alignItems: 'flex-end',
    paddingHorizontal: baseMargin,
  },
  signInButtonStyle: {
    width: 130,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 130 / 4,
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  signInButtonTextStyle: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: baseMargin,
    color: '#3700bc'
  },
  signInWithGoogleButtonContainerStyle: {
    flex: 0.2,
    paddingHorizontal: doubleBaseMargin,
  },
  signInWithGoogleButtonStyle: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 130 / 4,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  signInWithGoogleButtonTextStyle: {
    color: 'black',
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: 'bold',

    marginHorizontal: baseMargin,
  },
  errorLabelContainerStyle: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorTextStyle: {
    color: '#b00020',
    textAlign: 'center',
  },
  loginButtonContainerStyle: {
    flex: 0.2,
    paddingHorizontal: baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonStyle: {
    alignItems: 'center',
  },
  loginButtonTextStyle: {
    color: blue,
  },
  bottomMessageStyle:{
    color: '#03DAC6'
  }
});

const __filterError = error => {
  let message = '';
  let index = error.indexOf(']');
  message = error.substr(index + 1, error.length - 1);

  return message;
};

const __isValidEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
const LoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);
  const __doLogin = () => {
    if (!email) {
      setError('Email required *');
      setValid(false);
      return;
    } else if (!password && password.trim() && password.length > 6) {
      setError('Weak password, minimum 5 characters');
      setValid(false);
      return;
    } else if (!__isValidEmail(email)) {
      setError('Invalid Email');
      setValid(false);
      return;
    }
    let signInRequestData = {
      email,
      password,
    };

    __doSingIn(email, password);
  };

  const __doSingIn = async (email, password) => {
    try {
      let response = await auth().signInWithEmailAndPassword(email, password);
      if (response && response.user) {
        Alert.alert('Success ✅', 'Logged successfully');
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={{ flex: 0.2 }}>
        {!!fetching && <ActivityIndicator color={blue} />}
      </View>
      <View style={styles.headerContainerStyle}>
        <Text style={styles.headerTitleStyle}> Log In </Text>
      </View>
      <View style={styles.formContainerStyle}>
        <TextInput
          label={'Email'}
          autoCapitalize={false}
          keyboardType="email-address"
          style={styles.textInputStyle}
          placeholder="Mail address"
          onChangeText={text => {
            // let isValid = this.state.isValid;
            // isValid["email"] = !this.__isValidEmail(text);
            setValid(__isValidEmail(text));
            setEmail(text);
          }}
          error={isValid}
        />
        <TextInput
          label={'Password'}
          secureTextEntry
          autoCapitalize={false}
          style={styles.textInputStyle}
          placeholder="Password"
          error={isValid}
          onChangeText={text => setPassword(text)}
        />
      </View>
      {error ? (
        <View style={styles.errorLabelContainerStyle}>
          <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
      ) : null}

      <View style={styles.signInButtonContainerStyle}>
        <TouchableHighlight
          style={styles.signInButtonStyle}
          onPress={__doLogin}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text style={styles.signInButtonTextStyle}>Continue</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const SigInComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState('');
  const [isValid, setValid] = useState(true);
  const __doSignUp = () => {
    if (!email) {
      setError('Email required *');
      setValid(false);
      return;
    } else if (!password && password.trim() && password.length > 6) {
      setError('Weak password, minimum 5 chars');
      setValid(false);
      return;
    } else if (!__isValidEmail(email)) {
      setError('Invalid Email');
      setValid(false);
      return;
    }

    __doCreateUser(email, password);
  };

  const __doCreateUser = async (email, password) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      if (response && response.user) {
        // add user to firestore
        let userData = {
          uid: response.user._user.uid,
          email: response.user._user.email,
          totalPosts: 0,
          followers: 0,
          following: 0
        }
        await firestore().collection('users').doc(userData.uid).set(userData);

        Alert.alert('Success ✅', 'Account created successfully');

      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <SafeAreaView style={styles.containerStyle}>
      <View style={{ flex: 0.2 }}>
        {!!fetching && <ActivityIndicator color={blue} />}
      </View>
      <View style={styles.headerContainerStyle}>
        <Text style={styles.headerTitleStyle}> Sign Up </Text>
      </View>
      <View style={styles.formContainerStyle}>
        <TextInput
          label={'Email'}
          autoCapitalize={false}
          keyboardType="email-address"
          style={styles.textInputStyle}
          placeholder="Mail address"
          onChangeText={text => {
            setError;
            setEmail(text);
          }}
          error={isValid}
        />

        <TextInput
          label={'Password'}
          secureTextEntry
          autoCapitalize={false}
          style={styles.textInputStyle}
          placeholder="Password"
          error={isValid}
          onChangeText={text => setPassword(text)}
        />
      </View>
      {error ? (
        <View style={styles.errorLabelContainerStyle}>
          <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
      ) : null}
      <View style={styles.signInButtonContainerStyle}>
        <TouchableHighlight
          style={styles.signInButtonStyle}
          onPress={__doSignUp}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Text style={styles.signInButtonTextStyle}>Continue</Text>
          </View>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
