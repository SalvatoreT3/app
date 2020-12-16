import React from 'react'
import CardsProvider from './CardsContext'

export default function Providers({ children }) {
    return (
        <>
            <CardsProvider>
                {children}
            </CardsProvider>
        </>
    )
}
