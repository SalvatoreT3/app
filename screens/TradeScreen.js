import React from 'react'
import {View, Text, Pressable} from 'react-native'
import Button from '../components/Button'
import CardScreen from '../screens/CardScreen'

export default function TradeScreen(props) {
    const nav = props.navigation
    return (
        <View>
            <Text>{props.route.params.name}</Text>
            <Text>{props.route.params.game}</Text>
            <Text>{props.route.params.id}</Text>
            <Button>Trade Card</Button>
            <Pressable onPress={() => nav.navigate('TradeScreenB', props.route.params.id)}>
                <Text>No QR Code?</Text>
            </Pressable>
        </View>
    )
}

