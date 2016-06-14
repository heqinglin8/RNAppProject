var React = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  StyleSheet,
} = React;

var Header = React.createClass({

   render:function(){
     return (
     <View style = {styles.flex}>
         <Text style = {styles.font}>
         <Text style = {styles.font_1}>网易</Text>
         <Text style = {styles.font_2}>新闻</Text>
         <Text style = {styles.font_1}>有态度</Text>
         </Text>
     </View>
     );
   },

});

//样式
var styles = StyleSheet.create({
   //外布局
  flex: {
    // flexDirection: 'row',
    alignItems:'center',
    height:50,
    borderBottomWidth:3,
    borderColor:'#ee2d36',
    marginTop:25,
  },
  font:{
    fontSize:25,
    fontWeight:'bold',
    textAlign:'center',
  },
  font_1:{
    color:'#cd1d1c',
  },
  font_2:{
    color:'#fff',
    backgroundColor:'#cd1d1c',
  }

});

module.exports = Header;
// export default Header;
