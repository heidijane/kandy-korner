import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import Product from "./Product"
import "./Products.css"

export default () => {
    const { products } = useContext(ProductContext)

    return (
        <div className="products">
        {
            products.map(product => <Product key={product.id} product={product} />)
        }
        </div>
    )
}