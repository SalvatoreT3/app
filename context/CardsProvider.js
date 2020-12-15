import React from 'react'
import AuthProvider from './CardsContext'

export default function Providers({ children }) {
    return (
        <>
            <CardsProvider>
                {children}
            </CardsProvider>
        </>
    )
}
