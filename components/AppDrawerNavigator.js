import React, { Component } from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import { AppTabNavigator } from './AppTabNavigator';
import SideDrawer from './SideDrawer';
import SettingScreen  from '../screens/SettingScreen'
import ItemDonateScreen from '../screens/ItemDonateScreen';
 export const AppDrawerNavigator = createDrawerNavigator({
     Home:{
         screen:AppTabNavigator
     },
     Setting:{
         screen:SettingScreen
     },
     MyDonations:{
         screen:ItemDonateScreen
     }
     
 },
 {
     contentComponent:SideDrawer
 },
 {
     initialRouteName:'Home'
 }
 )