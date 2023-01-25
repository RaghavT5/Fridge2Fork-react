import React, { useContext, useState } from "react";
import axios from "axios";
import { IngredientsContext } from "../contexts/ingredientsContext";
import DisplayRecipes from "./DisplayRecipes";
import { Link } from "react-router-dom";

const URL = "https://api.spoonacular.com/recipes/findByIngredients";
const APIKey = "dbc56a6bf9c942399c4c53ae4b11bae7";

const SearchRecipes = (props) => {
  const [selectedIngredients, setSelectedIngredients] =
    useContext(IngredientsContext);
  const [recipes, setRecipes] = useState(null);

  const handleIngredientClick = (ingredient) => {
    setSelectedIngredients(selectedIngredients.filter((i) => i !== ingredient));
  };

  const handleClick = async () => {
    try {
      const response = await axios.get(
        `${URL}?ingredients=${selectedIngredients.join(",+")}&apiKey=${APIKey}`
      );
      console.log(response.data);
      setRecipes(response.data);

      window.open(
        "http://localhost:3000/displayRecipes",
        `recipes=${JSON.stringify(recipes)}`
      );

      // window.open(
      //   `/displayrecipes?recipes=${JSON.stringify(recipes)}`,
      //   "_blank"
      // );
    } catch (error) {
      console.error(error);
    }
  };
  return (
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

        {/* {recipes && <DisplayRecipes recipes={recipes} />} */}
      </div>
    </div>
  );
};

export default SearchRecipes;
