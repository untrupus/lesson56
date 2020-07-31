import React, {useState} from 'react';
import './App.css';
import Ingredient from "../components/Ingredients/Ingredient";
import Burger from "../components/Burger/Burger";
import Price from "../components/Price/Price";

const App = () => {
    const [ingredients, setIngredients] = useState([
        {name: 'Meat', count: 0, price: 50},
        {name: 'Cheese', count: 0, price: 20},
        {name: 'Salad', count: 0, price: 5},
        {name: 'Bacon', count: 0, price: 30},
    ]);

    const addIngredient = name => {
        const index = ingredients.findIndex(p => p.name === name);
        const ingredientsCopy = [...ingredients];
        const ingredient = {...ingredientsCopy[index]};
        ingredient.count++;
        ingredientsCopy[index] = ingredient;
        setIngredients(ingredientsCopy);
    }

    const removeIngredient = name => {
        const index = ingredients.findIndex(p => p.name === name);
        const ingredientsCopy = [...ingredients];
        const ingredient = {...ingredientsCopy[index]};
        if (ingredient.count > 0) {
            ingredient.count--;
        }
        ingredientsCopy[index] = ingredient;
        setIngredients(ingredientsCopy);
    }

    let ingrView = ingredients.map((ingr) => {
        return (
            <Ingredient
                key={ingr.name}
                name={ingr.name}
                count={ingr.count}
                click={() => addIngredient(ingr.name)}
                remove={() => removeIngredient(ingr.name)}
            />
        );
    });

    const reset = () => {
        const ingredientsCopy = [...ingredients];
        for (let i = 0; i < ingredientsCopy.length; i++) {
            ingredientsCopy[i].count = 0;
        }
        setIngredients(ingredientsCopy);
    }

    return (

        <div className="container">
            <div className="ingredients">
                {ingrView}
                <button type="button" className="btnReset" onClick={reset}>Reset</button>
                <Price
                    priceAmount={ingredients}
                />
            </div>

                <Burger
                    meat={ingredients[0].count}
                    cheese={ingredients[1].count}
                    salad={ingredients[2].count}
                    bacon={ingredients[3].count}
                />
        </div>

    )
}

export default App;
