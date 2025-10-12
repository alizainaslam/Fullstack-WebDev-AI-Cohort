import { useContext } from "react";
import { useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";
import Button from "../components/Button";

const RecipeDetail = () => {
  const param = useParams();

  const { recipe } = useContext(recipeContext);

  const recdetail = recipe.find((recipe) => recipe.id === Number(param.id));
  console.log(recdetail);

  const updateHandler = () => {
    console.log(recdetail.title);
  };

  const deleteHandler = () => {
    console.log(recdetail.title);
  };

  return (
    <div className="mt-10 w-full">
      <h1 className="text-3xl font-semibold mb-7">Recipe Detail</h1>

      <div className="w-full shadow p-3 flex flex-col gap-2">
        <img
          src={recdetail.image}
          alt="recipe-image"
          className="h-[25vh] object-cover rounded w-full"
        />
        <h1 className="text-2xl font-bold">{recdetail.title}</h1>
        <h3 className="font-thin uppercase text-zinc-950">{recdetail.chef}</h3>
        <small>{recdetail.ingredients}</small>
        <p className="leading-snug">{recdetail.decription}</p>
      </div>
      <div className="mt-7 w-full flex justify-end gap-5">
        <Button value="Update" cls="bg-blue-500" onClick={updateHandler} />
        <Button value="Update" cls="bg-red-500 " onClick={deleteHandler} />
      </div>
    </div>
  );
};

export default RecipeDetail;
