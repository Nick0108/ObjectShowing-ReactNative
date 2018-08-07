/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  WebView,
  StatusBar,
  AppRegistry,
  TouchableHighlight,
  Button
} from 'react-native';


const styles = StyleSheet.create({
  
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default class App extends Component/*<Props>*/ {
  render() {
    return (
      Immersive.on(),
    );
  }
  onPressLearnMore = ()=>{
    alert('ok');
  }
}


