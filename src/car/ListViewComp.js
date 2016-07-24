'use strict';
//Get请求
var React = require('react-native');
var {
  AppRegistry,
  Image,
  ListView,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  ScrollView,
  ProgressBarAndroid,
  ToastAndroid,
} = React;

var baseRequestUrl = 'http://app.api.autohome.com.cn/autov5.1.0/Dealer/hotsaleseries-pm1';

//跳转页面的引入
var CarDetail = require('./CarDetail');

export default class ListViewComp extends React.Component{

  constructor(props) {
  super(props);
  var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2},);
  // var ds = new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2,});
  this.state = {
    loaded:false,
    // dataSource: ds.cloneWithRows(['row 1', 'row 2','row 3', 'row 4']),
    dataSource: ds,
  };
}

render() {
    console.log("loaded",this.state.loaded);
    if(!this.state.loaded && this.state.dataSource!=null){
     return this.renderLoadingView();
    }
     return (
       <View style = {styles.cotainer}>
          <View style = {styles.tab_cotainer}> 
                <View style = {[styles.item,styles.center]}>
                <Text style = {styles.font} onPress = {this.getList.bind(this,0)}>轿  车</Text>
                </View>

                 <View style = {[styles.item,styles.center,styles.lineLeftRight]}>
                    <Text style = {styles.font} onPress = {this.getList.bind(this,1)}>SUV</Text>
                </View>

                <View style = {[styles.item,styles.center]}>
                    <Text style = {styles.font} onPress = {this.getList.bind(this,2)}>MPV</Text>
                </View>
          </View>
          <ListView  style = {styles.listView}
            dataSource={this.state.dataSource}
            renderRow={(rowData) => this._renderRow(rowData)}
           />
        </View>
        );

}

renderLoadingView() {
  //文字加载中
    return(
        <View style = {styles.loadingpage}>
         <ProgressBarAndroid styleAttr ='SmallInverse' />
        <Text style = {styles.center}> 正在加载数据... </Text>
        </View>
      );
}

  //从网络获取数据
  componentDidMount(){
     this.getList(0);
  }

   //get请求
  getList(styleIndex){
    //http://app.api.autohome.com.cn/autov5.1.0/Dealer/hotsaleseries-pm1-st0.json
    var requestUrl = baseRequestUrl + '-st'+styleIndex+'.json';
    console.log("requestUrl",requestUrl);
     fetch(requestUrl).
     then((response) => response.json())
     .then(responseData =>{
       var seriesList = responseData.result.list;
       var hotseries = seriesList[0].hotseries;
      //  console.log("responseData",responseData);
       console.log("hotseries",hotseries);
       this.setState({
         dataSource:this.state.dataSource.cloneWithRows(hotseries),
         loaded:true,
        //  total:responseData.total,
       });
      
     }).done();
  }

_renderRow (rowData) {
    return (
      <TouchableHighlight underlayColor="rgba(34,28,32,0.5)" onPress={() => this._pressRow(rowData)}>
  <View>
        <View style={styles.row_container} >
          <Image
            source={{uri: rowData.img}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title} >{rowData.seriesname}</Text>
            <Text style={styles.content}>{rowData.ordercount}</Text>
            <Text style={styles.year}>
            <Text style={styles.manNum}>{rowData.price}</Text>
            </Text>
          </View>
        </View>
      <View style={styles.separator} />
    </View>
      </TouchableHighlight>
    );
  }


_pressRow(rowData){
  ToastAndroid.show('点击一个Item：'+rowData.seriesname,ToastAndroid.LONG);
    this.props.navigator.push({
      title: rowData.seriesname,
      component: CarDetail,
      params: {data: rowData}
    });
  }

}
  
//样式
var styles = StyleSheet.create({

  cotainer: {
    flex: 1,
  },
 loadingpage:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
  row_container: {
    // display:'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop:5,
    paddingBottom:5,
  },
  rightContainer: {
    flex: 1,
    marginLeft:20,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left',
    color:'#000000',
  },
  content: {
    fontSize: 14,
    textAlign: 'left',
  },
  year: {
    textAlign: 'left',
    color:'#000000',
  },
  manNum: {
    textAlign: 'left',
    color:'#FF0000',
  },
  thumbnail: {
    width: 90,
    height: 60,
  },

   listView: {
    marginTop: 10,
    backgroundColor: '#F5FCFF',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },

//头部导航 start
 //第一行布局
  tab_cotainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height:44,
    backgroundColor:'#ff0067',
    borderRadius:10,
    padding:2,
    marginTop:10,
    marginLeft:5,
    marginRight:5,
  },

  item: {
      flex:1,
      height:40,
    },
 center:{
    justifyContent:'center',
    alignItems:'center',
  },
  font:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
  },
   lineLeftRight:{
   borderColor:'#fff',
  //  borderLeftWidth:1/PixelRatio.get(),
  //  borderRightWidth:1/PixelRatio.get(),
   borderLeftWidth:1,
   borderRightWidth:1,
  },
});

