'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
    ToastAndroid,
} = React;
var images = [
  'http://a.hiphotos.baidu.com/image/pic/item/7dd98d1001e9390191637f187eec54e736d196b7.jpg',
  'http://icon.nipic.com/BannerPic/20160505/home/20160505091610.jpg',
  'http://pic100.nipic.com/file/20160603/22428631_122929382000_2.jpg',
  'http://pic100.nipic.com/file/20160606/22428631_175434508000_2.jpg',
  'http://pic100.nipic.com/file/20160605/22428631_140250962000_2.jpg',
  'http://pic100.nipic.com/file/20160603/22428631_122921972000_2.jpg',
  'http://pic93.nipic.com/file/20160329/19838027_193329749000_2.jpg',
  'http://pic94.nipic.com/file/20160409/11748973_165443493001_2.jpg',
  'http://pic94.nipic.com/file/20160409/11748973_103545564000_2.jpg',
];

var ImageScoll = React.createClass({

  getInitialState:function(){
    return {
      imgs:images,
      index:0,
    };
  },
   render:function(){
     return (
       <View>
          <Image
          style ={styles.img}
          source = {{uri:this.state.imgs[this.state.index]}}
          resizeMode='contain'
          />

          <View style = {[styles.flex,styles.btn]}>
              <TouchableOpacity style ={[styles.center,styles.btnLeft]}>
                <Text style = {styles.fontFFF} onPress={this.pre}>上一张</Text>
              </TouchableOpacity>
              <View style = {styles.right}>
                <TouchableOpacity style ={[styles.center,styles.btnRight]}>
                  <Text style = {styles.fontFFF} onPress={this.next}>下一张</Text>
                </TouchableOpacity>
              </View>
          </View>
       </View>
     );
   },

  pre:function(){
    var index = this.state.index;
    console.log('pre',index);
    index--;
    if(index>=0){
      this.setState({
        index:index
      });
    }else{
		alert('已经是第一张了');
      ToastAndroid.show('已经是第一张了',ToastAndroid.LONG);
	}
  },
  next:function(){
    var index = this.state.index;
    console.log('next',index);
    index++;
    if(index<images.length){
      this.setState({
        index:index
      });
    }else{
		// alert('已经是最后一张了');
      ToastAndroid.show('已经是最后一张了',ToastAndroid.LONG);
	}
  },

});

//样式
var styles = StyleSheet.create({
   //第一行布局
  img: {
    width:300,
    height:200,
    alignSelf:'center',
    justifyContent:'center',
  },
  flex:{
    flex:1,
  },
  btn: {
    marginTop:20,
    flexDirection:'row',
  },
  btnLeft: {
    width:100,
    height:50,
    backgroundColor:'#3497ff',
    borderRadius:4,
    marginLeft:40,
  },
  btnRight: {
    width:100,
    height:50,
    backgroundColor:'#3497ff',
    borderRadius:4,
    alignSelf:'flex-end',
    marginRight:40,
  },
  fontFFF:{
    fontSize:17,
    fontWeight:'bold',
    textAlign:'center',
    color:'#fff',
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
  },
  right:{
    flex:1,
    alignItems:'flex-end',
  }
});

 module.exports = ImageScoll;
