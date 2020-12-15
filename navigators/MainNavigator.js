import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DashboardScreen from '../screens/DashboardScreen'
import CollectionScreen from '../screens/CollectionScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CollectionNavigator from '../navigators/CollectionNavigator'


const MainStack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function MainNavigator() {
  return (

      
      <Tab.Navigator>
        <Tab.Screen name="Home" component={DashboardScreen} />
        <Tab.Screen name="CollectionNavigator" component={CollectionNavigator} />
      </Tab.Navigator>
   
  )
}
