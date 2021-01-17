import React from 'react'
import {Image} from 'react-native'
import BookDonateScreen from '../screens/BookDonateScreen'
import { createStackNavigator } from 'react-navigation-stack'
import RecieverDetailsScreeen from '../screens/RecieverDetailsScreen'
export const AppStackNavigator= createStackNavigator({
    BookDonateList:{
        screen :BookDonateScreen,
        navigationOptions:{
            headerShown:false
        }
    },
    RecieverDetails:{
        screen :RecieverDetailsScreeen,
        navigationOptions:{
            headerShown:false
        }
    },

 },
 {
     initialRouteName:'BookDonateList'
 }
)