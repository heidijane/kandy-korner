import React, { useState, useContext, useRef } from "react"
import { Button, Modal, ModalHeader, ModalBody, InputGroup, InputGroupAddon } from "reactstrap"
import { LocationProductContext } from "./LocationProductProvider"
import { ProductContext } from "../products/ProductProvider"

export default ({ location }) => {
    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal)

    const { locationProducts, addLocationProduct, deleteLocationProduct } = useContext(LocationProductContext)
    const { products } = useContext(ProductContext)

    //get the products that match this location
    const matchedProducts = locationProducts.filter(prodcut => location.id === prodcut.locationId)

    //get the products that aren't already sold at this location for the add new product form
    const possibleProductsToAdd = products.filter(product => {
        if (matchedProducts.some(soldProduct => soldProduct.productId === product.id)) {
            return false
        }
        return true
    })

    const productId = useRef()
    const addNewLocationProduct = () => {
        const parsedProductId = parseInt(productId.current.value)

        if (parsedProductId === 0) {
            window.alert("Please select a product to add")
        } else {
            addLocationProduct({
                locationId: location.id,
                productId: parsedProductId
            })
        }
    }

    return (
        <>
        <Button className="location" onClick={toggle}>{location.name}</Button>

        <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                {location.name}
                </ModalHeader>
                <ModalBody>
                    <div>Address: {location.address}</div>
                    <hr />
                    <h5>Products Sold:</h5>
                    <div className="locationProducts">
                    {
                        matchedProducts.map(rel => {
                            return (
                                <Button 
                                className="locationProduct" 
                                key={"locationProduct_"+rel.id}
                                onClick={() => {
                                    if(window.confirm(`Would you like to remove ${rel.product.name} from the ${location.name} location?`)) {
                                        deleteLocationProduct(rel.id)
                                    }
                                }
                            }
                                >
                                    {rel.product.name}
                                    </Button>
                            )
                        }
                        )
                    }
                    </div>
                    <hr />
                    <form>
                        <label htmlFor="">Add a product to this location:</label>
                        <InputGroup>
                        <select
                        defaultValue=""
                        name="productId"
                        ref={productId}
                        id="locationProductId"
                        className="form-control"
                        required
                        >
                            <option value="0">Select a product...</option>
                            {
                                possibleProductsToAdd.map(product => {
                                    return <option key={product.id} value={product.id}>{product.name}</option>
                                })
                            }
                        </select>
                        <InputGroupAddon addonType="append">
                        <Button type="submit"
                            onClick={
                                evt => {
                                    evt.preventDefault() // Prevent browser from submitting the form
                                    addNewLocationProduct()
                                }
                            }
                            className="btn btn-primary">
                            Add
                        </Button>
                        </InputGroupAddon>
                        </InputGroup>
                    </form>
                </ModalBody>
            </Modal>
        </>
    )
}