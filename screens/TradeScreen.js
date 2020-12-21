import React, { useEffect, useState, useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import Button from '../components/Button'
import { AuthContext } from '../context/AuthContext'
import { CardContext } from '../context/CardContext'
import { BarCodeScanner } from 'expo-barcode-scanner'
import Alert from '../components/Alert'

export default function TradeScreen(props) {

    const nav = props.navigation
    const card_id = props.route.params.id

    const {tradesCount ,setTradesCount} = useContext(CardContext)
    const { token, user } = useContext(AuthContext)
    const userCode = user.portfolio_code
    const [portfolio_code, setPortfolioCode] = useState('')

    const [error, setError] = useState(false)
    const [alertMessage, setAlertMessage] = useState('')
    const [messageOpen, setMessageOpen] = useState(false)

    const [hasPermission, setHasPermission] = useState(null)
    const [scanned, setScanned] = useState(false)
    const [readQR, setReadQR] = useState(false)


    useEffect(() => {

        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();

    }, []);



    const handleBarCodeScanned = ({ type, data }) => {

        setScanned(true);
        setPortfolioCode(data)
        alert(`Il codice è stato salvato , premi invia per inviare la carta`);
    }


    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }



    const qrScan = () => {

        setReadQR(true)
    }

    const tradeCard = () => {

        try {
            if (portfolio_code !== userCode) {
                fetch(`https://tree-rn-server.herokuapp.com/move-card`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token,
                    },
                    body: JSON.stringify({
                        "card_id": card_id,
                        "portfolio_code": portfolio_code
                    }),
                    method: 'POST'
                })
                    .then(response => response.json())
                    .then(response => {

                        if (response.result == true) {
                            setMessageOpen(true)
                            setError(false)
                            setAlertMessage('Card transferred succesfully')

                            setTradesCount(tradesCount + 1)
                        }
                        if (response.result == false) {
                            setMessageOpen(true)
                            setError('danger')
                            setAlertMessage(response.errors[0].message)
                        }

                    })
            } else {
                setMessageOpen(true)
                setError('danger')
                setAlertMessage(`Cant send cards to your self, use someone's else code`)
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
                <View style={{ justifyContent: 'center' }}>



                    <Pressable style={{ alignItems: "center" }} onPress={() => qrScan()} >
                        <Text>SCAN QRCODE</Text>
                    </Pressable>

                    {

                        (readQR) &&
                        <BarCodeScanner
                            style={{ height: 550, width: "auto" }}
                            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                            barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                        />
                    }

                    <Button onPress={() => tradeCard()}>SEND CARD</Button>

                    <Pressable style={{ alignItems: "center" }} onPress={() => nav.navigate('TradeScreenB', props.route.params)}>
                        <Text>NO QR CODE?</Text>
                    </Pressable>

                </View>
            </View>

        </>
    )
}