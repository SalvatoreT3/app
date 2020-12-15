import React, { useState, useEffect } from 'react'
import {  View, Text, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


export default function CollectionScreen({navigation}) {

    const [cardList, setCardList] = useState([])

    useEffect(() => {
        fetch('https://tree-rn-server.herokuapp.com/get-cards', 'GET')
            .then(response => response.json())
            .then(data => setCardList(data.payload.cards))
    }, [])

    return (
        <ScrollView>
            {
                cardList.map((card)=>{
                    return(
                        <View key={card.id}>
                            <Text>{card.name}</Text>
                            <Text>{card.game}</Text>
                            <Text>{card.description}</Text>
                            <Button title='Go to Card' onPress={() => navigation.navigate('CardScreen')}/>
                        </View>
                    )
                })
            }
        </ScrollView>

    )
}


