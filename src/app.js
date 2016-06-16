'use strict'
var React = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Navigator,
  Platform,
  BackAndroid,
} = React;
var Home = require('./home.js');
var App = React.createClass({

  componentWillMount:function() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  },
  componentWillUnmount:function() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  },
  onBackAndroid :function(){
    const nav = this.navigator;
    console.log('nav:'+nav);
    const routers = nav.getCurrentRoutes();
    if (routers.length > 1) {
      nav.pop();
      return true;
    }
    return false;
  },

  render: function() {
    return (
      <Navigator
      ref={nav => { this.navigator = nav; }}
      style={styles.flex}
      initialRoute={{
        component:Home,
        name:'首页',
      }}
      renderScene={(route, navigator) => {
            let Component = route.component;
            return <Component {...route.params} navigator={navigator} />
          }}
      />
    );
  },

});

var styles = StyleSheet.create({
  flex:{
    flex:1,
  },

});

AppRegistry.registerComponent('RNAppProject', ()=> App);
