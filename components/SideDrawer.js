import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase';

export default class SideDrawer extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                 <View style={{flex:0.8}}>
                     <DrawerItems {...this.props} />
                 </View>
                
                 <View style={{flex:0.2,justifyContent:'flex-end',paddingBottom:30}}>
                     <TouchableOpacity style={styles.button}
                     onPress={()=>{
                         this.props.navigation.navigate('WelcomeScreen');
                         firebase.auth().signOut();
                     }}>
                     
                         <Text>Logout</Text>
                     </TouchableOpacity>
                 </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    button:{
        height:30,
        width:'100%',
        justifyContent:'center',
        padding:10
    }
})