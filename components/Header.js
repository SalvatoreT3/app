import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Row from './Row'


export default function Header(props) {
    return (
        <View style={styles.header}>
            <Row justify='spaceBetween'>

                <Text>TCG</Text>


                <View style={styles.space}>
                    <Text>{props.name}</Text>
                    {
                        props.name ?
                            <Image
                                source={require('../assets/face-shield.png')}
                                style={styles.icon}
                            /> 
                            : null}
                </View>


            </Row>
        </View>

    )
}

const styles = StyleSheet.create({
    icon: {
        height: 50,
        width: 50,

        marginLeft: 3,
    },
    header: {
        paddingTop: 20,
        paddingBottom: 5,
        backgroundColor: '#1C3061',
        width: '100%',
    },
    space: {
        marginLeft: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})




