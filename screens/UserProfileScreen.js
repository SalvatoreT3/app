import AsyncStorage from '@react-native-community/async-storage'
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useContext } from 'react/cjs/react.development'
import Button from '../components/Button'
import { AuthContext } from '../context/AuthContext'

export default function UserProfileScreen() {

    const [code, setCode] = useState('')
    
    const generateCode = () => {
        fetch('https://tree-rn-server.herokuapp.com/refresh-portfolio-code', {
            method: 'POST',
            Authorization: token
        })
            .then(res => res.json())
            .then(data => setCode(data.payload.portfolio_code))
        console.log('non va')
    }
    console.log(code)

    const { user } = useContext(AuthContext) 
    const { token } = useContext(AuthContext)
    /* const [user, setUser] = useState({})
    useEffect(() => {
        const getUser = async () => await AsyncStorage.getItem('AuthUser')
        setUser(getUser)
    },[]) */



    if (user) {
        return (
            <View style={{ marginTop: 50 }}>
                <Text>{user.email}</Text>
                <Text>{(code != '') ? code : user.portfolio_code}</Text>


                <Button
                    onPress={() => generateCode()}
                    disabled={!!code || !!user.portfolio_code}>Generate Code</Button>

            </View>
        )
    } else {
        return (
            <></>
        )
    }
}

