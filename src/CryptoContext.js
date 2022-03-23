import React, { useEffect } from 'react'
import { createContext, useContext, useState } from 'react'

const Crypto = createContext()

const CryptoContext = ({ children }) => {
    const [currency, setCurrency] = useState('IDR');
    const [symbol, setSymbol] = useState('Rp')

    useEffect(() => {
        if (currency === 'IDR') setSymbol('Rp');
        else if (symbol === 'USD') setSymbol('$');
    }, [currency])

    return (
        <Crypto.Provider value={{ currency, symbol, setCurrency }}>
            { children }
        </Crypto.Provider>
    )
}

export default CryptoContext

export const CryptoState = () => {
    return useContext(Crypto)
}