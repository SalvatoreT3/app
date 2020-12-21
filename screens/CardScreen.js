import React from 'react'
import { View, Text,Image } from 'react-native'
import Button from '../components/Button'

import Title from '../components/Title'
import InfoBox from '../components/InfoBox'
import Spacer from '../components/Spacer'
import { layoutStyles } from '../styles/Layout'

export default function CardScreen(props) {


    const nav = props.navigation
    const card = props.route.params
    
    return (
        <View style={[layoutStyles.container, { flex: 1, justifyContent: 'space-between', marginBottom: 10 }]}>
            <View>
                <Spacer size={5} />
                <Title label={card.name} centerText />
                <Title label={card.game} centerText />
            </View>

            <Text>{JSON.parse(card.description)}</Text>
            <View style={{ alignSelf: "center", height: 150, fontSize:22}}>
                <View style={layoutStyles.img}>
                    <Image source={require("./../assets/icon.png")} style={layoutStyles.image} resizeMode="center"></Image>
                </View>
            </View>
            
            <Button onPress={() => nav.navigate('TradeScreen', card)}>Trade Card</Button>
        </View>
    )
}


