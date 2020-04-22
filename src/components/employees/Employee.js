import React from "react"

export default ({employee}) => (
    <section className="employee">
        <h3 className="employee__name">{employee.name}</h3>
        <p className="employee__location">{employee.location.name}</p>
        <p className="employee__manager">Management: {employee.isManager === true ? "yes" : "no"}</p>
        <p className="employee__fullTime">{employee.isFullTime === true ? "Full-Time" : "Part-Time"}</p>
<p className="employee__payrate">${new Intl.NumberFormat().format(employee.hourlyRate)} per hour</p>
    </section>
)