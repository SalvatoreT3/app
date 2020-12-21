import React, { useContext, useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Title from '../components/Title'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import { layoutStyles } from '../styles/Layout'
import { AuthContext } from '../context/AuthContext'
import { CardContext } from '../context/CardContext'
import InfoBox from '../components/InfoBox'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'



export default function DashboardScreen(props) {

    const { token, onLogout } = useContext(AuthContext)
    const { cards, getCards, tradesCount } = useContext(CardContext)
    const isFocused = useIsFocused()

    const today = new Date()
    const date = today.getDate()
    const month = today.getMonth() + 1
    const fulldate = date + '/' + month

    useEffect(() => {
        if (isFocused) getCards(token)
    }, [isFocused])

    return (
        <View style={[layoutStyles.container, { flex: 1, justifyContent: 'space-between', marginBottom: 10 }]}>
            <View>
                <Spacer size={20} />
                <Title label="BENVENUTO" centerText />
            </View>

            <View style={{ alignSelf: "center" }}>
                <View style={layoutStyles.profileImage}>
                    <Image source={require("./../assets/face-shield.png")} style={layoutStyles.image} resizeMode="center"></Image>
                </View>
            </View>

            <View>
                <Text style={[styles.text, { fontSize: 50, color: '#ffff' }]}>Oggi è il {fulldate}</Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={[styles.statsBox, { borderColor: "#DFD8C8" }]}>
                    <Text style={[styles.text, { fontSize: 50, color: '#ffff' }]}>{cards.length}</Text>
                    <Text style={[styles.text, styles.subText]}>Carta in lista</Text>
                </View>

                <View style={[styles.statsBox, { borderColor: "#DFD8C8" }]}>
                    <Text style={[styles.text, { fontSize: 50, color: '#ffff' }]}>{tradesCount}</Text>
                    <Text style={[styles.text, styles.subText]}>Scambi efettuati</Text>
                </View>
            </View>

            <Spacer size={10} />
            <View><Button onPress={onLogout}>Logout</Button><Spacer size={20} /></View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF"
    },
    text: {
        //fontFamily: "HelveticaNeue",
        color: "#52575D"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined,
        borderRadius: 15,
    },
    titleBar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 24,
        marginHorizontal: 16
    },
    subText: {
        fontSize: 12,
        color: "#ffff",
        textTransform: "uppercase",
        fontWeight: "500",
        marginTop: 5,
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden",
        backgroundColor: '#F7B40A',

    },

    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        flex: 1,
        margin: 5,
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: '#F7B40A',
        height: 150,
    },


    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },

});