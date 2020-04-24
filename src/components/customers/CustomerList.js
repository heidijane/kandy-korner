import React, { useContext } from "react"
import { CustomerContext } from "./CustomerProvider"
import "./Customers.css"
import { Table } from "reactstrap"

export default () => {
    const { customers } = useContext(CustomerContext)

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
                            <td>0</td>
                            </tr>
                            )
                        })
                    }
                    </tbody>
                    </Table>
                    </div>
                    )
                }