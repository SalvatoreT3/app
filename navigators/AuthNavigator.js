import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

const AuthStack = createStackNavigator()

export default function AuthNavigator () {
  return (
    <AuthStack.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        // headerShown: false
        cardStyle: { paddingTop: 0 }
      }}
    >
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  )
}
