import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AuthNavigator from './AuthNavigator'
import MainNavigator from './MainNavigator'
import { AuthContext } from '../context/AuthContext'

const AppStack = createStackNavigator()

export default function AppNavigator() {
    const { token } = useContext(AuthContext)

   // se il valore loading di authcontext è true allora la componente ritorna null
    const{loading} =useContext(AuthContext)

    if(loading){
        return null
    } 
    // altrimenti va bene cosi com'è.

    return (
        <AppStack.Navigator
            initialRouteName={token ? "MainNavigator" : "AuthNavigator"}
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
