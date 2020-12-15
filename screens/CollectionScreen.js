import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Button from '../components/Button'
import sizes from '../config/sizes'


export default function CollectionScreen({ navigation }) {

    const [cardList, setCardList] = useState([])

    useEffect(() => {
        fetch('https://tree-rn-server.herokuapp.com/get-cards', 'GET')
            .then(response => response.json())
            .then(data => setCardList(data.payload.cards))
    }, [])

    const styles = StyleSheet.create({
        cardList: {
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: sizes.unitSize * 10,
        },
        cardElement: {

            marginBottom: sizes.unitSize * 10,
        },
        cardBorder: {
            borderTopColor: 'black',
            borderTopWidth: 1,           
            marginBottom: sizes.unitSize * 5,
            marginTop: sizes.unitSize * 5,
            padding: sizes.unitSize * 5,
        },
        circularButton: {
            width: 120,
            height: 40,
            borderRadius: 25,
        },
        cardTitle: {
            fontSize: 20,
        }
    })

    return (
        <ScrollView style={styles.cardList}>
            {
                cardList.map((card) => {
                    return (
                        <View style={styles.cardBorder} key={card.id}>
                            <View style={styles.cardElement}>
                                <Text style={styles.cardTitle}>{card.name}</Text>
                                <Text>{card.game}</Text>
                            </View>
                            {/*<Button title='Go to Card' onPress={() => navigation.navigate('CardScreen', card)}/>*/}
                            <Button style={styles.circularButton} onPress={() => navigation.navigate('CardScreen', card)}>To card</Button>
                        </View>
                    )
                })
            }
        </ScrollView>

    )
}


