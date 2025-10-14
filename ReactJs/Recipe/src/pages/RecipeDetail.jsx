import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipeContext } from "../context/RecipeContext";
import Button from "../components/Button";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Input from "../components/Input";

const RecipeDetail = () => {
  const navigate = useNavigate();

  const [isOpenUpdateForm, setIsOpenUpdateForm] = useState(false);
  const param = useParams();
  const { recipe, setRecipe } = useContext(recipeContext);
  const recdetail = recipe.find((recipe) => recipe.id == param.id);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: recdetail?.image || "",
      title: recdetail?.title || "",
      description: recdetail?.description || "",
      ingredients: recdetail?.ingredients || "",
      chef: recdetail?.chef || "",
      category: recdetail?.category || "",
    },
  });
  const submitHandler = (data) => {
    const index = recipe.findIndex((rec) => rec.id == param.id);
    let copyData = [...recipe];
    copyData[index] = { ...copyData[index], ...data };
    setRecipe(copyData);

    setIsOpenUpdateForm(false);
    toast.success("Recipe has been updated!");
  };

  const updateRecipeForm = (
    <form
      className="bg-white rounded p-4 flex flex-col gap-6"
      onSubmit={handleSubmit(submitHandler)}
    >
      <Input type="url" placeholder="image" {...register("image")} />

      <Input type="text" placeholder="title" {...register("title")} />

      <Input
        type="text"
        placeholder="description"
        {...register("description")}
      />

      <Input
        type="text"
        placeholder="ingredients"
        {...register("ingredients")}
      />

      <Input type="text" placeholder="chef-name" {...register("chef")} />

      <select
        className="bg-white border"
        name="category"
        {...register("category")}
        required
      >
        <option value="" disabled>
          Select Cuisine Type
        </option>
        <option value="italian">Italian</option>
        <option value="mexican">Mexican</option>
        <option value="asian">Asian</option>
      </select>

      <button className="bg-[#0b0b13] text-white px-3 py-2 rounded mt-3 cursor-pointer">
        Update recipe
      </button>
    </form>
  );

  const deleteHandler = () => {
    setRecipe(recipe.filter((reci) => reci.id !== recdetail.id));
    toast.warn("Recipe has been deleted!");
    navigate("/recipes");
  };

  return (
    <div className="mt-10 w-full relative">
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
          <small>{recdetail.category}</small>
        </div>
      ) : (
        ""
      )}

      <div
        className={
          isOpenUpdateForm
            ? "my-0 mx-auto md:w-[75%] lg:max-w-[550px] absolute top-17 left-0 right-0"
            : "hidden"
        }
      >
        {updateRecipeForm}
      </div>

      <div className="mt-7 w-full flex justify-end gap-5">
        <Button
          value="Update"
          cls="bg-blue-500"
          onClick={() => setIsOpenUpdateForm(!isOpenUpdateForm)}
        />
        <Button value="Delete" cls="bg-red-500 " onClick={deleteHandler} />
      </div>
    </div>
  );
};

export default RecipeDetail;
