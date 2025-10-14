import { NavLink } from "react-router-dom";

const RecipeCard = (props) => {
  return (
    <NavLink
      to={`/recipes/recipedetail/${props.id}`}
      className="flex flex-col gap-1 w-full lg:w-[25vw] shadow p-3 rounded"
    >
      <img
        src={props.src}
        alt="recipe-image"
        className="h-[25vh] object-cover rounded"
      />
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <h3 className="font-thin uppercase text-zinc-950">{props.chef}</h3>
      <small>{props.ingredients}</small>
      <p className="leading-snug">
        {props.description
          ? props.description.length > 120
            ? props.description.slice(0, 120)
            : props.description
          : ""}
        <small className="text-blue-500"> See more...</small>
      </p>
    </NavLink>
  );
};

export default RecipeCard;
