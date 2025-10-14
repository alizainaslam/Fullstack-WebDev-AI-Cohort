import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";

const Recipes = () => {
  const { recipe } = useContext(recipeContext);

  const listAllRecipes = recipe.map((recipe) => {
    return (
      <RecipeCard
        key={recipe.id}
        id={recipe.id}
        src={recipe.image}
        title={recipe.title}
        chef={recipe.chef}
        ingredients={recipe.ingredients}
        description={recipe.description}
      />
    );
  });

  return (
    <>
      <h1 className="text-3xl font-semibold mt-10 mb-7">Recipes</h1>
      <div className="flex flex-wrap gap-10 justify-center">
        {recipe.length > 0 ? listAllRecipes : "Add new recipe!"}
      </div>
    </>
  );
};

export default Recipes;
