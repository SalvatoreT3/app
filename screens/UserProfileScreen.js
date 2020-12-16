import React from 'react'
import { View, Text } from 'react-native'
import { useContext } from 'react/cjs/react.development'
import { AuthContext } from '../context/AuthContext'

export default
    function UserProfileScreen() {

    const { token } = useContext(AuthContext)

    return (
        <View style={{ marginTop: 50 }}>
            <Text>Profilo utente</Text>
            <Text>{token}</Text>
        </View>
    )
}

