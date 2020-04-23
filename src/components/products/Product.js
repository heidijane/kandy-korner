import React, { useContext } from "react"
import { Button } from "reactstrap"
import { OrderContext } from "../orders/CustomerCandyProvider"

export default ({product}) => {
    const { addOrder } = useContext(OrderContext)

    const createNewOrder = (productId, message) => {
        const customerId = parseInt(localStorage.getItem("kandy_customer"))
        const parsedProductId = parseInt(productId)
        const newOrderObj = {
            customerId: customerId,
            productId: parsedProductId
        }
        addOrder(newOrderObj).then(window.alert(message))
    }

    return (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <p className="product__type">{product.productType.name}</p>
        <p className="product__price">{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2}).format(product.price)} per unit</p>
        <Button 
            onClick={
            () => {
            createNewOrder(product.id, `${product.name} added to cart!`)
            }
            }>Purchase</Button>
    </section>
    )
}