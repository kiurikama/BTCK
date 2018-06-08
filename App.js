
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,Dimensions,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Home1 from "./src/Home";
import New1 from "./src/New";
import New2 from "./src/New2";
import NewFeed from "./src/NewFeed";
import { createStackNavigator,createBottomTabNavigator,createDrawerNavigator } from 'react-navigation';
import Icon1 from 'react-native-vector-icons/dist/MaterialIcons';
var {height, width} = Dimensions.get('window');

const HomeRoute = createBottomTabNavigator({
    NewScreen: {screen: New1, navigationOptions :()=> ({
      tabBarIcon:
      ({focused,tintColor})=>
        (<Icon name="newspaper-o" size={30} color={tintColor}/>)
        
    })},
    New2Screen: {screen: New2, navigationOptions :()=> ({
      tabBarIcon:
      ({focused,tintColor})=>
        (<Icon1 name="book" size={30} color={tintColor}/>)
      
    })}
},{
  tabBarPosition: "bottom",
  activeBackgroundColor :"#004587",
  inactiveBackgroundColor :"#004587",
  tabBarOptions : {
    activeTintColor :"#FFFFFF",
    inactiveTintColor :"#281517",
    showLabel : false,
    showIcon : true,
    activeBackgroundColor :"#004587",
    inactiveBackgroundColor :"#004587",
    indicatorStyle:{
      backgroundColor: "transparent"
    }
  }
})


const HomeMenu = createDrawerNavigator({
  "Trang chủ": {screen: HomeRoute, navigationOptions: (navigation)=>({
    drawerIcon:({focused, tintColor})=>
    (<Icon name="home" size={20} color={tintColor}/>)
  })},
  "Báo mới": {screen: New1, navigationOptions: (navigation)=>({
    drawerIcon:({focused, tintColor})=>
    (<Icon name="newspaper-o" size={20} color={tintColor}/>)
  })},
  "Đã đọc": {screen: New2, navigationOptions: (navigation)=>({
    drawerIcon:({focused, tintColor})=>
    (<Icon name="book" size={20} color={tintColor}/>)
  })}
},{
  drawerWidth : width - 100,
  drawerBackgroundColor:"#a4bfd8",
  contentOptions:{
    activeTintColor :'#FFFFFF',
    inactiveTintColor :'#281517',
    itemStyle:{marginHorizontal:20},
    labelStyle:{fontSize:  20, marginVertical: 10,}
  }
})

const RootNavigator = createStackNavigator({
  Home3: {screen: Home1},
  Home2: {screen: HomeMenu},
  NewFeedScreen: {screen: NewFeed
  }
},
{
  headerMode:"none",
  initialRouteName:'Home3'
}
)

export default class App extends Component {
  render() {
    return (
      <RootNavigator />
    );
  }
}

