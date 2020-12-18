import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import api from '../Utility/api'

export default function TradeScreen(props) {
    
    const [portofolioCode, setPortfolioCode] = useState('')
    const card_id = (props.route.params.id)
    

   /*  const tradeCard = () => {

        fetch('https://tree-rn-server.herokuapp.com/move-card',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(
                    {
                        "card_id": cardId,
                        "portfolio_code": portofolioCode
                    })
            })
           
    } */
    const tradeCard = async () =>{
        const response = await api.post('move-card',{card_id, portofolioCode})
    }
    return (
        <View>

            <Input onTextChange={(value) => setPortfolioCode(value)} label='PORTFOLIO CODE IN HERE' />
            <Button onPress={() => tradeCard()}> Trade Screen B</Button>

        </View>
    )
}