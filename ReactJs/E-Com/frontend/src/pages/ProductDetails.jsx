import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { asynceDeleteProducts } from "../store/actions/prodcutsActions";


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productReducer.products);
  const getProduct = product && product.find((prod) => prod.id == id);

  const productDetail = getProduct && (
    <div className="flex flex-col gap-2 md:w-[400px] bg-white p-3 rounded">
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
      </div>
    </div>
  );

  const deleteHandler = () => {
    dispatch(asynceDeleteProducts(id));
    navigate("/products");
  };
  return (
    <div>
      {productDetail}
      <div className="flex mt-10 gap-10">
        <button className="py-2 px-3 bg-blue-500 text-white rounded">
          Update Product
        </button>
        <button
          onClick={deleteHandler}
          className="py-2 px-3 bg-red-500 text-white rounded"
        >
          Delete Product
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
