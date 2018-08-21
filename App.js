/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * 
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
//import { Worker } from 'react-native-workers';

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
  wrapper: {
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 50,
    color: 'grey',
    fontFamily: 'Arial'
  }
});

var LoacalURLs = new Array(
  "file:///android_asset/web/Benz/index.html"
  ,"file:///android_asset/web/einvite/index.html"
  ,"https://gz.kangyun3d.com/projects/VRfullvideo/"
);

var CurIndex = 0;

export default class App extends Component/*<Props>*/ {
  render() {
    return (
      Immersive.on(),
      Immersive.setImmersive(true),
      <SwiperView />
    );
  }
}
class SwiperView extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render(){
    onPressPrevButton = ()=>{
      CurIndex--;
      if(CurIndex<0){
        CurIndex=LoacalURLs.length-1;
      }
      //alert(CurIndex +"==="+LoacalURLs[CurIndex]);
      this.refs.MyWebView.setState({
        mCurURl:LoacalURLs[CurIndex]
      });
    }
    onPressNextButton =()=>{
      CurIndex++;
      if(CurIndex>=LoacalURLs.length){
        CurIndex=0;
      }
      //alert(CurIndex +"==="+LoacalURLs[CurIndex]);
      this.refs.MyWebView.setState({
        mCurURl:LoacalURLs[CurIndex]
      });
    }
    return(
      <Swiper 
      style={styles.wrapper} 
      showsButtons={true} 
      prevButton={<Text style={styles.buttonText}
                        onPress={onPressPrevButton}>‹</Text>} 
      nextButton={<Text style={styles.buttonText}
                        onPress={onPressNextButton}>›</Text>} 
      scrollEnabled={false} 
      //onIndexChanged={onPressButton}
      showsPagination={false}>
        <View style={styles.slide}>
          <CusormWebView ref={"MyWebView"}/>
        </View>
        {/* <View style={styles.slide}>
          <CusormWebView showURL={'http://gz.kangyun3d.com/projects/a9ba3279488e4cc28cbd998d56442b6d/'}/>
        </View>
        <View style={styles.slide}>
          <CusormWebView showURL={'https://gz.kangyun3d.com/models/models/2072ffd0baee400794af828092aac49a/index.html'}/>
        </View> */}
      </Swiper>
    );
  }
}

class CusormWebView extends Component{
  constructor(props){
    super(props);
    this.state = {
        mCurURl:LoacalURLs[CurIndex]
    }
    //this.Onlywebview=React.createRef();
  }

  render(){
    var tShowURL = this.state.mCurURl;
    // let WhenLoadWebView = ()=>{
    //   //var e = document.createEvent('MouseEvents'); e.initEvent('click', true, true);document.querySelector('.landing').dispatchEvent(e);
    //   window.prefetchedData["embedOptions"] = {"preload": true,"autostart": true}
    // }
    // var injectJavaScript = this.props.injectJavaScript;
    // let WhenChangeWebViewPage = ()=>{
    //   alert("找到了");
    // }
    let BeforeLoadWebView = ""//'window.prefetchedData["embedOptions"] = {"preload": true,"autostart": true}';
    //+"var e = document.createEvent('MouseEvents'); e.initEvent('click', true, true);document.querySelector('.landing').dispatchEvent(e);"
    //+"var a = setTimeout(function() {var e = document.createEvent('MouseEvents'); e.initEvent('click', true, true);document.querySelector('.icon-ion-close-round-icon').dispatchEvent(e);},100);";
    return(
      <View style={{width:'100%',height:'100%'}}>
        <View style={{width:'100%',height:'100%'}}>
          <WebView 
          ref={"Onlywebview"}
          scrollEnabled = {false}
          source={{uri: tShowURL}}
          mediaPlaybackRequiresUserAction={false}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          injectedJavaScript={BeforeLoadWebView}
          allowUniversalAccessFromFileURLs={true}
          geolocationEnabled={true}
          allowsInlineMediaPlayback={true}
          style={{width:'100%',height:'100%'}}/>
        </View>
      </View>
    );
  }
}