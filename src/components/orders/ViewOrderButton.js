import React, { useState } from "react"
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import MyOrder from "./MyOrder"

export default () => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    return (
        <>
        <Button onClick={toggle}>View My Order</Button>
        <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    My Order
                </ModalHeader>
                <ModalBody>
                    <MyOrder />
                </ModalBody>
            </Modal>
        </>
    )
}