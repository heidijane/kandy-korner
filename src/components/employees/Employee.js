import React, { useContext } from "react"
import {Card, CardHeader, CardBody, CardText, CardFooter, Button} from "reactstrap"
import { EmployeeContext } from "./EmployeeProvider"

export default ({employee}) => {

    const {deleteEmployee} = useContext(EmployeeContext)

    return (
    <Card className="employee">
        <CardHeader className="employee__name"><h3>{employee.name}</h3></CardHeader>
        <CardBody>
            <CardText>{employee.location.name}</CardText>
            <CardText>Management: {employee.isManager === true ? "yes" : "no"}</CardText>
            <CardText>{employee.isFullTime === true ? "Full-Time" : "Part-Time"}</CardText>
            <CardText>${new Intl.NumberFormat().format(employee.hourlyRate)} per hour</CardText>
        </CardBody>
        <CardFooter>
            <Button color="danger" onClick={()=>{
                if (window.confirm(`Do you really want to fire ${employee.name}?`)) {
                    deleteEmployee(employee.id)
                }
            }}>Fire Employee</Button>
            </CardFooter>
    </Card>
    )
}