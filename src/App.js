import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import MainGrid from "./components/MainGrid.jsx";
import { IngredientsContext } from "./contexts/ingredientsContext.js";

const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  return (
    <IngredientsContext.Provider
      value={[selectedIngredients, setSelectedIngredients]}
    >
      <div>
        <NavBar />
        <MainGrid />
      </div>
    </IngredientsContext.Provider>
  );
};

export default App;
