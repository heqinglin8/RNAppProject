var React = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  StyleSheet,
} = React;
var NewDetail = require('./newDetail');
var Importantnews = React.createClass({
   _pressButton:function(title){
    //  alert(title)
    var navigator = this.props.navigator;
    //  var navigator = this.props.navigator;
        if(navigator) {
          console.log('获取到了');
          navigator.push({
              name: 'NewDetail',
              component: NewDetail,
              //这里多出了一个 params 其实来自于<Navigator 里的一个方法的参数...
              params: {
                  title: title
              }
          });
        }else{
          console.log('无法获取到:');
        }
   },
   render:function(){
     var news = [];
     for(var i in this.props.news){
       var text = (
          <Text key={i}
                style = {styles.new_item}
                onPress = {this._pressButton.bind(this,this.props.news[i])}
                numberOfLines={2}
                >{this.props.news[i]}</Text>
       );
       news.push(text);
     }
     return (
     <View style = {[styles.flex]}>
         <Text style = {styles.news_title}>今日要闻</Text>
         <View style = {styles.lineButtom}/>
         <View style = {styles.list}>
         {news}
         </View>
     </View>
     );
   },

});

//样式
var styles = StyleSheet.create({
  list:{
     marginTop:20,
  },
  flex: {
    flex:1,
  },
  news_title:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:15,
    marginLeft:10,
    color:'CD1D1C',
  },
  lineButtom:{
    borderColor:'#ccc',
    borderBottomWidth:1,
  },
  new_item:{
    marginLeft:10,
    marginRight:10,
    fontSize:15,
    lineHeight:30,
  },

});

module.exports = Importantnews;
