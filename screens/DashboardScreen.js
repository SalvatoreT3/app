import React, { useContext, useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import Title from '../components/Title'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import { layoutStyles } from '../styles/Layout'
import { rootNavigation } from '../Utility/navigation'
import { AuthContext } from '../context/AuthContext'
import InfoBox from '../components/InfoBox'
import { CardsContext } from '../context/CardsContext'

export default function DashboardScreen(props) {
    
    const { onLogout } = useContext(AuthContext)
    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('https://tree-rn-server.herokuapp.com/get-cards', 'GET')
            .then(response => response.json())
            .then(data => setCards(data.payload.cards))
    }, [])

    return (
        <View style={[layoutStyles.container, { flex: 1, justifyContent: 'space-between' }]}>
            <View>
                <Spacer size={10} />
                <Title label="Schermata per utente loggato" centerText />
            </View>

            <InfoBox>
                Oggi e il giorno
            </InfoBox>
            <Text>{cards.length + ' carte'}</Text>
            <View>
                <Button onPress={onLogout}>Logout</Button>
                <Spacer size={20} />
            </View>



        </View>
    )
}
