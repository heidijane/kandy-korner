import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import "./KandyKorner.css"
import { ProductProvider } from "./products/ProductProvider"
import ProductList from "./products/ProductList"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import EmployeeList from "./employees/EmployeeList"
import { OrderProvider } from "./orders/CustomerCandyProvider"
import ViewOrderButton from "./orders/ViewOrderButton"
import CustomerList from "./customers/CustomerList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { LocationProductProvider } from "./locations/LocationProductProvider"

export default () => (
    <>
        <LocationProvider>
            <ProductProvider>
                <EmployeeProvider>
                    <OrderProvider>
                        <CustomerProvider>
                            <LocationProductProvider>

                                <ViewOrderButton />
                                <h2>Our Locations</h2>
                                <LocationList />
                                <h2>Our Products</h2>
                                <ProductList />
                                <h2>Our Team</h2>
                                <EmployeeList />
                                <h2>Our Customers</h2>
                                <CustomerList />
                                
                            </LocationProductProvider>
                        </CustomerProvider>
                    </OrderProvider>
                </EmployeeProvider>
            </ProductProvider>
        </LocationProvider>
    </>
)