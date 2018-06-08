import React, { Component } from 'react';
import {
  Platform,TouchableHighlight,Image,WebView,
  StyleSheet,ScrollView,Dimensions,StatusBar,
  Text,
  View
} from 'react-native';
import { createStackNavigator,createTabNavigator,createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

var {height, width} = Dimensions.get('window');
export default class NewFeed extends Component {
  render() {
    return (
        <View style={styles.container}>
            <StatusBar
                hidden={true}/>
            <View style={{flex: 10}}>
            <WebView
                style={{height: height, width: width}}
                source={{uri: this.props.navigation.getParam("url", this.props.url)}}
                automaticallyAdjustContentInsets={true}
                initialScale= {100}
                scrollEnabled={false}
            />   
            </View> 
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={()=>{
                        this.props.navigation.goBack()
                    }}
                >
                <Icon name="chevron-circle-left" size={30} color="#FFFFFF"/>
                </TouchableHighlight>
            </View>      
        </View>
    );
  }
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1f69af',
    },
})