import React from 'react'
import {View, Text} from 'react-native'

export default function CardScreen(card) {
    
    const cardRoot= card.route.params
    return (
        <View>
            <Text>{cardRoot.name}</Text>
            <Text>{cardRoot.game}</Text>
            <Text>{cardRoot.description}</Text>
        </View>
    )
}


