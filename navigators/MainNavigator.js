import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DashboardScreen from '../screens/DashboardScreen'

const MainStack = createStackNavigator()

export default function MainNavigator () {
  return (
    <MainStack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        // headerShown: false
        cardStyle: { paddingTop: 0 }
      }}
    >
      <MainStack.Screen name="Dashboard" component={DashboardScreen} />
    </MainStack.Navigator>
  )
}
