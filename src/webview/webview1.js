/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  WebView,
  View,
} from 'react-native';
var Dimensions = require('Dimensions');
import Utli from '../utils/Util';
 
class WebView1 extends Component {
   constructor(props) {
        super(props);
        const { navigator } = this.props;
        this.state = {
            id: 2,
        };
    }

    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id,{rowData.seriesname}
      
    }
  render() {
    return (
      <View style={styles.container}>
            <WebView 
                url='http://www.autohome.com.cn/beijing/'
                bounces={false}
                style = {styles.webview}
                 >
            </WebView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  webview:{
    width: Utli.size.width, 
    height: Utli.size.height,
  },
});

module.exports=WebView1;