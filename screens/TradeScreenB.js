import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import { useContext } from 'react/cjs/react.development'
import Button from '../components/Button'
import Input from '../components/Input'
import api from '../Utility/api'
import {AuthContext} from '../context/AuthContext'

export default function TradeScreen(props) {
    
    const{token} = useContext(AuthContext)
    const [portofolio_code, setPortfolioCode] = useState('')
    const card_id = (props.route.params.id)
    
    const tradeCard = async () =>{
       try{
        const response = await api.post('move-card', {card_id, portofolio_code})
       }catch(err){
            console.log(err)
       }
    }

/*      const tradeCard = () => {

        fetch('https://tree-rn-server.herokuapp.com/move-card',
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token,
                },
                method: "POST",
                body: JSON.stringify(
                    {
                        "card_id": card_id,
                        "portfolio_code": portofolioCode
                    })
            })
            .then(response => response.json())
           
    }  */
  /*   const tradeCard = async () =>{
        const response = await api.post('move-card',{card_id, portofolioCode})
    } */
    return (
        <View>

            <Input onTextChange={(value) => setPortfolioCode(value)} label='PORTFOLIO CODE IN HERE' />
            <Button onPress={() => tradeCard()}> Trade Screen B</Button>

        </View>
    )
}