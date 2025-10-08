import { Outlet, useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const productDetails = (name) => {
    navigate(`/products/productdetails/${name}`);
  };
  return (
    <>
      <h1>Product</h1>
      <div className="products flex flex-col gap-10 mt-6">
        <div className="flex flex-col gap-3">
          <h2>Product 1</h2>
          <p>Product details...</p>
          <button
            className="px-3 py-1 bg-white text-black text-lg w-fit"
            onClick={() => productDetails("Product 1")}
          >
            See details
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <h2>Product 2</h2>
          <p>Product details...</p>
          <button
            onClick={() => productDetails("Product 2")}
            className="px-3 py-1 bg-white text-black text-lg w-fit"
          >
            See details
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <h2>Product 3</h2>
          <p>Product details...</p>
          <button
            onClick={() => productDetails("Product 3")}
            className="px-3 py-1 bg-white text-black text-lg w-fit"
          >
            See details
          </button>
        </div>

        <Outlet />
      </div>
    </>
  );
};

export default Products;
