import React, { createContext, useCallback, useState, useEffect } from 'react'

export const CardsContext = createContext();

export default function CardsProvider({ children }){
     const [cardList, setCardList] = useState([]) 
     

    const cards = useEffect(() => {
        fetch('https://tree-rn-server.herokuapp.com/get-cards', 'GET')
            .then(response => response.json())
            .then(data => setCardList(data.payload.cards))
    }, [])

    
    
    return (
        <CardsContext.Provider value={{ cardList}}>
          {children}
        </CardsContext.Provider>
      )
 
}

