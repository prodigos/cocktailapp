import React, { useEffect, useState } from "react";
import axios from "axios";

const Sidebar = () => {
  const [ingredients, setIngredients] = useState([{}]);

  useEffect(() => {
    const fetchIngredients = async (url) => {
      try {
        let res = await axios.get(url);
        setIngredients(res.data);
      } catch (error) {
        setIngredients("");
        console.log(error);
      }
    };
    fetchIngredients(
      "https://www.thecocktaildb.com/api/json/v2/9973533/search.php?i=vodka"
    );
  }, []);

  
  const displayIngredients = 
      ingredients.map((ingredient) => {
          console.log(ingredient);
          return <option key={ingredient.name}>{displayIngredients}</option>;
        });
   
      debugger;

return (
    <div className="sidebar">
      <label>
        By ingredient:
        <select onChange={displayIngredients}>{ingredients.name}</select>
      </label>
    </div>
  );
};

export default Sidebar;
