import React, { Component } from 'react';
import {
  Platform,TouchableHighlight,Dimensions,
  StyleSheet,StatusBar,ImageBackground,
  Text,
  View
} from 'react-native';
import { createStackNavigator,createTabNavigator,createDrawerNavigator } from 'react-navigation';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
var {height, width} = Dimensions.get('window');
export default class Home1 extends Component {
  render() {
    return (
        <View>
            <StatusBar
                hidden={true}/>
            <TouchableHighlight
                onPress={()=>{
                    this.props.navigation.navigate("NewScreen")
                }}
                >
                <ImageBackground
                    source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Newspaper_Cover.svg/2000px-Newspaper_Cover.svg.png"}}
                    style={styles.ImgBg}
                >
                    <View style={styles.ViewImg}>
                    <Text style={styles.TextImg}>Click</Text>
                    </View>
                </ImageBackground>
            </TouchableHighlight>
                
        </View>
    );
  }
}

const styles= StyleSheet.create({
    ImgBg:{
        width: "100%",
        height: "100%"
    },
    TextImg:{
        fontSize: 30,
        fontWeight: "bold",
    },
    ViewImg:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})