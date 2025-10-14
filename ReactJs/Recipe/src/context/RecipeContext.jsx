import { createContext, useState } from "react";

export const recipeContext = createContext(null);

const RecipeContext = (props) => {
  const [recipe, setRecipe] = useState([
    {
      id: 1,
      title: "Classic Pizza",
      ingredients: "Pizza dough Salt and pepper to taste",
      description:
        "Preheat the oven to 475°F (245°C). Roll out the pizza dough and spread tomato sauce evenly Top with slices of fresh mozzarella and fresh basil leaves. Pasta and many more dummy data.",
      cuisine: "Italian",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      chef: "John",
    },
    {
      id: 2,
      title: "Classic Margherita Pizza",
      ingredients: "Pizza dough Salt and pepper to taste",
      description:
        "Preheat the oven to 475°F (245°C). Roll out the pizza dough and spread tomato sauce evenly Top with slices of fresh mozzarella and fresh basil leaves.",
      cuisine: "Italian",
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      chef: "John",
    },
  ]);
  return (
    <recipeContext.Provider value={{ recipe, setRecipe }}>
      {props.children}
    </recipeContext.Provider>
  );
};

export default RecipeContext;
