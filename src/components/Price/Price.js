import React from "react";
import './Price.css';

const Price = props => {
    let totalPrice = props.priceAmount.reduce((acc, ingredient) => {
        return acc + (ingredient.count * ingredient.price);
    }, 20);

    return (
        <p className="price">Price: {totalPrice}</p>
    )
}

export default Price;