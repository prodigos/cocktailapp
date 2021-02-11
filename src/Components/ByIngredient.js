import React, { useEffect, useState } from "react";
import axios from "axios";
import IngredientDisplay from "./Ingredient";

let selectIngredients = [
  { name: "Gin" },
  { name: "Vodka" },
  { name: "Rum" },
  { name: "Tequila" },
  { name: "Scotch" },
];

const Sidebar = () => {
  // const [ingredients, setIngredients] = useState([]);

  // useEffect(() => {
  //   const fetchPopularingredients = async (url) => {
  //     try {
  //       let res = await axios.get(url);
  //       setIngredients(res.data.ingredients);
  //       debugger;
  //     } catch (error) {
  //       setIngredients([]);
  //       console.log(error);
  //     }
  //   };
  //   fetchPopularingredients(
  //     "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?i=vodka"
  //     );
  // }, []);

  const name = selectIngredients.map((ingredient) => {
    return <IngredientDisplay key={ingredient.name} name={ingredient.name} />;
  });

  return <div className="sidebar">{name}</div>;
};

export default Sidebar;
