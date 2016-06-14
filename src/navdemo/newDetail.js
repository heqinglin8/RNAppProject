/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';
var TitleBar = require('./titleBar');
var navigator;
class NewDetail extends Component {

  render() {
    navigator   = this.props.navigator;
    return (
      <View style={styles.container}>
      <TitleBar title ='详情页' onBack={this.goBack} next = '分享'/>
        <Text style={styles.welcome}>
          {this.props.title}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
  goBack(){
      console.log('goback','关闭');
    // const { navigator } = this.props;
    if(navigator){
      console.log('navigator: '+Object.keys(navigator));
      navigator.pop();
      return false;
    }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F50000',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
module.exports = NewDetail;
// AppRegistry.registerComponent('AwesomeProject', () => NewDetail);
