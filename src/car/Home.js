'use strict'
var React = require('react-native');
var {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ListView,
  AppRegistry,
} = React;

var HomeCategory_URL = 'http://umapi.tuanche.com/basedata/index?cityId=10&token=&time=1455696371&sign=86fa26f8793b41a39216d326ee125cfa';
var HomeHotStyle_URL = 'http://umapi.tuanche.com/basedata/hotstyle?cityId=10&count=0&offset=0&token=&time=1455872419&sign=cb7b451183c456b4862e52f090cfba50';
var CategoryView = require('./CategoryView');
var HotCarInfoCell = require('./HotCarInfoCell');
var CarDetail = require('./CarDetail');

var Home = React.createClass({
  getInitialState: function() {
    var getSectionData = (dataArr, sectionID) => {
      return dataArr[0];
    };
    var getRowData = (dataArr, sectionID, rowID) => {
      return dataArr[sectionID][rowID];
    };
    return {
      isLoaded: false,
      dataArr: [],
      dataSource: new ListView.DataSource({
        getRowData: getRowData,
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      }),
    }
  },

  componentDidMount: function() {
    this._fetchHomeCategoryData();
    this._fetchHotCarStyleListData();
  },

  _fetchHomeCategoryData: function() {
    fetch(HomeCategory_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'traceinfo': 'versionname=2.4.1;versioncode=20160120;buildversion=20160120;osversion=9.2.1;model=iPhone6;appname=GroupbuyCar;clientname=iPhone;channelid=10002;idfa=1940A246-036F-4265-9032-1EE2526053B3;deviceid=7dce619f9d7dd335d27ae1113f89d59854c4e156;network=0;source=24;location=116.313988,39.896126',
      },
    })
    .then((response) => response.json())
    .then((responseData) => {
      var dataArr = this.state.dataArr;
      dataArr.push([responseData.result.nc, "测试"]);
      // console.log(Object.keys(dataArr));
      // console.log(responseData.result.nc);
      // console.log(dataArr);
      this.setState({
        isLoaded: true,
        dataArr: dataArr,
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataArr),
      });
    })
    .catch((error) => {
      console.warn(error);
    })
    .done();
  },

  _fetchHotCarStyleListData: function() {
    fetch(HomeHotStyle_URL, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'traceinfo': 'versionname=2.4.1;versioncode=20160120;buildversion=20160120;osversion=9.2.1;model=iPhone6;appname=GroupbuyCar;clientname=iPhone;channelid=10002;idfa=1940A246-036F-4265-9032-1EE2526053B3;deviceid=7dce619f9d7dd335d27ae1113f89d59854c4e156;network=0;source=24;location=116.313988,39.896126',
      },
    })
    .then((response) => response.json())
    .then((responseData) => {
      // console.log(responseData);
      var dataArr = this.state.dataArr;
      dataArr.push(responseData.result);
      this.setState({
        isLoaded: true,
        dataArr: dataArr,
        dataSource: this.state.dataSource.cloneWithRowsAndSections(dataArr),
      });
    })
    .catch((error) => {
      console.warn(error);
    })
    .done();
  },

  render: function() {
    if(this.state.isLoaded) {
      return (
        <ListView
        style={styles.listView}
        contentContainerStyle={styles.listContent}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}
        renderSectionHeader={this._renderSectionHeader}
        />
      );
    }
    else {
      return (
        <View>
          <Text> Loading... </Text>
        </View>
      );
    }
  },

  _renderRow:function(rowData, sectionID, rowID) {
    // console.log("section:"+sectionID);
    // console.log("row:"+rowID);
    // console.log(rowData);
    // console.log(typeof(sectionID));

    switch (sectionID) {
      case "0":
        return this._renderFirstSection(rowData, rowID);
        break;
      case "1":
        return this._renderSecondSection(rowData, rowID);
        break;
      default:
    }
  },

  _renderFirstSection: function(categorys, rowID) {
    switch (rowID) {
      case "0":
        return (
          <CategoryView categoryData={categorys} onPress={this._onPressCategory}/>
        );
        break;
      case "1":
        return (
          <View style={styles.seperatorCell} />
        );
      break;
      default:

    }
  },

  _renderSecondSection: function(carInfo, rowID) {
    return (
      <HotCarInfoCell onPress={this._onPressHotCarListCell.bind(this, carInfo, rowID)} carInfo={carInfo} />
    );
  },

  _renderSeparator: function(sectionID, rowID, adjacentRowHighlighted) {
    return (
      <View key={sectionID+rowID} style={styles.line}/>
    );
  },

  _renderSectionHeader: function(sectionData, sectionID) {
    switch (sectionID) {
      case "0":
        return (
          <View key={sectionID} />
        );
        break;
      case "1":
        return (
          <View key={sectionID} style={styles.sectionHeader}>
          <Text style={styles.headerText}>热门车型</Text>
          <View style={styles.line} />
          </View>
        );
        break;
      default:

    }
  },

  //点击分类视图
  _onPressCategory: function(category) {
    // console.log(category);
    // alert('点击：'+JSON.stringify(category));
    /*
    this.props.navigator.push({
      title: category.name,
      component: CarDetail,
      passProps: {data: category}
    });
    */
    var BGPushViewControllerManager = require('react-native').NativeModules.BGPushViewControllerManager;
    BGPushViewControllerManager.push('BGDetailViewController', '分类', category);
  },
  //点击列表cell的方法
  _onPressHotCarListCell: function(carInfo, rowID) {
    // var BGPushViewControllerManager = require('react-native').NativeModules.BGPushViewControllerManager;
    // BGPushViewControllerManager.push('BGDetailViewController', '详情页', carInfo);

    this.props.navigator.push({
      title: carInfo.styleName,
      component: CarDetail,
      passProps: {data: carInfo}
    });
    // alert('点击列表cell，进入详情页, rowID:'+rowID+', styleName:'+carInfo.styleName);
  },

});

var styles = StyleSheet.create({
  //列表的样式
  listView: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#E0E0E0',
    marginBottom: 49,
    marginTop: 64,
  },
  //列表内容的样式
  listContent: {
  },
  //包容器的样式
  container: {
    // flex: 1,
    // backgroundColor: '#F0F0F0',
  },
  //文本样式
  text: {
    flex: 1,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  //线的样式
  line: {
    height: 1,
    backgroundColor: 'D9D9D9',
  },
  //分组头
  sectionHeader: {
    backgroundColor: 'white',
  },
  //组头文本
  headerText: {
    fontSize: 16,
    padding: 10,
  },
  //用来做分割内容的cell样式，高度为10
  seperatorCell: {
    height: 10,
  },
});

var { requireNativeComponent } = require('react-native');
// requireNativeComponent 自动把这个组件提供给 "BGViewManager"
var BGView = requireNativeComponent('BGView', null);

module.exports = Home;
AppRegistry.registerComponent('Home', ()=> Home);
