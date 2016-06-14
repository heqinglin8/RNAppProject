'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  ScrollView,
  Text,
  StyleSheet,
  PixelRatio,
} = React;
var Importantnews = require('./importantnews');
var TitleBar = require('./titleBar');
var navigator;

var List = React.createClass({
   render:function(){
    navigator = this.props.navigator;
    //  console.log('navigator: '+Object.keys(navigator));
     return (
  <View>
     <TitleBar title ='列表页' onBack={this.goBack}/>
     <ScrollView style = {styles.outCotainer}>
       <Importantnews news = {[
         '1、柳策行士大夫撒扶桑岛国',
         '2、勇士战胜雷霆赢得西部冠军',
         '3、勇士战胜雷霆赢得西部冠军',
         '4、勇士战胜雷霆赢得西部冠军',
         '5、勇士战胜雷霆赢得西部冠军',
         '6、勇士战胜雷霆赢得西部冠军cbxv勇士战胜雷霆赢得西部冠军cbxv梵蒂冈的风格勇士战胜雷霆赢得西部冠军cbxv梵蒂冈的风格勇士战胜雷霆赢得西部冠军cbxv',
         '7、勇士战胜雷霆赢得西部冠军',
         '8、勇士战胜雷霆赢得西部冠军',
         '8、勇士战胜雷霆赢得西部冠军',
         '8、勇士战胜雷霆赢得西部冠军',
         '8、勇士战胜雷霆赢得西部冠军',
         '8、勇士战胜雷霆赢得西部冠军',
       ]} navigator = {navigator}/>
     </ScrollView>
  </View>
     );
   },

   goBack:function(){
     if(navigator){
       console.log('goback','关闭');
       console.log('navigator: '+Object.keys(navigator));
       navigator.pop();
     }
   },

});

//样式
var styles = StyleSheet.create({
   //最外层布局
   outCotainer: {
     flexDirection: 'column',
    //  justifyContent: 'flex-start',
   },
   flex:{
     flex:1,
   },

});

module.exports = List;
