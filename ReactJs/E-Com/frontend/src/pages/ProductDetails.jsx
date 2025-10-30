import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  asynceDeleteProducts,
  asynceUpdateProducts,
} from "../store/actions/prodcutsActions";
import { useForm } from "react-hook-form";
import { asyncUpdateUser } from "../store/actions/auth";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.userReducer.users);

  const getProduct = product && product.find((prod) => prod.id == id);

  const addtoCardHandler = (id) => {
    console.log(user);
    const copyUser = { ...user, cart: [...user.cart] };

    const index = copyUser.cart.findIndex((item) => item.id === id);

    if (index === -1) {
      copyUser.cart.push({ id: id, quantity: 1 });
    } else {
      console.log(index);
    }
    dispatch(asyncUpdateUser(user.id, [...user.cart, copyUser.cart]));
  };

  const productDetail = getProduct && (
    <div className="flex flex-col gap-2 md:w-[400px] bg-white p-3 rounded h-fit">
      <img
        src={getProduct.image}
        alt="getProduct? image"
        className="rounded px-1 h-[200px] object-center object-cover w-full"
      />
      <h1 className="font-semibold">{getProduct.title}</h1>
      <h3>{getProduct.price}</h3>
      <p>{getProduct.description}</p>
      <div className="flex justify-between items-center">
        <small>{getProduct.category}</small>
        {user && !user?.isAdmin && (
          <button
            className="cursor-pointer py-1 px-2 bg-gray-600 rounded text-white"
            onClick={() => addtoCardHandler(getProduct.id)}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );

  const deleteHandler = () => {
    dispatch(asynceDeleteProducts(id));
    navigate("/products");
  };

  const { register, handleSubmit, reset } = useForm({
    defaultValues: getProduct && {
      image: getProduct?.image,
      title: getProduct.title,
      price: getProduct.price,
      description: getProduct.description,
      category: getProduct.category,
    },
  });

  const updateProductHandler = (productDetail) => {
    dispatch(asynceUpdateProducts(getProduct.id, productDetail));
  };

  return (
    <div className="lg:flex w-full">
      {productDetail}
      <div className="flex mt-10 gap-10 flex-col w-full items-center">
        {user && user?.isAdmin && (
          <>
            <form
              onSubmit={handleSubmit(updateProductHandler)}
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
                Update product
              </button>
            </form>
            <button
              onClick={deleteHandler}
              className="py-2 px-3 bg-red-500 text-center text-white rounded w-fit h-fit"
            >
              Delete Product
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
