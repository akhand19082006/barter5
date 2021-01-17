import React from 'react'
import { StyleSheet, Text, View, TextInput ,TouchableOpacity ,Alert , Modal ,ScrollView, KeyboardAvoidingView} from 'react-native';
import db from '../config'
import firebase from 'firebase'
import MyHeader from '../components/header'
export default class SettingScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            FirstName:'',
            LastName:'',
            Address:'',
            MobileNumber:'',
            MiddleName:'',
            docId:''
        }

    }
    getUserDetails= ()=>{
        var user=firebase.auth().currentUser
        var email = user.email
        db.collection('users').where('EmailId','==',email).get()
        .then(snapshot=>{
            snapshot.forEach(doc =>{
                var data = doc.data()
                this.setState({
                    emailId:data.EmailId,
            FirstName:data.FirstName,
            LastName:data.LastName,
            Address:data.Address,
            MobileNumber:data.MobileNumber,
            MiddleName:data.MiddleName,
            docId:doc.id
                })
            })
        })

    }
    updateUserDetail= ()=>{
     db.collection('users').doc(this.state.docId)
     .update({
         "FirstName":this.state.FirstName,
         "LastName":this.state.LastName,
         "Address":this.state.Address,
         "MobileNumber":this.state.MobileNumber,
         "MiddleName":this.state.MiddleName
         
     })
     Alert.alert("Profile Updated Successfully")
    }
    componentDidMount(){
        this.getUserDetails()
    }
render(){
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
           <MyHeader title= "Setting"  navigation={this.props.navigation}/> 
                <View style={{flex:1,width:'100%',alignItems:'center'}}>

                <TextInput style={styles.TextInput} 
                placeholder={"First Name"}
                maxLength={10}
                onChangeText={(text)=>{
                    this.setState({
                        FirstName:text
                    })
                }}
                value={this.state.FirstName}
                />

                 <TextInput style={styles.TextInput} 
                placeholder={"Middle Name"}
                maxLength={10}
                onChangeText={(text)=>{
                    this.setState({
                        MiddleName:text
                    })
                }}
                value={this.state.MiddleName}
                />
                 <TextInput style={styles.TextInput} 
                placeholder={"Last Name"}
                maxLength={10}
                onChangeText={(text)=>{
                    this.setState({
                        LastName:text
                    })
                }}
                value={this.state.LastName}
                />
                 <TextInput style={styles.TextInput} 
                placeholder={"Mobile Numcer"}
                maxLength={10}
                keyboardType={'numeric'}
                onChangeText={(text)=>{
                    this.setState({
                        MobileNumber:text
                    })
                }}
                value={this.state.MobileNumber}
                />
                 <TextInput style={styles.TextInput} 
                placeholder={"Address"}
                multiline={true}
                onChangeText={(text)=>{
                    this.setState({
                        Address:text
                    })
                }}
                value={this.state.Address}
                /> 
               
                    <TouchableOpacity style={styles.button}
                     onPress={()=>{
                     this.updateUserDetail()}}>
                         <Text style={styles.buttonText}>Save</Text>
                         </TouchableOpacity>
                </View>
                </View>
    )
}

}
const styles = StyleSheet.create({
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
    },
    buttonText:{
        color:"blue",
        fontWeight:'200',
        fontSize:20
            }
})