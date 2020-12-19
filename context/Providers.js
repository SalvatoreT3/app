import React from 'react'
import AuthProvider from './AuthContext'
import CardProvider from "./CardContext.js"

export default function Providers({ children }) {
    return (
        <>
            <AuthProvider>
                <CardProvider>
                    {children}
                </CardProvider>
            </AuthProvider>
        </>
    )
}
