import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import Row from "../components/Row.js";
import Header from '../components/Header'

export default function Welcome() {
    return (
        <>
            <Header/>
            <View>
                <Text>Benvenuto</Text>
            </View>
            <Row justify="space-between">
                <Text>Benvenuto</Text>
                <Text>Utente</Text>
            </Row>
        </>
    )
}