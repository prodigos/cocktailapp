import React from "react";
import "./App.css";
import NavBar from "../../cocktailsapp/./src/Components/NavBar";
import ByIngredient from "./Components/ByIngredient";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ByIngredient/>
    </div>
  );
}

export default App;
