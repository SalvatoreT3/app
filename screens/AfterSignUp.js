import React from 'react'
import {View, Text, Button} from 'react-native'
import Header from '../components/Header'

export default  function AfterSignUp() {
    return (
        <View>
            
            <Text>THANKS</Text>
            <Text>
                Welcome to our app.
                 Before you sign up 
                 check your email for
                 the confirmation link 
                 we just emailed you.
            </Text>
            <Button title='LOGIN'/>
        </View>
    )
}

