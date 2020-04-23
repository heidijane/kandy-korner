import React from "react"
import { useContext } from "react"
import { OrderContext } from "./CustomerCandyProvider"
import { ListGroup, ListGroupItem } from "reactstrap"


export default () => {
    const { orders } = useContext(OrderContext)

    const currentUserId = parseInt(localStorage.getItem("kandy_customer"))

    //get the orders for the logged in user
    const currentUserOrders = orders.filter(order => order.customerId === currentUserId)
    return (
        <div className="orders">
            <table>
            {
                currentUserOrders.map(order => {
                    // return (<ListGroup horizontal key={"order_"+order.id}>
                    //     <ListGroupItem key={"order_"+order.id+"_name"}>{order.product.name}</ListGroupItem>
                    //     <ListGroupItem key={"order_"+order.id+"_price"}>{order.product.price}</ListGroupItem>
                    // </ListGroup>)
                    return (<tr>
                    <td>{order.product.name}</td>
                    <td>{order.product.price}</td>
                </tr>)
                })
            }
            </table>
        </div>
    )
}