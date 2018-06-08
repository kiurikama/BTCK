import React, { Component } from 'react';
import {
  Platform,Dimensions,FlatList,TouchableOpacity,
  StyleSheet,Alert,Image,ActivityIndicator,
  Text,AsyncStorage,StatusBar,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import axios from 'axios';
var {height, width} = Dimensions.get('window');


export default class New1 extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading: false,
      refreshing: false,
      NewFeed: []
    }
  }
  componentWillMount() {
    this.makeRemoteRequest()
}

  makeRemoteRequest= ()=>{
    this.setState({isLoading: true})
    const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=3a7313a251ab495ab0247a50afea75f2"
    axios
        .get(url)
        .then(response => {
            this.setState({isLoading: false, refreshing: false})
            let data = response.data;
            this.setState({
                NewFeed: data.articles
            })
        })
        .catch(() => {
            Alert.alert("Bài này", "Lỗi rồi nhé")
        })}
        
  render() {
    let { isLoading } = this.state;
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
            <Text style={styles.BarText}>  Newspaper</Text>
          </View>
        </View>
        <View style={{flex: 10}}>
        { isLoading ?  <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor:"#0f365b"}}>
          <ActivityIndicator size="large" color="#ededed" />
        </View> :
        
        <FlatList
        keyExtractor={(value, index)=>{
          return index+ ""
        }}
        data={this.state.NewFeed}
        refreshing={this.state.refreshing}
        onRefresh={()=>{
          this.setState({refreshing: true},
            ()=>{
              this.makeRemoteRequest();
            }
          )
        }}
        renderItem={({item})=>{
          return (
            <View style={styles.container}>
            <TouchableOpacity
              onPress={()=>{
                this.props.navigation.navigate("NewFeedScreen", {
                  urlToImage: item.urlToImage,
                  description: item.description,
                  url: item.url
                 })
              }}
            >
              <View style={styles.FontText}>
              <Text style={styles.TextName}>Source: {item.source.name}.</Text>
              <Text style={styles.TextAuthor}>Author: {item.author}.</Text>
              <View>
                <Text style={styles.TextAuthor2}>Title: {item.title}.</Text>
              </View>        
              </View>
              {item.urlToImage == null ?
              <Image source={{uri: "http://d1j8r0kxyu9tj8.cloudfront.net/user.png"}}/> :
              <View style={styles.FontImage}>
              
              <Image source={{uri: item.urlToImage}}
              style={{width: width, height: width / 2}}
              />      
              </View>
              }
              <View style={styles.FontText}>
              <Text style={styles.TextAuthor1}>{item.publishedAt}</Text>
              </View>
              </TouchableOpacity>
            </View>
          )
        }}
        />
        }</View>
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
  TextAuthor2: {
    fontSize: 15,
    color: "#FFFFFF",
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