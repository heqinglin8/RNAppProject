/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  Image,
} from 'react-native';

class CarDetail extends Component {
   constructor(props) {
        super(props);
        const { navigator } = this.props;
        this.state = {
            id: 2,
            rowData: this.props.data
        };
    }

    componentDidMount() {
        //这里获取从FirstPageComponent传递过来的参数: id,{rowData.seriesname}
        this.setState({
            rowData: this.props.data
        });
    }
  render() {
    var rowData = this.state.rowData;
    return (
      <View style={styles.container}>
       <Image source={{uri: rowData.img}} style = {styles.bigImage} />
        <Text style={styles.welcome}>
          {rowData.seriesname}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  bigImage:{
    justifyContent: 'center',
    width: 200, 
    height: 200,
  },
});

module.exports=CarDetail;