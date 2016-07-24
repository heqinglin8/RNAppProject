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
var Util = require('../utils/Util');
var SearchView = React.createClass({

   getInitialState:function(){
     return {
       show:false,
     }
   },
   render:function(){
     return (
    <View>
          <View style = {[styles.cotainer]}>
             <View style = {[styles.input,styles.flex]}>
                 <TextInput
                 returnKeyType='search'
                 placeholder='请输入你要查询的内容'
                 onEndEditing = {this.hide.bind(this,this.state.value)}
                 value = {this.state.value}
                 onChangeText = {this.getValue}
                 />
             </View>
             <TouchableOpacity style ={[styles.btnR,styles.center]}>
               <Text style = {styles.font} onPress={this.hide.bind(this,this.state.value)}>搜  索</Text>
             </TouchableOpacity>
          </View>
        {this.state.show?
                <View style = {styles.result}>
                <View style = {styles.item}>
                <Text style = {styles.fontSmall} onPress = {this.hide.bind(this,'上的大富大贵放电饭锅')}>上的大富大贵放电饭锅</Text>
                </View>
                <View style = {styles.item}>
                <Text style = {styles.fontSmall} onPress = {this.hide.bind(this,'我爱你呀哈哈哈哈')}>我爱你呀哈哈哈哈</Text>
                </View>
                <View style = {styles.item}>
                <Text style = {styles.fontSmall} onPress = {this.hide.bind(this,'地方法规电话')}>地方法规电话</Text>
                </View>
                <View style = {styles.item}>
                <Text style = {styles.fontSmall} onPress = {this.hide.bind(this,'发给互粉互粉工具')}>发给互粉互粉工具</Text>
                </View>
                <View style = {styles.item}>
                <Text style = {styles.fontSmall} onPress = {this.hide.bind(this,'过好几个环境访哈时问我')}>过好几个环境访哈时问我</Text>
                </View>
                <View style = {styles.item}>
                <Text style = {styles.fontSmall} onPress = {this.hide.bind(this,'和各家各户家的法规规范的股份')}>和各家各户家的法规规范的股份</Text>
                </View>
                <View style = {styles.item}>
                <Text style = {styles.fontSmall} onPress = {this.hide.bind(this,'热特儿童尔特尔特人')}>热特儿童尔特尔特人</Text>
                </View>
                <View style = {styles.item}>
                <Text style = {styles.fontSmall} onPress = {this.hide.bind(this,'热特儿童尔特尔特人')}>热特儿童尔特尔特人</Text>
                </View>

                </View>
                : null
              }
  </View>
     );
   },
   getValue:function(text){
        console.log("getValue",text);
        var value = text;
        var show = value!="" && value!= null;
        this.setState({
          show:show,
          value:value,
        });
      },
      hide:function(text){
        console.log("hide",text);
        var value = text;
        this.setState({
          show:false,
          value:value,
        });
      },
      chooseVal:function(index){
        if(index == 1)
                return '哈哈哈';
                else if(index == 2)
                        return '嘻嘻嘻';
                        else if(index == 3)
                                return '啦啦啦';
                                else
                                  return index+'';
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
      marginLeft:-6,
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
  result:{
     marginTop:1,
     marginRight:5,
     marginLeft:5,
     borderColor:'#ccc',
     borderTopWidth:Util.pixel,
  },
  item:{
     marginTop:1,
     marginRight:10,
     marginLeft:10,
     height:60*Util.pixel,
     borderColor:'#ccc',
     borderBottomWidth:Util.pixel,
     justifyContent:'center',
  },
  fontSmall:{
    color:'#ccc',
    fontSize:16,
    fontWeight:'bold',
  },

});

module.exports = SearchView;
// AppRegistry.registerComponent('AwesomeProject',() => App);
