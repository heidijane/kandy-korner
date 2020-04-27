import React from "react"
import {Card, CardHeader, CardBody, CardText, CardFooter} from "reactstrap"

export default ({employee}) => (
    <Card className="employee">
        <CardHeader className="employee__name"><h3>{employee.name}</h3></CardHeader>
        <CardBody>
            <CardText>{employee.location.name}</CardText>
            <CardText>Management: {employee.isManager === true ? "yes" : "no"}</CardText>
            <CardText>{employee.isFullTime === true ? "Full-Time" : "Part-Time"}</CardText>
            <CardText>${new Intl.NumberFormat().format(employee.hourlyRate)} per hour</CardText>
        </CardBody>
        <CardFooter></CardFooter>
    </Card>
)