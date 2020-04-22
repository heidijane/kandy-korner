import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const ProductContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const ProductProvider = (props) => {
    const [products, setProducts] = useState([])

    const getProducts = () => {
        return fetch("http://localhost:8088/products?_expand=productType")
            .then(res => res.json())
            .then(setProducts)
    }

    const addProduct = product => {
        return fetch("http://localhost:8088/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
            .then(getProducts)
    }

    useEffect(() => {
        getProducts()
    }, [])

    useEffect(() => {
        console.log("****  PRODUCT APPLICATION STATE CHANGED  ****")
    }, [products])

    return (
        <ProductContext.Provider value={{
            products, addProduct
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}