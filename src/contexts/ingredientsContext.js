import React, { createContext, useState } from "react";

export const IngredientsContext = createContext();

export const IngredientsProvider = (props) => {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  return (
    <IngredientsContext.Provider
      value={[selectedIngredients, setSelectedIngredients]}
    >
      {props.children}
    </IngredientsContext.Provider>
  );
};

export default IngredientsProvider;
