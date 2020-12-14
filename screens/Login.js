import React from "react";
import { Text, View } from 'react-native'
import Row from "../components/Row.js";
import Header from '../components/Header'
import Input from '../components/Input'
import Spacer from '../components/Spacer'


export default function Login() {
    return (
        <View>
            <Row>
                <Header />

            </Row>
                <Spacer size={5}/>
                <Input />
               
        </View>
    )
}