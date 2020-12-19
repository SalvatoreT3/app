import AsyncStorage from '@react-native-community/async-storage'
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useContext } from 'react/cjs/react.development'
import Button from '../components/Button'
import { AuthContext } from '../context/AuthContext'
import QRCode from 'react-native-qrcode-svg';



export default function UserProfileScreen() {

    const { user, token, setUser } = useContext(AuthContext)

    const generateCode =  async () => {
        try{
            const response = await api.post('refresh-portfolio-code')
            if(response.result){
                setUser({
                    ...user,
                    portfolio_code: response.payload.portfolio_code,
                })
            }else{
                console.log(response.errors[0])
            }
           }catch(err){
                console.log(err)
           }
       /*  fetch('https://tree-rn-server.herokuapp.com/refresh-portfolio-code', {
            method: 'POST',
            Authorization: token
        })
            .then(res => res.json())
            .then(data => {
                console.log('RESPONSE', data)
                if (data.result) {
                    setUser({
                        ...user,
                        portfolio_code: data.payload.portfolio_code,
                    })
                }

            })
 */
    }



    /* const [user, setUser] = useState({})
    useEffect(() => {
        const getUser = async () => await AsyncStorage.getItem('AuthUser')
        setUser(getUser)
    },[]) */

    if (user) {
        return (
            <View style={{ marginTop: 50 }}>
                <Text>{user.email}</Text>
                {
                    (user.portfolio_code) ?
                        <View>
                            <Text> {user.portfolio_code}</Text>
                            <QRCode value={ user.portfolio_code} />
                        </View>
                        :
                        <Button onPress={() => generateCode()}>
                            Generate Code
                        </Button>
                }

            </View>
        )
    } else {
        return null
    }

}

