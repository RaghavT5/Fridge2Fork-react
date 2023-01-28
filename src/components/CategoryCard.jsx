import React, { useState, useContext } from "react";
import { categoriesList } from "../categories/categoriesList";
import { IngredientsContext } from "../contexts/ingredientsContext";

const CategoryCard = () => {
  const [visibleCategoryId, setVisibleCategoryId] = useState(null);
  const [selectedIngredients, setSelectedIngredients] =
    useContext(IngredientsContext);

  const handleIngredientClick = (ingredient) => {
    if (!selectedIngredients.includes(ingredient)) {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };

  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 m-1 text-center font-poppins">
      {categoriesList.map((category) => (
        <div
          key={category.id}
          className="text-center align-middle cursor-pointer"
          onClick={() =>
            visibleCategoryId === category.id
              ? setVisibleCategoryId(null)
              : setVisibleCategoryId(category.id)
          }
        >
          <div className="flex text-center pl-10 bg-[#f8f9fa] rounded-lg hover:scale-105 hover:bg-slate-200">
            <img
              src={category.img}
              alt={category.categoryName}
              className="cursor-pointer h-10 w-10 mb-5 mt-10"
            />
            <div className="pl-2 pt-10 text-center">
              {category.categoryName}
            </div>
          </div>
        </div>
      ))}
      {visibleCategoryId && (
        <div className="grid lg:grid-cols-6 md:grid-cols-3 gap-4">
          {categoriesList
            .filter((category) => category.id === visibleCategoryId)
            .map((category) => (
              <div
                key={category.id}
                className="grid lg:grid-cols-6 md:grid-cols-3 gap-x-28 md:text-xl lg:text-xs"
              >
                {category.ingredients.map((ingredient, index) => (
                  <div
                    key={ingredient}
                    className="cursor-pointer "
                    onClick={() => handleIngredientClick(ingredient)}
                  >
                    <span className=" hover:bg-[#ffc107] hover:font-semibold px-2 py-1 lg:text-xs md:text-base">
                      {ingredient}
                    </span>
                  </div>
                ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CategoryCard;
