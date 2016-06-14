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
var List = require('./list.js');
var NavAndroid = require('./NavAndroid.js');
var Nav = React.createClass({

  render: function() {
    return (
      <NavAndroid
      component={List}
      />
    );
  },

});

var styles = StyleSheet.create({
});

// module.exports = Nav;
AppRegistry.registerComponent('AwesomeProject', ()=> Nav);
