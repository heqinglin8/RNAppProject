'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  StyleSheet,
} = React;
var SearchView = require('./SearchView');
var ImageScoll = require('../utils/ImageScoll');
var SearchApp = React.createClass({
   render:function(){
     return (
       <View>
       <SearchView style ={styles.search}> </SearchView>
       <ImageScoll style = {styles.top}/>
       </View>
     );
   },


});

//样式
var styles = StyleSheet.create({
   //第一行布局
  search: {
    paddingLeft:5,
    marginLeft:5,
  },
  flex:{
    flex:1,
  },
  top:{
    marginTop:50,
  }

});

// module.exports = SearchApp;

AppRegistry.registerComponent('RNAppProject',() => SearchApp);
