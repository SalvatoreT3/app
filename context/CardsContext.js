import React, { createContext, useCallback, useState } from 'react'

export const CardsContext = createContext();

export default function CardsProvider({ children }){
     const [cardList, setCardList] = useState([])

    useEffect(() => {
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