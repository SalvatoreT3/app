import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {Appbar} from 'react-native-paper'
import Row from '../components/row'


export default function Header() {
    return (
        <View>
        <Appbar.Header>
           
            <Appbar.Content title="React App"/>
            
            <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
        </View>

    )
}

const styles = StyleSheet.create({
    icon: {
        height: 50,
        width: 50,
        borderColor: 'black',
        borderWidth: 2,
    }
})




