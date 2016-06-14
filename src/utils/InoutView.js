'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} = React;
var SearchView = React.createClass({

   render:function(){
     return (
        <View style = {[styles.cotainer]}>
           <View style = {styles.flex}>
               <TextInput
               style = {styles.input}
               returnKeyType='search'
               placeholder='请输入你要查询的内容'
               onChange = {this.onChange}
               onChangeText = {this.onChangeText}
               />
           </View>
           <TouchableOpacity style ={[styles.btnR,styles.center]}>
             <Text style = {styles.font}>搜  索</Text>
           </TouchableOpacity>

        </View>
     );
   },

   onChange:function(text){
     console.log("onChange",text);
   },

   onChangeText:function(text){
     console.log("onChangeText",text);
   },
   finish:function(text){
     console.log("onEndEditing",'输入结束');
     this.setState({
       show:true,
       value:text,
     });
   },

});

//样式
var styles = StyleSheet.create({
   //第一行布局
   //style = {styles.input}
  cotainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
  },

  flex:{
    flex:1,
  },
  input:{
    height:45,
    borderWidth:1,
    borderColor:'#ccc',
    borderRadius:4,
  },
  btnR:{
    width:70,
    height:45,
    backgroundColor:'#3497ff',
    borderRadius:4,
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
  },
  font:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
  },

});

module.exports = SearchView;
// AppRegistry.registerComponent('AwesomeProject',() => App);
