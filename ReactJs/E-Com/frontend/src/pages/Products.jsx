import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);
  const navigate = useNavigate();

  const productDetail = (id) => {
    navigate(`/products/product-details/${id}`);
  };

  const displayProducts = products
    ? products.map((product) => {
        return (
          <div
            key={product.id}
            className="flex flex-col h-[500px] w-full gap-2 md:w-[300px] bg-white p-3 rounded"
          >
            <img
              src={product.image}
              alt="product image"
              className="rounded px-1 h-[200px] object-center object-cover w-full"
            />
            <h1 className="font-semibold">{product.title}</h1>
            <h3>{product.price}</h3>
            <p>{product.description}</p>
            <div className="flex justify-between items-center">
              <small>{product.category}</small>
              <button
                onClick={() => productDetail(product.id && product.id)}
                className="cursor-pointer py-1 px-2 bg-gray-600 rounded text-white"
              >
                View details
              </button>
            </div>
          </div>
        );
      })
    : "loading";
  return (
    <section className="flex justify-center flex-wrap gap-10">
      {displayProducts}
    </section>
  );
};

export default Products;
