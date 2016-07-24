'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  ToastAndroid,
} = React;
 var News = require('./news/news');
 var List = require('./navdemo/list.js');
var IntentUtil = require('./utils/IntentUtil');
var IntentAndroid = require('./utils/IntentAndroid');
var SearchApp = require('./textinput/SearchApp');
//ES6
import ListViewComp from './car/ListViewComp';
import HomeUI_movie from './car/HomeUI_movie';
import HomeUI_sectionheader from './car/HomeUI_sectionheader';
import WebView1 from './webview/webview1';



 var navigator;
var Home = React.createClass({

   render:function(){
    navigator =  this.props.navigator;
     return (
     <View>
        <View style = {styles.cotainer}>
                <View style = {[styles.item,styles.center]}>
                <Text style = {styles.font} onPress = {this.goTo.bind(this,1)}>新  闻</Text>
                </View>

                <View style = {[styles.item,styles.lineLeftRight]}>
                    <View style = {[styles.flex,styles.center,styles.lineCenter]}>
                    <Text style = {styles.font} onPress = {this.goTo.bind(this,2)}>导  航</Text>
                    </View>
                    <View style = {[styles.flex,styles.center]}>
                    <Text style = {styles.font} onPress = {this.goTo.bind(this,3)}>吊起activity</Text>
                    </View>
                </View>

                <View style = {styles.item}>
                    <View style = {[styles.flex,styles.center,styles.lineCenter]}>
                    <Text style = {styles.font} onPress = {this.goTo.bind(this,4)}>搜  索</Text>
                    </View>
                    <View style = {[styles.flex,styles.center]}>
                    <Text style = {styles.font} onPress = {this.goTo.bind(this,5)}>webview</Text>
                    </View>
                </View>
        </View>

        <View style = {styles.cotainer}>
                <View style = {[styles.item,styles.center]}>
                <Text style = {styles.font} onPress = {this.goTo.bind(this,6)}>列  表</Text>
                </View>

                <View style = {[styles.item,styles.lineLeftRight]}>
                    <View style = {[styles.flex,styles.center,styles.lineCenter]}>
                    <Text style = {styles.font} onPress = {this.goTo.bind(this,7)}>电  影</Text>
                    </View>
                    <View style = {[styles.flex,styles.center]}>
                    <Text style = {styles.font} onPress = {this.goTo.bind(this,8)}>HomeUI_header</Text>
                    </View>
                </View>

                <View style = {styles.item}>
                    <View style = {[styles.flex,styles.center,styles.lineCenter]}>
                    <Text style = {styles.font} onPress = {this.goTo.bind(this,9)}>搜  索</Text>
                    </View>
                    <View style = {[styles.flex,styles.center]}>
                    <Text style = {styles.font}>客栈公寓</Text>
                    </View>
                </View>
        </View>
  </View>    
     );
   },

   goTo:function(index){
        //这是以前通过字符串来判断动作，下面用switch代替
       // console.log('index',index);
       if(navigator){
         switch(index){
             case 1:
                 navigator.push({
                     name: 'News',
                     component: News,
                     //这里多出了一个 params 其实来自于<Navigator 里的一个方法的参数...
                     params: {
                         title: '新  闻'
                     }
                 });
             case 2:
                 navigator.push({
                     name: 'List',
                     component: List,
                     //这里多出了一个 params 其实来自于<Navigator 里的一个方法的参数...
                     params: {
                         title: '导  航'
                     }
                 });
                 break;
             case 3:
                 // IntentUtil.intentTo();
                 //  IntentUtil.OpentActivityByUrl("autohome://splashActivity");
                 IntentAndroid.openURL("autohomeinside://findcar");
                 break;
             case 4:
                 navigator.push({
                     name: 'SearchApp',
                     component: SearchApp,
                     params: {
                         title: '搜  索'
                     }
                 });
                 break;
                 case 5:
                 navigator.push({
                     name: 'WebView1',
                     component: WebView1,
                     params: {
                         title: '百  度'
                     }
                 });
                 break;
             case 6:
                 navigator.push({
                     name: 'ListViewComp',
                     component: ListViewComp,
                     params: {
                         title: '列  表'
                     }
                 });
                 break;
                 case 7:
                 navigator.push({
                     name: 'HomeUI_movie',
                     component: HomeUI_movie,
                     params: {
                         title: '电  影'
                     }
                 });
                 break;
                 case 8:
                  navigator.push({
                     name: 'HomeUI_sectionheader',
                     component: HomeUI_sectionheader,
                     params: {
                         title: 'header list'
                     }
                 });
                 break;
                
         }

     }
   },

});

//样式
var styles = StyleSheet.create({
   //第一行布局
  cotainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height:84,
    backgroundColor:'#ff0067',
    borderRadius:10,
    padding:2,
    marginTop:25,
    marginLeft:5,
    marginRight:5,
  },

  item: {
    flex:1,
    height:80,
  },

  center:{
    justifyContent:'center',
    alignItems:'center',
  },
  flex:{
    flex:1,
  },
  lineLeftRight:{
   borderColor:'#fff',
  //  borderLeftWidth:1/PixelRatio.get(),
  //  borderRightWidth:1/PixelRatio.get(),
   borderLeftWidth:1,
   borderRightWidth:1,
  },
  lineCenter:{
    borderColor:'#fff',
    // borderBottomWidth:1/PixelRatio.get(),
    borderBottomWidth:1,
  },
  font:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
  }

});

module.exports = Home;