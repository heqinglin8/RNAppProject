'use strict';

var React = require('react-native');
var {
   PixelRatio,
} = React;
var Dimensions = require('Dimensions');
var Utli = {
  pixel:1/PixelRatio.get(),
  size:{
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },

};

module.exports = Utli;
