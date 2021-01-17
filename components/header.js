import React,{Component} from 'react'
import {Header,Icon,Badge} from 'react-native-elements'
import { StyleSheet, Text, View,TextInput ,TouchableOpacity ,Alert , Modal ,ScrollView, KeyboardAvoidingView} from 'react-native';
 const MyHeader = props=>{
     return(
         <Header 
         centerComponent={{text:props.title,style:{color:"red",fontSize:20,fontWeight:"bold"}}}
         backgroundColor='#4567ab'
         />
     )
 }
export default MyHeader;