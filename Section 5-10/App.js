/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions
} from 'react-native';
import Header from './component/Common/Header';
import firebase from 'firebase';
import LoginForm from './component/LoginForm';
import Button from './component/Common/Button';
import Spinner from './component/Common/Spinner';

// var {width, height} = Dimensions.get()
export default class App extends Component {
  state = { isLogged: null }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyB52XmoS-3fDBIqBs-EVult-jhqCGKhyVY",
      authDomain: "authentication-af061.firebaseapp.com",
      databaseURL: "https://authentication-af061.firebaseio.com",
      projectId: "authentication-af061",
      storageBucket: "authentication-af061.appspot.com",
      messagingSenderId: "945869558089"
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          this.setState({isLogged: true });
      } else {
        this.setState({isLogged: false });
      }
    })
  }



  renderContent() {

    switch (this.state.isLogged) {
      case true:
        return (
          <View style={{height:60, paddingTop: 20}}>
            <Button onPress={() => {
              firebase.auth().signOut()
            }} >
              <Text>Log Out</Text>
            </Button>
          </View>
      )
      case false:
        return (
          <LoginForm />
        ) 
      case null: 
      return (
        <View style={{ flex: 1 }}>
          <Spinner size='large' ></Spinner>
          </View>
      )
    }

    if (this.state.isLogged) {
      return (
        <View style={{height:60, paddingTop: 20}}>
          <Button onPress={this.logOutAction()} >
            <Text>Log Out</Text>
          </Button>
        </View>
      )
    }
    return (
      <LoginForm />
    )
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Header headerText='Authenticate' />
        {this.renderContent()}
      </View>
    );
  }
}
