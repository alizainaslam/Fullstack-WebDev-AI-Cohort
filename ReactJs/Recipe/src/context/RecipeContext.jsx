import { createContext, useState } from "react";

export const recipeContext = createContext(null);

const RecipeContext = (props) => {
  const [recipe, setRecipe] = useState([]);
  
  return (
    <recipeContext.Provider value={{ recipe, setRecipe }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
