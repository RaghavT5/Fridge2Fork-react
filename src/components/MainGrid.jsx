import React from "react";
import CategoryCard from "./CategoryCard.jsx";
import SearchRecipes from "./SearchRecipes.jsx";

const MainGrid = () => {
  return (
    <div className="bg-white w-[46rem] md:max-h-[150vw] lg:max-h-[90vw] min-h-[15rem] rounded-[1.2rem] flex flex-col p-8 z-2 shadow-md mt-32 mb-10">
      <div>
        <h1 className="font-[Acme] text-5xl text-left">Fridge2Fork</h1>
      </div>
      <p className="font-[Poppins] pt-5 pb-4 font-semibold text-[#464646]">
        Categories
      </p>
      <div>
        <CategoryCard />
      </div>
      <div>
        <SearchRecipes />
      </div>
    </div>
  );
};

export default MainGrid;
