import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthContext } from '../context/AuthContext'
import CollectionScreen from '../screens/CollectionScreen'
import CardScreen from '../screens/CardScreen'

const AppStack = createStackNavigator()

export default function AppNavigator() {
    const { token } = useContext(AuthContext)

    return (
        <AppStack.Navigator
            initialRouteName={CollectionScreen}
        >
            <AppStack.Screen name="CollectionScreen" component={CollectionScreen} />
            <AppStack.Screen name="CardScreen" component={CardScreen} />

        </AppStack.Navigator>
    )
}