import React, { useState, useEffect } from 'react'
import { FlatList, View, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Button from '../components/Button'
import useFetch from '../hooks/useFetch'

export default function CollectionScreen() {

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
                            <Button>Go to card</Button>
                        </View>
                    )
                })
            }
        </ScrollView>

    )
}  


