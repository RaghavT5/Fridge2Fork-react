import React, { useContext } from "react";
import axios from "axios";
import { IngredientsContext } from "../contexts/ingredientsContext";
import { RecipesContext } from "../contexts/recipesContext";
import useState from "react-usestateref";

const URL = "https://api.spoonacular.com/recipes/findByIngredients";
const APIKey = "96284e61b11e489198b8eecf0d4eb3a2";

const SearchRecipes = () => {
  const [selectedIngredients, setSelectedIngredients] =
    useContext(IngredientsContext);
  const [recipes, setRecipes] = useState([]);

  const handleIngredientClick = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter((i) => i !== ingredient));
  };

  const handleClick = async () => {
    try {
      const response = await axios.get(
        `${URL}?ingredients=${selectedIngredients.join(
          ",+"
        )}&apiKey=${APIKey}&number=12`
      );
      setRecipes(response.data);
      localStorage.clear();
      localStorage.setItem("recipes", JSON.stringify(response.data));
      window.open("http://localhost:3000/displayRecipes");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RecipesContext.Provider value={recipes}>
      <div className="pb-5 pt-10 ">
        <div>
          <p className="font-[Poppins] pb-4 font-semibold text-[#464646]">
            My Ingredients
          </p>
          <p
            className={`cursor-pointer ${
              selectedIngredients.length > 0 ? "pb-4" : ""
            }`}
          >
            {selectedIngredients.map((ingredient, index) => (
              <span
                key={index}
                pb-4
                onClick={() => handleIngredientClick(ingredient)}
              >
                {ingredient},
              </span>
            ))}
          </p>
          <div>
            <button
              className="bg-[#ffc107] px-6 rounded-md font-medium font-[Poppins] py-2 text-[1rem]"
              onClick={handleClick}
            >
              Find a recipe
            </button>
          </div>
        </div>
      </div>
    </RecipesContext.Provider>
  );
};

export default SearchRecipes;
