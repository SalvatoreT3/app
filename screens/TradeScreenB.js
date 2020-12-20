import React, { useState } from 'react'
import { View } from 'react-native'
import { useContext } from 'react/cjs/react.development'
import Button from '../components/Button'
import Input from '../components/Input'
import { AuthContext } from '../context/AuthContext'
import Alert from '../components/Alert'

export default function TradeScreen(props) {

    const { token, user } = useContext(AuthContext)

    const [messageOpen, setMessageOpen] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [error, setError] = useState(false)

    const [portofolio_code, setPortfolioCode] = useState('')
    const card_id = (props.route.params.id)
    const userCode = user.portfolio_code



    const tradeCard = () => {

        try {
            if (portofolio_code !== userCode) {
                fetch('https://tree-rn-server.herokuapp.com/move-card',
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: token,
                        },
                        method: "POST",
                        body: JSON.stringify(
                            {
                                "card_id": card_id,
                                "portfolio_code": portofolio_code
                            })
                    })
                    .then(response => response.json())
                    .then(resp => {

                        if (resp.result == true) {
                            setMessageOpen(true)
                            setError(false)
                            setAlertMessage('Card transferred succesfully')
                        }
                        if (resp.result == false) {
                            setMessageOpen(true)
                            setError('danger')
                            setAlertMessage(resp.errors[0].message)
                            console.log(resp.errors[0].message)
                        }
                    })
            } else {
                setMessageOpen(true)
                setError('danger')
                setAlertMessage(`Cant send cards to your self, use someone else code`)
            }
        } catch (error) {
            console.log(error)
        }

    }



    const backToList = () => {
        props.navigation.navigate('CollectionScreen')
    }
   

    
    return (
        <>
            <Alert open={messageOpen} message={alertMessage} onClose={() => { error ? setMessageOpen() : backToList() }} typology={error ? 'danger' : 'success'} />
            <View style={{ marginTop: 200 }}>

                <Input onTextChange={(value) => setPortfolioCode(value)} label='PORTFOLIO CODE IN HERE' />
                <Button onPress={() => tradeCard()}> Trade Screen B</Button>

            </View>
        </>
    )
}