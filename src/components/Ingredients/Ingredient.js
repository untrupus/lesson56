import React from "react";
import './Ingredients.css';

const Ingredient = props => {
    let ingrClass = ['icon'];
    ingrClass.push(props.name);
    let binClass = ['bin'];
    if (props.count !== 0) {
        binClass.push('binImage');
    }
    return (
        <div className="ingredient">
            <div className={ingrClass.join(' ')} onClick={props.click}></div>
            <p className="ingrName">{props.name}</p>
            <p className="count">x{props.count}</p>
            <div className={binClass.join(' ')} onClick={props.remove}></div>
        </div>
    );
}

export default Ingredient;