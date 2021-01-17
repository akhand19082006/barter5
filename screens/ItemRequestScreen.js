import React from 'react'
import { StyleSheet, Text, View, TextInput ,TouchableOpacity ,Alert , Modal ,ScrollView, KeyboardAvoidingView} from 'react-native';
import db from '../config'
import firebase from 'firebase'
import MyHeader from '../components/header'
export default class ItemRequestScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            ItemName:"",
            reasonToRequest:""
        }
    }
    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }
    addRequest=(ItemName,reasonToRequest)=>{
     var userId =this.state.userId
     var randomRequestId = this.createUniqueId();
     db.collection('RequestedItem').add({
         "UserId":userId,
         "ItemName":ItemName,
         "ReasonToRequest":reasonToRequest,
         "RequestId":randomRequestId
     })
     this.setState({
         ItemName:'',
         reasonToRequest:'',
     })
     return Alert.alert("Item Requested Successfully")
    }
render(){
    return(
        <View style={{flex:1}}>
         <MyHeader title= "Request your Item" />
         <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>

         <TextInput style={styles.TextInput} 
                     placeholder={"Enter Item Name"}
                     onChangeText={(text)=>{
                         this.setState({
                             ItemName:text
                         })
                     }}
                     value={this.state.ItemName}
                     />

         <TextInput style={[styles.TextInput,{height:300}]} 
                     multiline
                     numberOfLines={8}
                     placeholder={"Why do you need the Item ?"}
                     onChangeText={(text)=>{
                         this.setState({
                             reasonToRequest:text
                         })
                     }}
                     value={this.state.reasonToRequest}
                     
                     />
                     <TouchableOpacity style={styles.button} 
                     onPress={()=>{
                         this.addRequest(this.state.ItemName,this.state.reasonToRequest)
                     }}
                     >
                        <Text style={styles.buttonText}>Request</Text>
                     </TouchableOpacity>
         </KeyboardAvoidingView>
        </View>
    )
}
}
const styles = StyleSheet.create({ 
    button:{
        width:"75%",
        height:50,
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
    },
    
    KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    TextInput:{
       
        width:"75%",
         height:35,
          alignSelf:'center',
          borderColor:'#ffab91',
           borderRadius:10, 
           borderWidth:1,
            marginTop:20, 
            padding:10
    },
    TouchableOpacity:{
        width:200, 
        height:40, 
        alignItems:'center',
         justifyContent:'center',
         borderWidth:1, 
         borderRadius:10, 
         marginTop:30
    },  
    TextInput:{
       
        width:"75%",
         height:35,
          alignSelf:'center',
          borderColor:'#ffab91',
           borderRadius:10, 
           borderWidth:1,
            marginTop:20, 
            padding:10
    },
    buttonText:{
        color:"blue",
        fontWeight:'200',
        fontSize:20
            },
})