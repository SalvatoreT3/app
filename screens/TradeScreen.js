import React from 'react'
import {View, Text, Pressable} from 'react-native'
import Button from '../components/Button'
import CardScreen from '../screens/CardScreen'

export default function TradeScreen(props) {
    const nav = props.navigation
    const id = props.route.params.id
    
    return (
        <View>
            <Text>{props.route.params.name}</Text>
            <Text>{props.route.params.game}</Text>
            <Text>{props.route.params.id}</Text>
            <Button>Trade Card</Button>
            <Pressable onPress={() => nav.navigate('TradeScreenB', props.route.param)}>
                <Text>No QR Codee?</Text>
            </Pressable>
        </View>
    )
}

