import React from "react";
import './Burger.css';
import Salad from "../Salad/Salad";
import Meat from "../Meat/Meat";
import Cheese from "../Cheese/Cheese";
import Bacon from "../Bacon/Bacon";

const Burger = props => {

    const burgerSet = [];

    for (let i = 0; i < props.salad; i++) {
        burgerSet.push(<Salad key={'s' + i}/>)
    }
    for (let i = 0; i < props.meat; i++) {
        burgerSet.push(<Meat key={'m' + i}/>)
    }
    for (let i = 0; i < props.cheese; i++) {
        burgerSet.push(<Cheese key={'c' + i}/>)
    }
    for (let i = 0; i < props.bacon; i++) {
        burgerSet.push(<Bacon key={'b' + i}/>)
    }

    return (
        <div className="Burger">
            <div className="BreadTop">
                <div className="Seeds1"></div>
                <div className="Seeds2"></div>
            </div>

            {burgerSet}

            <div className="BreadBottom"></div>

        </div>
    );
}

export default Burger;