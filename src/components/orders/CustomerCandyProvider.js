import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const OrderContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const OrderProvider = (props) => {
    const [orders, setOrders] = useState([])

    const getOrders = () => {
        return fetch("http://localhost:8088/customerCandy?_expand=product")
            .then(res => res.json())
            .then(setOrders)
    }

    const addOrder = order => {
        return fetch("http://localhost:8088/customerCandy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
            .then(getOrders)
    }

    useEffect(() => {
        getOrders()
    }, [])

    useEffect(() => {
        console.log("****  CANDY ORDER APPLICATION STATE CHANGED  ****")
    }, [orders])

    return (
        <OrderContext.Provider value={{
            orders, addOrder
        }}>
            {props.children}
        </OrderContext.Provider>
    )
}