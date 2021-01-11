import React, { useState, useEffect, useContext } from 'react';

const HotelsContext = React.createContext()
const UpdateHotelContext = React.createContext()
const SelectedHotelContext = React.createContext()
const UpdateCurrencyContext = React.createContext()
const SelectedCurrencyContext = React.createContext()

export function useHotels() {
    return useContext(HotelsContext)
}

export function useUpdateHotels() {
    return useContext(UpdateHotelContext)
}

export function useSelectedHotel() {
    return useContext(SelectedHotelContext)
}

export function useUpdateCurrency() {
    return useContext(UpdateCurrencyContext)
}
export function useSelectedCurrency() {
    return useContext(SelectedCurrencyContext)
}


export function CalculationProvider({children}) {
    const change = false
    const [hotels, setHotels] = useState([])
    const [selectedHotel, setSelectedHotel] = useState('DDL')
    const [selectedCurrency, setSelectedCurrency] = useState('EUR')

    useEffect(() => {
        fetch('/api/hotels?format=json')
        .then(response => response.json())
        .then(setHotels)
    }, [])

    const updateHotel = hotel => {
        setSelectedHotel(hotel)
        // return alert(`You clicked ${hotel}.`);
    }

    const updateCurrency = currency => {
        setSelectedCurrency(currency)
    }

    return (
        <HotelsContext.Provider value={hotels}>
            <UpdateHotelContext.Provider value={updateHotel}>
                <SelectedHotelContext.Provider value={selectedHotel}>
                    <UpdateCurrencyContext.Provider value={updateCurrency}>
                        <SelectedCurrencyContext.Provider value={selectedCurrency}>
                            {children}
                        </SelectedCurrencyContext.Provider>
                    </UpdateCurrencyContext.Provider>
                </SelectedHotelContext.Provider>
            </UpdateHotelContext.Provider>
        </HotelsContext.Provider>
    )
}
