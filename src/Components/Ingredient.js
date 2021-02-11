import React, { useEffect, useState } from "react";
import axios from "axios";

const IngredientDisplay = ({ name }) => {
  console.log(name);

  const [cocktailByingredient, setCocktailbyIngredient] = useState([]);

  useEffect(() => {
    const fetchByIngredients = async (url) => {
      try {
        let res = await axios.get(url);
        setCocktailbyIngredient(res.data.drinks);
      } catch {
        setCocktailbyIngredient({});
        console.log('ERROR')
      }
    };
    fetchByIngredients(`https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=Vodka`)
  }, []);

//   const cocktailDisplay = 

  return <div>{name}</div>;
};

export default IngredientDisplay;
