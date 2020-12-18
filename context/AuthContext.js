import React, { createContext, useCallback, useState, useEffect } from 'react'
import { setToken } from '../Utility/api'
import AsyncStorage from '@react-native-community/async-storage'
import { rootNavigation } from '../Utility/navigation'
import { CommonActions } from '@react-navigation/native'

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
  const [user, setUser] = useState()
  const [token, setTokenProv] = useState()
  // qui metto uno state loading che è true se l'app si sta caricando, false altrimenti
  const [loading, setLoading] = useState(true)
  // Esecuzuone fatta la prima volta e basta
  useEffect(() => {
    // leggo il valore di AuthToken da AsyncStorage
    const storedToken = AsyncStorage.getItem('AuthToken')

    // eseguo setToken e setTokenProv con il valore letto
    setToken(storedToken)
    setTokenProv(storedToken)
    // leggo il valore AuthUser da AsyncStorage
    const storedAuthUser = AsyncStorage.getItem('AuthUser')
    // eseguo setUser con il valore letto
    setUser(storedAuthUser)
    // eseguo setLoading e lo imposto a false
    setLoading(false)
  }, [loading])

  //DA DOVE ARRIVA userData?
  const manageUserData = useCallback(async (userData) => {
    console.log(userData)
    setUser(userData.user)
    setToken(userData.token)
    setTokenProv(userData.token)
    await AsyncStorage.setItem('AuthToken', userData.token)
    await AsyncStorage.setItem('AuthUser', JSON.stringify(userData.user))
  }, [])

  const onLogout = useCallback(async () => {
    setUser(null)
    setToken('')
    setTokenProv('')
    await AsyncStorage.removeItem('AuthToken') // cancello token dalla memoria

    // cancello la storia di navigazione e vado sulla schermata di autenticazione
    rootNavigation.current.dispatch(CommonActions.reset({
      index: 0,
      routes: [{ name: "AuthNavigator" }]
    }))
  }, [])

  return (
    <AuthContext.Provider value={{ token, setTokenProv, user, manageUserData, onLogout }}>
      {children}
    </AuthContext.Provider>
  )
}
