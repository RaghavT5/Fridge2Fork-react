import React, { useContext } from "react";
import axios from "axios";
import { IngredientsContext } from "../contexts/ingredientsContext";

const URL = "https://api.spoonacular.com/recipes/findByIngredients";
const APIKey = "dbc56a6bf9c942399c4c53ae4b11bae7";

const SearchRecipes = () => {
  const [selectedIngredients] = useContext(IngredientsContext);
  const handleClick = async () => {
    try {
      const response = await axios.get(
        `${URL}?ingredients=${selectedIngredients.join(",")}&apiKey=${APIKey}`
      );
      console.log(response.data);
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
        {/* <p>{selectedIngredients.join(", ")}</p> */}
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
  );
};

export default SearchRecipes;
