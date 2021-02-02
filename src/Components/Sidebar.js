import React, { useEffect, useState } from "react";
import axios from "axios";

const Sidebar = () => {
  let selectIngredients = [{ name: "Gin" }, { name: "Vodka" }, { name: "Rum" }];
  
  const [ingredients, setIngredients] = useState([]);

  const populateSelect = selectIngredients.map((ingredient) => {
    return <option key={ingredient.name}>{ingredient.name}</option>;
  });


  const handleSelect = (e) => {
    setIngredients(e.target.value);
    console.log(ingredients);
    
  };

  // useEffect(() => {
  //   const fetchPopularingredients = async (url) => {
  //     try {
  //       let res = await axios.get(url);
  //       setIngredients(res.data.ingredients);
  //     } catch (error) {
  //       setIngredients([]);
  //       console.log(error);
  //     }
  //   };
  //   fetchPopularingredients(
  //     `https://www.thecocktaildb.com/api/json/v2/9973533/search.php?i=${ingredients}`
  //   );
  // }, []);

  return (
    <div className="sidebar">
      <label>
        By ingredient:
        <select onChange={handleSelect}>{populateSelect}</select>
      </label>
    </div>
  );
};

export default Sidebar;
