import React, { useContext, useRef } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../locations/LocationProvider"
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import "./Employee.css"

export default props => {
    const { addEmployee } = useContext(EmployeeContext)
    const { locations } = useContext(LocationContext)
    const name = useRef()
    const location = useRef()
    const isManager = useRef()
    const isFullTime = useRef()
    const hourlyRate = useRef()

    const constructNewEmployee = () => {
        const locationId = parseInt(location.current.value)
        const parsedHourlyRate = parseFloat(hourlyRate.current.value)

        if (locationId === 0) {
            window.alert("Please select a location")
        } else {
            const newEmployeeObj = {
                name: name.current.value,
                locationId: locationId,
                isManager: isManager.current.value !== "0" ? true : false,
                isFullTime: isFullTime.current.value !== "0" ? true : false,
                hourlyRate: parsedHourlyRate
            }
            console.log(newEmployeeObj)
            addEmployee(newEmployeeObj)
            .then(props.toggler) //close the modal
        }
    }

    return (
        <form className="employeeForm">
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeeName">Employee name: </label>
                    <input
                        type="text"
                        id="employeeName"
                        ref={name}
                        required
                        autoFocus
                        className="form-control"
                        placeholder="Employee name"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select
                        defaultValue=""
                        name="location"
                        ref={location}
                        id="employeeLocation"
                        className="form-control"
                    >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="isManager">Is this employee a manager?</label>
                    <select
                        defaultValue=""
                        name="isManager"
                        ref={isManager}
                        id="employeeManager"
                        className="form-control"
                    >
                        <option value="0">no</option>
                        <option value="1">yes</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="isFullTime">Is this employee full-time or part-time?</label>
                    <select
                        defaultValue=""
                        name="isFullTime"
                        ref={isFullTime}
                        id="employeeFullTime"
                        className="form-control"
                    >
                        <option value="0">part-time</option>
                        <option value="1">full-time</option>
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="employeePay">Hourly Pay Rate: </label>
                    <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>$</InputGroupText>
                    </InputGroupAddon>
                    <Input
                        defaultValue="10.00"
                        type="number"
                        id="employeePay"
                        step=".25"
                        min="7.25"
                        max="30"
                        // Note for future me: the "innerRef" is important! It's how you get things out of reactstrap components
                        innerRef={hourlyRate}
                        required
                        className="form-control"
                        placeholder="Employee's Hourly Pay Rate"
                    />
                    </InputGroup>
                </div>
            </fieldset>
            <button type="submit"
                onClick={
                    evt => {
                        evt.preventDefault() // Prevent browser from submitting the form
                        constructNewEmployee()
                    }
                }
                className="btn btn-primary">
                Save Employee
            </button>
        </form>
    )
}