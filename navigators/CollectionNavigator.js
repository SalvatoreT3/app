import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthContext } from '../context/AuthContext'
import CollectionScreen from '../screens/CollectionScreen'
import CardScreen from '../screens/CardScreen'
import TradeScreen from '../screens/TradeScreen'

const AppStack = createStackNavigator()

export default function CollectionNavigator() {
    const { token } = useContext(AuthContext)

    return (
        <AppStack.Navigator
            initialRouteName={CollectionScreen}            
        >
            <AppStack.Screen name="CollectionScreen" component={CollectionScreen} options={{headerLeft: null, title:'TCG'}}/>
            <AppStack.Screen name="CardScreen" component={CardScreen} options={{ title:'TCG'}}/>
            <AppStack.Screen name = "TradeScreen" component={TradeScreen} options={{title:'TCG'}}/>

        </AppStack.Navigator>
    )
}