import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import Input from "../components/Input";
import { useContext } from "react";
import { recipeContext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const { recipe, setRecipe } = useContext(recipeContext);

  const { register, handleSubmit, reset } = useForm();

  const navigate = useNavigate();

  const submitHandler = (input) => {
    let newRecipe = {
      id: nanoid(),
      image: input.image,
      title: input.title,
      description: input.description,
      ingredients: input.ingredients,
      chef: input.chef,
      category: input.category,
    };
    setRecipe([...recipe, newRecipe]);

    toast.success("Your recipe has been added");
    navigate("/recipes");
    reset();
  };

  return (
    <section className="mt-10 flex flex-col gap-7 w-full justify-center my-0 mx-auto md:w-[75%] lg:max-w-[550px]">
      <h1 className="text-3xl font-semibold">Create Recipe</h1>
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
          defaultValue=""
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
          Add recipe
        </button>
      </form>
    </section>
  );
};

export default CreateRecipe;
