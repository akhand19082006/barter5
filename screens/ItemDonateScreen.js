import React from 'react'
import { StyleSheet, Text, View, TextInput ,TouchableOpacity ,Alert , Modal ,ScrollView, KeyboardAvoidingView , FlatList} from 'react-native';
import {ListItem} from 'react-native-elements'
import db from '../config'
import firebase from 'firebase'
import MyHeader from '../components/header'
import { TouchableOpacityBase } from 'react-native';
export default class ItemDonateScreen extends React.Component{
    constructor(){
        super();
        this.state={
            RequestedItemList:[]

        }
        this.requestref=null
    }
    getItemList=()=>{
        this.requestref=db.collection('RequestedItem')
        .onSnapshot((snapshot)=>{
            var RequestedItemList = snapshot.docs.map(document=>document.data())
            this.setState({
                RequestedItemList:RequestedItemList
            })
        })
    }
    componentDidMount(){
        this.getItemList()
    }
    componentWillUnmount(){
        this.requestref();

    }
    keyExtractor=(item,index)=>index.toString()
    renderItem=({item,i})=>{
        return(
            <ListItem
            key={i}
            title={item.ItemName}
            subtitle={item.ReasonToRequest}
            titleStyle={{color:'black' , fontWeight:'bold'}}
            rightElement={
                <TouchableOpacity style = {styles.button} 
                onPress={()=>{
                    this.props.navigation.navigate("RecieverDetails",{"details":item })
                }}
                >
                   <Text style={{color:"darkblue"}}>View</Text>
                </TouchableOpacity>
            }
            bottomDivider
            />

            
        )
    }
render(){
    return(
        <View style={{flex:1}}>
          <MyHeader title="Donate Items" />
          <View style={{flex:1}}>
              {
                  this.state.RequestedItemList.length===0
                  ?(
                   <View>
                       <Text style ={{fontSize:20}}>
                           list Of All Requested Item
                       </Text>
                   </View>   
                  )
                  :(
                      <FlatList 
                      keyExtractor = {this.keyExtractor}
                      data={this.state.RequestedItemList}
                      renderItem={this.renderItem}
                      />
                  )
              }
          </View>
        </View>
    )
}
}

const styles = StyleSheet.create({ 
    button:{
        width: 100,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:"yellow",
        shadowColor:"#000",
        shadowOffset:{width:0,height:8},
        shadowOpacity:0.30,
        shadowRadius:10.32,
        elevation:16,
        marginTop:20
    }
})