import React from "react"

export default ({product}) => (
    <section className="product">
        <h3 className="product__name">{product.name}</h3>
        <p className="product__type">{product.productType.name}</p>
<p className="product__price">${new Intl.NumberFormat().format(product.price)} per unit</p>
    </section>
)