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
import { Immersive } from 'react-native-immersive'
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  radiasTouchButton:{
    width:80,
    height:80,
    backgroundColor:'#D3D3D3',
    alignItems:'center',
    justifyContent:'center',
    borderColor:'green',
    borderStyle:'solid',
    borderRadius:60,
    margin:2,
    opacity:0.5,
  },
  touchButtonText:{
    textAlign:'center',
    fontSize:50,
    color:'#ffffff',
  },
});

export default class App extends Component/*<Props>*/ {
  render() {
    return (
      Immersive.on(),
      <SwiperView />
    );
  }
  onPressLearnMore = ()=>{
    alert('ok');
  }
}



class SwiperView extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <Swiper style={styles.wrapper} showsButtons={true} scrollEnabled={false} showsPagination={false}>
        <View style={styles.slide}>
          <CusormWebView showURL={'http://gz.kangyun3d.com/projects/a9ba3279488e4cc28cbd998d56442b6d/'}/>
        </View>
        <View style={styles.slide}>
          <CusormWebView showURL={'https://gz.kangyun3d.com/models/models/2072ffd0baee400794af828092aac49a/index.html'}/>
        </View>
      </Swiper>
    );
  }
}

// function AfterLoadWebView(){
//   document.querySelector('.landing').click();
// }

class CusormWebView extends Component{
  constructor(props){
    super(props);
    this.state = {
      curURL:''
    }
  }
  
  render(){
    
    );
  }
}
