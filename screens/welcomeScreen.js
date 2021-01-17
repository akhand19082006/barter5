import React from 'react';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity ,Alert , Modal ,ScrollView, KeyboardAvoidingView} from 'react-native';
import firebase from'firebase';
import db from '../config';
export default class WelcomeScreen extends React.Component {
    constructor(){
        super();
        this.state={
            emailId:'',
            password:'',
            isModalVisible:'false',
            FirstName:'',
            LastName:'',
            Address:'',
            MobileNumber:'',
            ConfirmPassword:'',
            MiddleName:''
        }

    }
    userlogin=(emailId,password)=>{
        firebase.auth().signInWithEmailAndPassword(emailId,password)
        .then(()=>{
         this.props.navigation.navigate('DonateBooks')
         
        })
   .catch((error)=>{
       var errorcode=error.code;
       var errormessage=error.errormessage
       return Alert.alert(errormessage)
   })
    }
    
    userSignup=(emailId,password,ConfirmPassword)=>{
            if(password!==ConfirmPassword){
                return Alert.alert("Password Does not Match\n Check your Password")
            }
            else{
        firebase.auth().createUserWithEmailAndPassword(emailId,password)
        .then(()=>{

            db.collection('users').add({
                FirstName:this.state.FirstName,
                MiddleName:this.state.MiddleName,
                LastName:this.state.LastName,
                MobileNumber:this.state.MobileNumber,
                EmailId:this.state.emailId,
                Address:this.state.Address

            })
         return Alert.alert("user added successfuly",'',[{text:'OK',onPress:()=>this.setState({"isModalVisible":false})}]);

         
        })
   .catch(function(error){
       var errorcode=error.code;
       var errormessage=error.errormessage
       return Alert.alert(errormessage)
   })
    }
}
    showModal=()=>{
      return(
          <Modal 
          animationType="fade"
          transparent={true}
          visible={this.state.isModalVisible}>
         <View style={styles.ModalContainer}>
             <ScrollView style={{width:'100%'}}>
                 <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                     <Text style={styles.title}>Registration</Text>
                     <TextInput style={styles.TextInput} 
                     placeholder={"First Name"}
                     maxLength={10}
                     onChangeText={(text)=>{
                         this.setState({
                             FirstName:text
                         })
                     }}
                     />
                      <TextInput style={styles.TextInput} 
                     placeholder={"Middle Name"}
                     maxLength={10}
                     onChangeText={(text)=>{
                         this.setState({
                             MiddleName:text
                         })
                     }}
                     />
                      <TextInput style={styles.TextInput} 
                     placeholder={"Last Name"}
                     maxLength={10}
                     onChangeText={(text)=>{
                         this.setState({
                             LastName:text
                         })
                     }}
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
                     />
                      <TextInput style={styles.TextInput} 
                     placeholder={"Address"}
                     multiline={true}
                     onChangeText={(text)=>{
                         this.setState({
                             Address:text
                         })
                     }}
                     />
                      <TextInput style={styles.TextInput} 
                     placeholder={"Email"}
                     keyboardType={'email-address'}
                     onChangeText={(text)=>{
                         this.setState({
                             emailId:text
                         })
                     }}
                     />
                      <TextInput style={styles.TextInput} 
                     placeholder={"Password"}
                     secureTextEntry={true}
                     onChangeText={(text)=>{
                         this.setState({
                             password:text
                         })
                     }}
                     />
                      <TextInput style={styles.TextInput} 
                     placeholder={"Confirm Password"}
                     secureTextEntry={true}
                     onChangeText={(text)=>{
                         this.setState({
                            ConfirmPassword:text
                         })
                     }}
                     />
                     <View>
                         <TouchableOpacity style={styles.TouchableOpacity}
                          onPress={()=>
                          this.userSignup(this.state.emailId,this.state.password,this.state.ConfirmPassword)}>
                              <Text>Register</Text>
                              </TouchableOpacity>
                     </View>
                     <View>
                         <TouchableOpacity 
                         onPress={()=>this.setState({"isModalVisible":false})}
                         ><Text>Cancel</Text></TouchableOpacity>
                     </View>
                 </KeyboardAvoidingView>

             </ScrollView>
         </View>

          </Modal>
      )
    }
  render(){
    return (
    <View style ={styles.container}>

        <View style={{justifyContent:'center',alignItems:'center'}}>
          
        </View>
        {this.showModal()}
    <View>  
        {/* <SantaAnimation /> */}
       <Text style={styles.heading}>Barter</Text>
    </View>
    <View>
        <TextInput 
        style={styles.loginbox}
        placeholder="abc@yahoo.com"
        keyboardType='email-address'
        onChangeText={(text)=>{
        this.setState({
            emailId:text
        })
        }}
        />
         <TextInput 
        style={styles.loginbox}
        secureTextEntry={true}
        placeholder="Password"
        onChangeText={(text)=>{
        this.setState({
            password:text
        })
        }}
        />
        <TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]}
        onPress={()=>{this.userlogin(this.state.emailId,this.state.password)}}
        >
<Text style={styles.buttonText}>login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={()=>this.setState({isModalVisible:true})}
        >
<Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>


    </View>
    </View>

 );
 } 
}
const styles = StyleSheet.create({ 
    container: {
      flex: 1,
      backgroundColor:'#FFBF00',
    },
    heading:{
        fontSize:60,
        fontWeight:'bold',
    paddingBottom:30,
      color:'red'
    },
    loginbox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor:'#ff8a65',
        fontSize:20,
        margin:10,
        paddingLeft:10 
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        backgroundColor:'#EFDFBB',
        shadowColor:"#000",
        shadowOffset:{width:0,height:8},
        shadowOpacity:0.30,
        shadowRadius:10.32,
        elevation:16
    }  ,
    buttonText:{
color:"blue",
fontWeight:'200',
fontSize:20
    },
    ModalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"yellow",
        marginRight:30,
        marginLeft:30,
        marginTop:80,
        marginBottom:80
    },
    title:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:30,
        color:'#453abc',
        margin:50
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
    }
  });
                              

