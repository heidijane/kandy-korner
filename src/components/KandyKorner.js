import React from "react"
import { LocationProvider } from "./locations/LocationProvider"
import LocationList from "./locations/LocationList"
import "./KandyKorner.css"

export default () => (
    <>
        <h2>Kandy Korner</h2>

        <h2>Our Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)