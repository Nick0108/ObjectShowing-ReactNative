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
  wrapper: {
  },
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
      //WebViewbase
      <SwiperView />
    );
  }
}
var webviewRefs = [];
class SwiperView extends Component{
  constructor(props){
    super(props);
    this.state = {
      
    }
  }
  render(){
    onPressButton = (index)=>{
      // var str = '';
      // for(var i=0;i<webviewRefs.length;i++){
      //   str += typeof(webviewRefs[i])+",";
      // }
      // alert(str);
      // webviewRefs[index].injectJavaScript();
      //(func)=>{this.myWebview.injectJavaScript(func);}
    }
    return(
      <Swiper style={styles.wrapper} showsButtons={true} scrollEnabled={false} showsPagination={false} onIndexChanged={onPressButton}>
        <View style={styles.slide}>
          <CusormWebView showURL={'http://gz.kangyun3d.com/projects/a9ba3279488e4cc28cbd998d56442b6d/'}/>
        </View>
        <View style={styles.slide}>
          <CusormWebView showURL={'https://gz.kangyun3d.com/models/models/2072ffd0baee400794af828092aac49a/index.html'}/>
        </View>
        <View style={styles.slide}>
          <CusormWebView showURL={'https://gz.kangyun3d.com/models/models/dinosaur1/index.html'}/>
        </View>
      </Swiper>
    );
  }
}

class CusormWebView extends Component{
  constructor(props){
    super(props);
    this.state = {
      active:false
    }
  }
  render(){
    var tShowURL = this.props.showURL;
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
          source={{uri: tShowURL}}
          mediaPlaybackRequiresUserAction={false}
          //ref={webview => {this.myWebview = webview;this.myWebview.injectJavaScript=injectJavaScript}} 
          // onLoadStart={()=>{
          //    this.myWebview.injectJavaScript(WhenChangeWebViewPage);
          // }}
          injectedJavaScript={BeforeLoadWebView}
          style={{width:'100%',height:'100%'}}/>
        </View>
      </View>
    );
  }
}