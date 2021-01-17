import React from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ItemRequestScreen from '../screens/ItemRequestScreen'
import ItemDonateScreen from '../screens/ItemDonateScreen'

export const AppTabNavigator= createBottomTabNavigator({
    DonateBooks:{
        screen :ItemDonateScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/home.png")} style={{width:20,height:20}} />,
            tabBarLabel:"Home Screen"
        }
    },
    RequestBook:{
        screen :ItemRequestScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/exchange.jpg")} style={{width:20,height:20}} />,
            tabBarLabel:"Exchange"
        }
    }
})