import { useIsFocused } from '@react-navigation/native'
import React, { useEffect, useContext } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Button from '../components/Button'
import sizes from '../config/sizes'
import { Feather } from '@expo/vector-icons';
import { CardContext } from '../context/CardContext'
import { AuthContext } from '../context/AuthContext'


export default function CollectionScreen({ navigation }) {
    const urlImg = './../assets/Pokemon/';

    const { cards, getCards } = useContext(CardContext)
    const { user } = useContext(AuthContext)
    //TORNA TRUE O FALSE SE SIAMO DENTRO LA SCHERMATA
    const isFocused = useIsFocused()

    useEffect(() => {
        if (isFocused) getCards()
    }, [isFocused])

    return (
        <ScrollView style={styles.cardList}>
            {
                cards.map((card) => {
                    return (
                        <View key={card.id} style={styles.statsContainer}>

                            <View style={{ marginRight: 15 }}>
                                <Image source={require('./../assets/icon.png')} style={styles.img} resizeMode="center"></Image>
                            </View>

                            <View style={{ width: '35%' }}>
                                <Text style={styles.cardTitle, { color: 'orange', }}>{card.name}</Text>
                                <Text style={styles.cardTitle, { fontSize: 18, }}>{card.game}</Text>
                            </View>

                            <View >
                                <Button style={styles.circularButton} onPress={() => navigation.navigate('CardScreen', card)}>
                                    <Feather name="arrow-right-circle" size={34} color="grey" />
                                </Button>
                            </View>
                        </View>
                    )
                })
            }
        </ScrollView>

    )
}


const styles = StyleSheet.create({
    cardList: {
        flex: 1,
        width: '100%',
        marginLeft: 5,
        marginRight: 15,
        marginTop: sizes.unitSize * 0,

    },

    circularButton: {
        width: 100,
        height: 40,
        borderRadius: 150,
        margin: 5,
        backgroundColor: '#FFFFFF',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        margin: 5,
    },
    img: {
        width: 100,
        height: 90,
        borderRadius: 10,
        marginRight: 5
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 5,
        padding: 5,
        margin: 5,
        backgroundColor: '#FFFFFF',
    },

    statsBox: {
        flex: 1,
        margin: 15,
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: '#F7B40A',
        height: 250,
    }
})

