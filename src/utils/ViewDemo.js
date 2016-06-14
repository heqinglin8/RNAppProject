'use strict';
//Get请求
var React = require('react-native');
var {
  AppRegistry,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} = React;

var ViewDemo = React.createClass({

   render:function(){
    //  return this.renderLoading();

     return (
  <View style = {styles.outCotainer}>

        <View style = {styles.cotainer_1}>
            <View style = {styles.left}>
            <Text>热门车型</Text>
            </View>
          <View style={styles.separator_row} />
            <View style = {styles.right}>
            </View>
        </View>

        <View style = {styles.cotainer_2}>
            <View style = {styles.item}>
            <Text>热</Text>
            </View>
            <View style = {styles.item}>
            <Text>门</Text>
            </View>
            <View style = {styles.item}>
            <Text>车</Text>
            </View>
            <View style = {styles.item}>
            <Text>型</Text>
            </View>
        </View>


        <View style = {styles.cotainer_3}>
            <View style = {styles.item}>
            <Text>热</Text>
            </View>
            <View style = {styles.item}>
            <Text>门</Text>
            </View>
            <View style = {styles.item}>
            <Text>车</Text>
            </View>
            <View style = {styles.item}>
            <Text>型</Text>
            </View>
        </View>

        <View style = {styles.cotainer_4}>
            <View style = {styles.bigItem}>
            <Text>热</Text>
            </View>
            <View style = {styles.bigItem}>
            <Text>门</Text>
            </View>
            <View style = {styles.bigItem}>
            <Text>车</Text>
            </View>
            <View style = {styles.bigItem}>
            <Text>型</Text>
            </View>
        </View>

        <View style = {styles.cotainer_5}>
            <View style = {styles.bigItem}>
            <Text>热</Text>
            </View>
            <View style = {styles.bigItem}>
            <Text>门</Text>
            </View>
            <View style = {styles.bigItem}>
            <Text>车</Text>
            </View>
            <View style = {styles.bigItem}>
            <Text>型</Text>
            </View>
        </View>

        <View style = {styles.cotainer_6}>
            <View style = {styles.item}>
            <Text>热</Text>
            </View>
            <View style = {styles.item}>
            <Text>门</Text>
            </View>
            <View style = {styles.item}>
            <Text>车</Text>
            </View>
            <View style = {styles.item}>
            <Text>型</Text>
            </View>
        </View>

        <View style = {styles.cotainer_7}>
            <View style = {styles.item}>
            <Text>热</Text>
            </View>
            <View style = {styles.item}>
            <Text>门</Text>
            </View>
            <View style = {styles.item}>
            <Text>车</Text>
            </View>
            <View style = {styles.item}>
            <Text>型</Text>
            </View>
        </View>

        <View style = {styles.cotainer_8}>
            <View style = {styles.item}>
            <Text>热</Text>
            </View>
            <View style = {styles.item}>
            <Text>门</Text>
            </View>
            <View style = {styles.item}>
            <Text>车</Text>
            </View>
            <View style = {styles.item}>
            <Text>型</Text>
            </View>
        </View>


        <View style = {styles.cotainer_10}>
            <View style = {styles.item2}>
            <Text style ={styles.amall_text}>热</Text>
            </View>
            <View style = {styles.item2}>
            <Text style ={styles.amall_text}>门</Text>
            </View>
            <View style = {styles.item2}>
            <Text style ={styles.amall_text}>车</Text>
            </View>
            <View style = {styles.item2}>
            <Text style ={styles.amall_text}>型</Text>
            </View>
        </View>

        <View style = {styles.cotainer_9}>
            <View style = {styles.item}>
            <Text style ={styles.amall_text}>热</Text>
            </View>
            <View style = {styles.item}>
            <Text style ={styles.amall_text}>门</Text>
            </View>
            <View style = {styles.item}>
            <Text style ={styles.amall_text}>车</Text>
            </View>
            <View style = {styles.item}>
            <Text style ={styles.amall_text}>型</Text>
            </View>
        </View>


 </View>
     );
   },

renderLoading:function(){
  return(
    <Text> 正在加载数据... </Text>
  );
},

});

//样式
var styles = StyleSheet.create({
   //第一行布局
  outCotainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  cotainer_1: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
  },

  left: {
    width:100,
    height:100,
    backgroundColor: '#FF0000',
  },
  right: {
    height:100,
    flex:1,
    backgroundColor: '#F12345',
  },
  separator_row: {
    width:1,
    backgroundColor: '#E0E0E0',
  },
  separator_column: {
    height:1,
    backgroundColor: '#E0E0E0',
  },
//第二行布局
  cotainer_2: {
    flexDirection: 'row',
    justifyContent: 'flex-start',  //默认靠近末端可以不写
    // flexDirection: 'column',
    // justifyContent: 'flex-end',  //默认靠近末端可以不写
    // height:400,
    // backgroundColor:'#123456',
  },
  item: {
    width:50,
    height:50,
    backgroundColor: '#FF0000',
    marginLeft:3,
    justifyContent:'center',
    alignItems:'center',
  },

  //第三行布局
    cotainer_3: {
      flexDirection: 'row',
      justifyContent: 'flex-end',  //默认居左可以不写
    },

    //第四行布局，换行
      cotainer_4: {
        flexDirection: 'row',
        justifyContent: 'flex-start',  //默认居左可以不写
        flexWrap:'wrap',
      },
      bigItem: {
        width:100,
        height:50,
        backgroundColor: '#FF4321',
        marginLeft:10,
      },

    //第五行布局
      cotainer_5: {
        flexDirection: 'row',
        justifyContent: 'flex-start',  //默认居左可以不写
        flexWrap:'nowrap',
      },

      //第六行布局
        cotainer_6: {
          flexDirection: 'row',
          justifyContent: 'center',  //默认居左可以不写
        },

        //第七行布局
          cotainer_7: {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },

          //第八行布局
            cotainer_8: {
              flexDirection: 'row',
              justifyContent: 'space-around',
            },

            //第九行布局,定义容器内部项目在交叉轴的对齐方式
              cotainer_9: {
                flexDirection: 'row',
                justifyContent: 'center',
                height:70,
                alignItems:'flex-end',
                backgroundColor: '#CCCCCC',
              },

            amall_text:{
              color:'white',
            },

            //第十行代码，体验laignSelf

            cotainer_10: {
              flexDirection: 'row',
              justifyContent: 'flex-start',  //默认居左可以不写
              height:70,
            },
            'item2': {
              width:50,
              // height:50,
              backgroundColor: '#FF0000',
              marginLeft:3,
              justifyContent:'center',
              alignItems:'center',
              alignSelf:'stretch',
            },

});

AppRegistry.registerComponent('AwesomeProject',() => ViewDemo);
