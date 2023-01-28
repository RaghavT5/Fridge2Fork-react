import React, { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes";
const APIKey = "96284e61b11e489198b8eecf0d4eb3a2";

const DisplayRecipes = (props) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const storedRecipes = JSON.parse(localStorage.getItem("recipes"));
    if (storedRecipes) {
      setRecipes(storedRecipes);
    }
  }, []);

  useEffect(() => {
    document.body.classList.add("page-styles");
    return () => {
      document.body.classList.remove("page-styles");
    };
  }, []);

  const handleShowRecipe = async (recipeId) => {
    try {
      const response = await fetch(
        `${URL}/${recipeId}/information?apiKey=${APIKey}`
        // `${URL}/${recipeId}/card?apiKey=${APIKey}`
      );
      const data = await response.json();
      const recipeUrl = data.sourceUrl;
      console.log(data);
      window.open(recipeUrl, "_blank");
    } catch (error) {
      console.error(error);
    }
  };

  const handleShowRecipeCard = async (recipeId) => {
    try {
      const response = await fetch(`${URL}/${recipeId}/card?apiKey=${APIKey}`);
      const data = await response.json();
      const recipeCardUrl = data.url;
      console.log(data);
      window.open(recipeCardUrl, "_blank");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="mt-28 mx-4">
        <h1
          className="font-[Acme] text-[4rem] text-left text-[#ffc107] pl-20 "
          style={{
            textAlign: "left !important",
            marginLeft: "10px !important",
          }}
        >
          Recipes
        </h1>
        <div className="mx-8 mb-12">
          <div className="w-full pt-10 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 px-12">
            {/* <div className=""> */}
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300"
              >
                <img
                  src={`https://spoonacular.com/recipeImages/${recipe.id}-480x360.jpg`}
                  alt={recipe.title}
                  className="rounded-md"
                />
                <p className="text-2xl px-4 py-4 font-mediumt font-[Poppins]">
                  {recipe.title}
                </p>
                <div className="flex items-center justify-center py-8">
                  <button
                    className="bg-[#ffc107] px-2  rounded-md font-medium font-[Poppins] py-2 text-[1rem] mx-auto"
                    onClick={() => handleShowRecipe(recipe.id)}
                  >
                    Show Recipe
                  </button>
                  <button
                    className="bg-[#ffc107] px-2 rounded-md font-medium font-[Poppins] py-2 text-[1rem] mx-auto"
                    onClick={() => handleShowRecipeCard(recipe.id)}
                  >
                    Show Recipe Card
                  </button>
                </div>
              </div>
            ))}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayRecipes;
