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
/**
*  对Navigator的封装控件
*/

var NavAndroid = React.createClass({


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
        name:'',
        component:this.props.component,
        // index:0,
      }}
      renderScene={(route, navigator) => {
            const Component = route.component;
            return (
              <View style ={{flex:1}}>
              <Component {...route.passProps} navigator={navigator}  route = {route}/>
              </View>
            );
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

module.exports = NavAndroid;
