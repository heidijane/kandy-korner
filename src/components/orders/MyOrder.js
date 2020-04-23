import React from "react"
import { useContext } from "react"
import { OrderContext } from "./CustomerCandyProvider"
import { Table } from "reactstrap"
import "./MyOrder.css"


export default () => {
    const { orders } = useContext(OrderContext)

    const currentUserId = parseInt(localStorage.getItem("kandy_customer"))

    //get the orders for the logged in user
    const currentUserOrders = orders.filter(order => order.customerId === currentUserId)

    //aggregate the data
    const aggregatedArray = []

    currentUserOrders.forEach(order => {
        //check to see if it is in the aggregatedArray already
        const matchedObj = aggregatedArray.find(arr => arr.productId === order.productId)
        if (matchedObj) {
            //item is in array already, add it to what we already have
            matchedObj.orderQty++
        } else {
            //not in array yet, add it!
            order.orderQty = 1
            aggregatedArray.push(order)
        }
    })

    //get the total for all the items
    let orderTotal = 0
    aggregatedArray.forEach(order => {
        orderTotal = ((order.product.price*order.orderQty)+orderTotal)
    })

    return (
        <div className="orders">
            <Table>
                <thead>
                    <tr>
                        <td>Item</td>
                        <td className="align-center">Quantity</td>
                        <td className="align-right">Price/unit</td>
                        <td className="align-right">Total</td>
                    </tr>
                </thead>
                <tbody>
            {
                aggregatedArray.map(order => {
                    return (
                    
                    <tr key={"order_"+order.id}>
                    <td>{order.product.name}</td>
                    <td className="align-center">{order.orderQty}</td>
                    <td className="align-right">{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2}).format(order.product.price)}</td>
                    <td className="align-right">{new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2}).format((order.product.price*order.orderQty))}</td>
                    </tr>
                    )
                })
            }
            </tbody>
            <tfoot>
                <tr>
                <td>Order Total</td>
                <td colSpan="3" className="align-right">
                {new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2}).format(orderTotal)}
                </td>
                </tr>
            </tfoot>
            </Table>
        </div>
    )
}