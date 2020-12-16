import React from 'react'
import {View, Text} from 'react-native'
import Button from '../components/Button'

export default function CardScreen(props) {


    const nav = props.navigation
    const card = props.route.params
    
    return (
        <View>
            <Text>{card.name}</Text>
            <Text>{card.game}</Text>
            <Text>{card.description}</Text>
            <Button onPress={() => nav.navigate('TradeScreen', card)}>Trade Card</Button>
        </View>
    )
} 


