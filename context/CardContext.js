import React, { createContext, useContext, useCallback, useState, useEffect } from 'react'
import { CommonActions } from '@react-navigation/native'
import { AuthContext } from './AuthContext'
import api from '../Utility/api'
import { AsyncStorage } from 'react-native';


export const CardContext = createContext()

export default function CardProvider({ children }) {

    const [tradesCount, setTradesCount] = useState(0)
    const [cards, setCards] = useState([])
    const { token } = useContext(AuthContext)



    /* 
        function getCards(token) {
            
    
            fetch(('https://tree-rn-server.herokuapp.com/get-cards'), {
                method: 'GET',
                headers: { 'Authorization': token }
            })
                .then(response => response.json())
                .then(dati => setCards(dati.payload.cards))
                .catch(e => console.log(e))
        } */




    async function getCards(){
        
        try{
            const {result, payload, errors} = await api.get('get-cards')
            if(result) {
                setCards(payload.cards)
            } else {
                console.log(errors)
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <CardContext.Provider value={{ cards, getCards, setCards, tradesCount, setTradesCount }}>
            { children}
        </CardContext.Provider>
    )


}
