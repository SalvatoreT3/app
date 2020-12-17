import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useContext } from 'react/cjs/react.development'
import Button from '../components/Button'
import {AuthContext}  from '../context/AuthContext'

export default function UserProfileScreen() { 
    
    const [code, setCode] = useState('')

    const generateCode = () =>{
        fetch('https://tree-rn-server.herokuapp.com/refresh-portfolio-code',{
            method: 'POST',
            Authorization: token
        })
        .then(res => res.json())
        .then(data => setCode(data))
    
    }
    console.log(code)

    const {user} =useContext(AuthContext)
    
    const{token} = useContext(AuthContext)
   if(token){
    return (
        <View style={{ marginTop: 50 }}>
            <Text>{user.email}</Text> 
            <Text>{user.portfolio_code}</Text> 
            

            <Button onPress={() => generateCode()}>Generate Code</Button>

        </View>
    )
   }else{
       return(
           <></>
       )
   }
}

