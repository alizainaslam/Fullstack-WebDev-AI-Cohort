import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
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

  return <div>{productDetail}</div>;
};

export default ProductDetails;
