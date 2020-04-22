import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import "./KandyKorner.css"
import { ProductProvider } from "./products/ProductProvider"
import ProductList from "./products/ProductList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import EmployeeList from "./employees/EmployeeList"

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

        <h2>Our Team</h2>
        <EmployeeProvider>
            <LocationProvider>
                <EmployeeList />
            </LocationProvider>
        </EmployeeProvider>
    </>
)