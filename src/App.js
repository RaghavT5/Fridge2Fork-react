import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import MainGrid from "./components/MainGrid.jsx";
import { IngredientsContext } from "./contexts/ingredientsContext.js";
import DisplayRecipes from "./components/DisplayRecipes.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [showRecipes, setShowRecipes] = useState(false);

  const handleRecipeClick = () => {
    setShowRecipes(true);
    window.open("http://localhost:3000/displayRecipes");
  };

  return (
    <div>
      <IngredientsContext.Provider
        value={[selectedIngredients, setSelectedIngredients]}
      >
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<MainGrid handleRecipeClick={handleRecipeClick} />}
          />
          <Route path="/displayRecipes" element={<DisplayRecipes />} />
        </Routes>
      </IngredientsContext.Provider>
    </div>
  );
};

export default App;
