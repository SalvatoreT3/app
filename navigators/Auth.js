import React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import Login from "../screens/Login.js"
import Welcome from "../screens/Welcome.js"
import SignUp from "../screens/SignUp.js"

const Stack = createStackNavigator()

export default function Auth() {

    return (

        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    )
}