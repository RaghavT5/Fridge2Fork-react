import React, { useState } from "react";
import NavBar from "./components/NavBar.jsx";
import MainGrid from "./components/MainGrid.jsx";
import { IngredientsContext } from "./contexts/ingredientsContext.js";
import DisplayRecipes from "./components/DisplayRecipes.jsx";
import { Routes, Route, useNavigate } from "react-router-dom";
import { RecipesContextProvider } from "./contexts/recipesContext.js";

const App = () => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [showRecipes, setShowRecipes] = useState(false);

  const navigate = useNavigate();

  const handleRecipeClick = () => {
    setShowRecipes(true);

    navigate("/displayRecipes");
  };

  return (
    <RecipesContextProvider>
      {" "}
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
    </RecipesContextProvider>
  );
};

export default App;
