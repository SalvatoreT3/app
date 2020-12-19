import React, {useEffect, useState, useContext} from 'react'
import {View, Text} from 'react-native'
import Button from '../components/Button'
import {AuthContext} from '../context/AuthContext'
import { BarCodeScanner } from 'expo-barcode-scanner'
import Alert from '../components/Alert'

export default function TradeScreen(props, {navigate}) {
    const nav = props.navigation
    const card_id = props.route.params.id

    const { token } = useContext(AuthContext)
    
    const[portfolio_code, setPortfolioCode] = useState('')
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
        fetch(`https://tree-rn-server.herokuapp.com/move-card`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: token,
            },
            body: JSON.stringify({
                "card_id": card_id,
                "portfolio_code": portofolio_code
            }),
            method: 'POST'
        })
            .then(response => response.json())
            .then(response => {

                if (response.result == true) {
                    setMessageOpen(true)
                    setError(false)
                    setAlertMessage('Il trasferimento è avvenuto con successo')
                }
                if (response.result == false) {
                    setMessageOpen(true)
                    setError('danger')
                    setAlertMessage(resp.errors[0].message)
                }

            })
    }

    const backToList = () => {
        props.navigation.navigate('CollectionScreen')
    }
    
    return (
        <>
  <Alert open={messageOpen} message={alertMessage} onClose={() => { error ? setMessageOpen() : backToList() }} typology={error ? 'danger' : 'success'} /> 
        <View style={{marginTop: 200}}>
            <View style={{ justifyContent: 'center' }}>
                
                <Button onPress={() => qrScan()}>SCAN QR CODE</Button>

                {
                    (readQR) &&
                    <BarCodeScanner
                        style={{ height: 200, width: 400, }}
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                        
                    />
                }

                <Button onPress={() => tradeCard()}>SEND CARD</Button>
                <Button onPress={()=> nav.navigate('TradeScreenB', props.route.params)}>NO QR CODE?</Button>
            </View>
        </View>

    </>
    )
}

