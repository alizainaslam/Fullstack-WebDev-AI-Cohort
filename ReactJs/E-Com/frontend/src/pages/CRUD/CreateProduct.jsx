import { useForm } from "react-hook-form";
import { asynceCreateProducts } from "../../store/actions/prodcutsActions";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createProductHandler = (detail) => {
    detail.id = nanoid();
    dispatch(asynceCreateProducts(detail));
    navigate("/products");
    reset();
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-200px)]">
      <form
        onSubmit={handleSubmit(createProductHandler)}
        className="bg-white rounded-sm w-full h-fit md:w-3/4 lg:w-2/4 my-0 mx-auto py-5 px-3 flex flex-col gap-5 shadow-2xs"
      >
        <input
          {...register("image")}
          type="url"
          placeholder="enter src"
          required
          className="outline-0 border-b px-1 py-2 w-full"
        />
        <input
          {...register("title")}
          type="text"
          placeholder="title"
          required
          className="outline-0 border-b px-1 py-2 w-full"
        />
        <input
          {...register("price")}
          type="number"
          placeholder="price"
          required
          className="outline-0 border-b px-1 py-2 w-full"
        />
        <textarea
          {...register("description")}
          name=""
          id=""
          placeholder="description"
          required
          className="outline-0 border-b px-1 py-2 w-full resize-none"
        ></textarea>
        <input
          {...register("category")}
          type="text"
          placeholder="category"
          required
          className="outline-0 border-b px-1 py-2 w-full"
        />
        <button className="mt-3 py-2 px-3 bg-blue-500 text-white rounded-sm">
          Create product
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
