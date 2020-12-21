import AsyncStorage from '@react-native-community/async-storage'
import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { useContext } from 'react/cjs/react.development'
import Button from '../components/Button'
import { layoutStyles } from '../styles/Layout'
import sizes from '../config/sizes'
import Spacer from '../components/Spacer'
import Title from '../components/Title'
import { AuthContext } from '../context/AuthContext'
import QRCode from 'react-native-qrcode-svg';



export default function UserProfileScreen() {

    const { user, token, setUser } = useContext(AuthContext)

    const generateCode = async () => {
        try {
            const response = await api.post('refresh-portfolio-code')
            if (response.result) {
                setUser({
                    ...user,
                    portfolio_code: response.payload.portfolio_code,
                })
            } else {
                // console.log(response.errors[0])
            }
        } catch (err) {
            // console.log(err)
        }

    }

    if (user) {
        return (
            <View style={[layoutStyles.container, { flex: 1, justifyContent: 'space-between', marginBottom: 10 }]}>
                <Spacer size={5} />
                <View>
                    <Title label={user.username} centerText />
                </View>
                <View style={{ alignSelf: "center" }}>
                    <View style={layoutStyles.profileImage}>
                        <Image source={require("./../assets/face-shield.png")} style={layoutStyles.image} resizeMode="center"></Image>
                    </View>
                </View>
                {
                    (user.portfolio_code) ?
                        <>
                            <View style={{ alignSelf: "center" }}>
                                <Text style={{ fontSize: 30 }}> {user.portfolio_code}</Text>

                            </View>
                            <View style={{ alignSelf: "center" }}>

                                <QRCode value={user.portfolio_code} />
                            </View>
                        </>

                        :

                        <Button onPress={() => generateCode()}>
                            Generate Code
                        </Button>
                }
                <Spacer size={10} />
            </View>
        )
    } else {
        return null
    }

}