import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import CreateRecipe from "../pages/CreateRecipe";
import RecipeDetail from "../pages/RecipeDetail";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipes/recipedetail/:id" element={<RecipeDetail />} />
      <Route path="/create-recipe" element={<CreateRecipe />} />
    </Routes>
  );
};

export default MainRoutes;
