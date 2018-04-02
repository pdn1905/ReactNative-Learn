/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
  View, StatusBar
} from 'react-native';
import Header from './Components/Header';
import AlbumList from './Components/AlbumList';

const AppView = () => (
  <View style={{ flex: 1 }}>
   <StatusBar
     backgroundColor="blue"
     barStyle="light-content"
   />
    <Header headerText='Albums' />
    <AlbumList />
  </View>
);

export default AppView;
