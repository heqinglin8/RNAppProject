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
var Header = require('./header');
var Item = require('./item');
var Importantnews = require('./importantnews');

var News = React.createClass({
   render:function(){
     var navigator = this.props.navigator;
    //  console.log('navigator: '+Object.keys(navigator));
     return (
   <ScrollView style = {styles.outCotainer}>
      <Header/>
      <Item title = '勇士战胜雷霆赢得西部冠军'/>
      <Item title = '勇士战胜雷霆赢得西部冠军'/>
      <Item title = '勇士战胜雷霆赢得西部冠军'/>
      <Item title = '勇士战胜雷霆赢得西部冠军'/>
      <Item title = '勇士战胜雷霆赢得西部冠军'/>
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
     );
   },

});

//样式
var styles = StyleSheet.create({
   //最外层布局
   outCotainer: {
     flexDirection: 'column',
    //  justifyContent: 'flex-start',
   },

});

module.exports = News;
