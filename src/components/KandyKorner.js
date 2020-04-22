import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import "./KandyKorner.css"
import { ProductProvider } from "./products/ProductProvider"
import ProductList from "./products/ProductList"

export default () => (
    <>
        <h2>Kandy Korner</h2>

        <h2>Our Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <h2>Our Products</h2>
        <ProductProvider>
            <ProductList />
        </ProductProvider>
    </>
)