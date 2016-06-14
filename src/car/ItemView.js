'use strict';
//Get请求
var React = require('react-native');
var {
  AppRegistry,
  Image,
  ListView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} = React;

var ItemView = React.createClass({

   //初始化的回调
  //  getInitialState : function(){
  //     return {
  //      return this.renderLoading();
  //     }
  //  },

   render:function(){
     return (
      // _renderRow();
      // renderLoading();
      <Text style={styles.title}>title</Text>
     );
   },

renderLoading:function(){
  return(
    <Text> 正在加载数据... </Text>
  );
},

_renderRow:function() {
    return (
      <TouchableHighlight underlayColor="rgba(34,28,32,0.5)">
  <View>
        <View style={styles.container} >
          <Image
            source={{uri: 'http://t.pic.tuanche.com/car/20150813/14394330818099040_s.jpg'}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>title</Text>
            <Text style={styles.content}>xsbvsdfdsg</Text>
            <Text style={styles.year}>
            <Text style={styles.manNum}>sdgfdgssfdgdsg</Text>
            </Text>
          </View>
        </View>
      <View style={styles.separator} />
    </View>
      </TouchableHighlight>
    );
  },

});

//样式
var styles = StyleSheet.create({

  outCotainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  container: {
    // display:'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 10,
  },
  rightContainer: {
    flex: 1,
    marginLeft:20,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left',
    color:'#000000',
  },
  content: {
    fontSize: 14,
    textAlign: 'left',
  },
  year: {
    textAlign: 'left',
    color:'#000000',
  },
  manNum: {
    textAlign: 'left',
    color:'#FF0000',
  },
  thumbnail: {
    width: 90,
    height: 60,
  },

  listView: {
    backgroundColor: '#F5FCFF',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
});

export default ItemView
