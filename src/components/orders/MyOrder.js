import React from "react"
import { useContext } from "react"
import { OrderContext } from "./CustomerCandyProvider"
import { Table } from "reactstrap"


export default () => {
    const { orders } = useContext(OrderContext)

    const currentUserId = parseInt(localStorage.getItem("kandy_customer"))

    //get the orders for the logged in user
    const currentUserOrders = orders.filter(order => order.customerId === currentUserId)
    return (
        <div className="orders">
            <Table>
                <thead>
                    <tr>
                        <td>Item</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
            {
                currentUserOrders.map(order => {
                    // return (<ListGroup horizontal key={"order_"+order.id}>
                    //     <ListGroupItem key={"order_"+order.id+"_name"}>{order.product.name}</ListGroupItem>
                    //     <ListGroupItem key={"order_"+order.id+"_price"}>{order.product.price}</ListGroupItem>
                    // </ListGroup>)
                    return (
                    
                    <tr key={"order_"+order.id}>
                    <td>{order.product.name}</td>
                    <td>{order.product.price}</td>
                    </tr>
                    )
                })
            }
            </tbody>
            </Table>
        </div>
    )
}