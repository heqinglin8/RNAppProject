var React = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} = React;

var TitleBar = React.createClass({

   render:function(){
     return (
     <View style = {styles.header}>
           <TouchableOpacity style = {[styles.row,styles.center]} onPress={this.props.onBack}>
               <Image source={require('../../res/drawable/back_white.png')} style = {styles.back}/>
               <Text style = {styles.fontFFF}>返回</Text>
           </TouchableOpacity>
           <View style ={[styles.center,styles.title]}>
             <Text style = {styles.fontFFF}>{this.props.title}</Text>
           </View>
           <TouchableOpacity style ={[styles.next,styles.center]}>
             <Text style = {styles.fontFFF}>{this.props.next}</Text>
           </TouchableOpacity>
     </View>
     );
   },
   goBack:function(){
     console.log('goback','gouback');
   }

});

//样式
var styles = StyleSheet.create({
   //外布局
  header: {
    flexDirection: 'row',
    height:50,
    borderBottomWidth:1,
    backgroundColor:'#3497ff',
    borderColor:'#ff0000',
  },
  row:{
    flexDirection: 'row',
  },
  fontFFF:{
    fontSize:17,
    fontWeight:'bold',
    textAlign:'center',
    color:'#fff',
  },
  center:{
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    flex:1,
  },
  back:{
    height:20,
    width:20,
    marginLeft:10,
  },
  next:{
    height:50,
    width:50,
  }

});

module.exports = TitleBar;
