import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'
import { AuthContext } from '../context/AuthContext'

const AppStack = createStackNavigator()

export default function AppNavigator() {
    const { user } = useContext(AuthContext)

   
    return (
        <AppStack.Navigator
            initialRouteName={user ? "MainNavigator" : "AuthNavigator"}
            screenOptions={{
                headerShown: false,
                cardStyle: { paddingTop: 0 },
            }}
        >
            <AppStack.Screen name="AuthNavigator" component={AuthNavigator} />
            <AppStack.Screen name="MainNavigator" component={MainNavigator} />

        </AppStack.Navigator>
    )
}
