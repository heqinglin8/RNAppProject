var React = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  PixelRatio,
} = React;

var Item = React.createClass({

   render:function(){
     return (
     <View style = {styles.item}>
         <Text style = {styles.item_font}>{this.props.title}</Text>
     </View>
     );
   },

});

//样式
var styles = StyleSheet.create({
   //外布局
  item: {
    flexDirection: 'row',
    alignItems:'center',
    height:40,
    borderBottomWidth:1,
    borderColor:'#ddd',
    paddingLeft:10,
    paddingRight:10,
  },
  item_font:{
    fontSize:16,
  },
  flex:{
    flex:1,
  },

});

module.exports = Item;
// export default Header;
