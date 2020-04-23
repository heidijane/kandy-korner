import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import "./KandyKorner.css"
import { ProductProvider } from "./products/ProductProvider"
import ProductList from "./products/ProductList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import EmployeeList from "./employees/EmployeeList"
import { OrderProvider } from "../orders/CustomerCandyProvider"

export default () => (
    <>
        <LocationProvider>
            <ProductProvider>
                <EmployeeProvider>
                    <OrderProvider>

                        <h2>Our Locations</h2>
                        <LocationList />
                        <h2>Our Products</h2>
                        <ProductList />
                        <h2>Our Team</h2>
                        <EmployeeList />

                    </OrderProvider>
                </EmployeeProvider>
            </ProductProvider>
        </LocationProvider>
    </>
)