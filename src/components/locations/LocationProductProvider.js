import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const LocationProductContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const LocationProductProvider = (props) => {
    const [locationProducts, setLocationProducts] = useState([])

    const getLocationProducts = () => {
        return fetch("http://localhost:8088/locationProducts?_expand=product")
            .then(res => res.json())
            .then(setLocationProducts)
    }

    const addLocationProduct = locationProduct => {
        return fetch("http://localhost:8088/locationProducts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationProduct)
        })
            .then(getLocationProducts)
    }

    const deleteLocationProduct = locationProductId => {
        return fetch(`http://localhost:8088/locationProducts/${locationProductId}`, {
            method: "DELETE"
        })
            .then(getLocationProducts)
    }

    useEffect(() => {
        getLocationProducts()
    }, [])

    useEffect(() => {
        console.log("****  LOCATION APPLICATION STATE CHANGED  ****")
    }, [locationProducts])

    return (
        <LocationProductContext.Provider value={{
            locationProducts, addLocationProduct, deleteLocationProduct
        }}>
            {props.children}
        </LocationProductContext.Provider>
    )
}