import React, { useState } from 'react'
import { View, Text, Pressable } from 'react-native'
import Button from '../components/Button'
import CardScreen from '../screens/CardScreen'
import Input from '../components/Input'

export default function TradeScreen(props) {
    const cardId = props.route.params
    const [portofolioCode, setPortfolioCode] = useState('')
    console.log(portofolioCode)


    const tradeCard = () => {
        fetch('https://tree-rn-server.herokuapp.com/move-card', {
            method: 'POST',
            "card_id": cardId,
            "portfolio_code": portofolioCode
        })
    }
    return (
        <View>

            <Input onTextChange={(value) => setPortfolioCode(value)} label='PORTFOLIO CODE IN HERE' />
            <Button onPress={() => tradeCard()}> Trade sCREEN B</Button>

        </View>
    )
}