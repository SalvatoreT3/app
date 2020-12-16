import React from 'react'
import {View, Text} from 'react-native'
import Button from '../components/Button'
import CardScreen from '../screens/CardScreen'

export default function TradeScreen(card) {
    console.log(card)
    return (
        <View>
            <Text>{card.route.params.name}</Text>
            <Text>{card.route.params.game}</Text>
            <Text>{card.route.params.description}</Text>
            <Button>Trade Card</Button>
        </View>
    )
}

