import React, { useEffect } from "react";

const DisplayRecipes = (props) => {
  const { recipes } = props;

  console.log(recipes);
  useEffect(() => {
    document.body.classList.add("page-styles");
    return () => {
      document.body.classList.remove("page-styles");
    };
  }, []);
  return (
    <div>
      <div className="mt-28 ml-4">
        <h1
          className="font-[Acme] text-5xl text-left text-[#ffc107] "
          style={{
            textAlign: "left !important",
            marginLeft: "10px !important",
          }}
        >
          Recipes
        </h1>
        <div></div>
      </div>
    </div>
  );
};

export default DisplayRecipes;
