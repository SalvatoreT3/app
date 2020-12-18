import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import Button from '../components/Button'
import CardScreen from '../screens/CardScreen'
import Input from '../components/Input'
import api from '../Utility/api'

export default function TradeScreen(props) {
    const cardId = props.route.params.id
    const [portofolioCode, setPortfolioCode] = useState('')
    
    

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
    const tradeCard = () =>{
        api.post('https://tree-rn-server.herokuapp.com/move-card',{cardId, portofolioCode})
        console.log('test')
        console.log('PORTFOLIO: '+portofolioCode)
        console.log('ID CARTA: '+cardId)
    }
    return (
        <View>

            <Input onTextChange={(value) => setPortfolioCode(value)} label='PORTFOLIO CODE IN HERE' />
            <Button onPress={() => tradeCard()}> Trade sCREEN B</Button>

        </View>
    )
}