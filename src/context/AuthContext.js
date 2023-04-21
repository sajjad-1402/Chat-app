import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

export const AuthContext = React.createContext()


export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate()

    const [loding, setLoding] = useState(true)
    const [user, setUser] = useState(false)

    useEffect(() => {
        auth.onAuthStateChanged((auth) => {
            setUser(auth)
            setLoding(false)
            if (user) navigate('/chat')
        })
    }, [navigate, user])
    return (
        <AuthContext.Provider value={user}>
            {!loding && children}
        </AuthContext.Provider>
    )
}
