import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import Title from '../components/Title'
import Button from '../components/Button'
import Spacer from '../components/Spacer'
import { layoutStyles } from '../styles/Layout'
import { rootNavigation } from '../Utility/navigation'
import { AuthContext } from '../context/AuthContext'

export default function DashboardScreen(props) {
    const { onLogout } = useContext(AuthContext)

    return (
        <View style={[layoutStyles.container, { flex: 1, justifyContent: 'space-between' }]}>
            <View>
                <Spacer size={10} />
                <Title label="Schermata per utente loggato" centerText />
            </View>

            <View>
                <Button onPress={onLogout}>Logout</Button>
                <Spacer size={20} />
            </View>

        </View>
    )
}
