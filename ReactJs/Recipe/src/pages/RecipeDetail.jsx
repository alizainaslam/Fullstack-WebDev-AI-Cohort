import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";
import Button from "../components/Button";
import { toast } from "react-toastify";

const RecipeDetail = () => {
  const navigate = useNavigate();

  const param = useParams();
  const { recipe, setRecipe } = useContext(recipeContext);
  const recdetail = recipe.find((recipe) => recipe.id == param.id);

  const deleteHandler = () => {
    setRecipe(recipe.filter((reci) => reci.id !== recdetail.id));
    toast.warn("Recipe has been deleted!");
    navigate("/recipes");
  };

  return (
    <div className="mt-10 w-full">
      <h1 className="text-3xl font-semibold mb-7">Recipe Detail</h1>

      {recdetail ? (
        <div className="w-full shadow p-3 flex flex-col gap-2">
          <img
            src={recdetail.image}
            alt="recipe-image"
            className="h-[25vh] object-cover rounded w-full"
          />
          <h1 className="text-2xl font-bold">{recdetail.title}</h1>
          <h3 className="font-thin uppercase text-zinc-950">
            {recdetail.chef}
          </h3>
          <small>{recdetail.ingredients}</small>
          <p className="leading-snug">{recdetail.description}</p>
        </div>
      ) : (
        ""
      )}

      <div className="mt-7 w-full flex justify-end gap-5">
        <Button value="Update" cls="bg-blue-500" />
        <Button value="Delete" cls="bg-red-500 " onClick={deleteHandler} />
      </div>
    </div>
  );
};

export default RecipeDetail;
