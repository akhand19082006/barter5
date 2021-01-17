import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import { createBottomTabNavigator, createTabNavigator } from 'react-navigation-tabs';
import WelcomeScreen from './screens/welcomeScreen';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
export default function App() {
  return (
  <AppContainer/>

  );
}
const switchNavigator=createSwitchNavigator({
  WelcomeScreen:{screen: WelcomeScreen},
  Drawer:{screen:AppDrawerNavigator}
})

const AppContainer = createAppContainer(switchNavigator)

