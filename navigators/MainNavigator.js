import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DashboardScreen from '../screens/DashboardScreen'
import CollectionScreen from '../screens/CollectionScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CollectionNavigator from '../navigators/CollectionNavigator'
import UserProfileScreen from '../screens/UserProfileScreen'
import CardsProvider from '../context/CardsProvider'


const MainStack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function MainNavigator() {
  return (

    <CardsProvider>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={DashboardScreen} />
        <Tab.Screen name="CollectionNavigator" component={CollectionNavigator} />
        <Tab.Screen name="UserProfileScreen" component={UserProfileScreen} />
      </Tab.Navigator>
    </CardsProvider>

  )
}
