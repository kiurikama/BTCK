import React, { Component } from 'react';
import {
  Platform,TouchableOpacity,Alert,FlatList,
  StyleSheet,Image,Dimensions,StatusBar,
  Text,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import axios from 'axios';
var {height, width} = Dimensions.get('window');

export default class New2 extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          hidden={true}/>
         <View style={styles.Bar}>
         <View style={styles.Flex}>
          <TouchableOpacity
            onPress={()=>{
              this.props.navigation.openDrawer()
            }}
            >
            <Icon name="list-ul" size={30} color="#FFFFFF"/>
            </TouchableOpacity>
          </View>
          <View style={{flex: 5, justifyContent: "center", alignItems:'flex-start'}}>
            <Text style={styles.BarText}>  Read</Text>
          </View>
         </View>
         <View style={{flex: 10}}>
            
         </View>
      </View>
    );
  }
}
const styles= StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f69af',
    borderBottomWidth: 1,
    borderColor: "#0f365b",
    paddingRight: 20,
  },
  FontText:{
    marginLeft: 20,
    marginVertical: 10,
  },
  FontImage:{
    marginLeft: 20,
  },
  TextName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#90ddc3"
  },
  TextAuthor: {
    fontSize: 15,
    color: "black",
    fontStyle: 'italic',
  },
  TextAuthor1: {
    fontSize: 13,
    color: "black"
  },
  Bar:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'#004587',
    elevation : 20
  },
  BarText:{
    fontSize: 20,
    fontWeight:"bold",
    color:"#FFFFFF"
  },
  Flex:{
    flex:1, 
    justifyContent:"center", 
    alignItems:"center"}

})