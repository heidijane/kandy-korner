import React, { useContext, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import Employee from "./Employee"
import { Modal, ModalHeader, ModalBody } from "reactstrap"
import EmployeeForm from "./EmployeeForm"


export default () => {
    const { employees } = useContext(EmployeeContext)

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
            <div className="fakeLink href" onClick={toggle}>New Employee</div>

            <ul className="employees">
                {
                    employees.map(employee => <Employee key={employee.id} employee={employee} />)
                }
            </ul>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    New Employee
                </ModalHeader>
                <ModalBody>
                    <EmployeeForm toggler={toggle} />
                </ModalBody>
            </Modal>
        </>
    )
}