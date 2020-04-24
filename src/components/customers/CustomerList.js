import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customers.css"
import { Table } from "reactstrap"
import { OrderContext } from "../orders/CustomerCandyProvider"

export default () => {
    const { customers } = useContext(CustomerContext)
    const { orders } = useContext(OrderContext)

    //get how many candies each customer has ordered
    customers.forEach(customer => {
        const filteredOrders = orders.filter(order => order.customerId === customer.id)
        customer.numCandyOrdered = filteredOrders.length
    }) 

    return (
        <div className="customers">
            <Table striped bordered>
                <thead>
                    <tr>
                        <td>Customer Name</td>
                        <td>Candies Bought</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        customers.map(customer => {
                            return (
                            <tr key={"customer_"+customer.id}>
                            <td>{customer.name}</td>
                            <td>{customer.numCandyOrdered}</td>
                            </tr>
                            )
                        })
                    }
                    </tbody>
                    </Table>
                    </div>
                    )
                }