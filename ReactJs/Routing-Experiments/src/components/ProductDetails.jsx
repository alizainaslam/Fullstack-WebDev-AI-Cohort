import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  console.log(name);
  const backToDetails = () => {
    navigate("/products");
  };

  return (
    <div>
      <h1>{name}</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit Optio modi
        reprehenderit culpa voluptatem est velit a.
      </p>
      <button
        className="px-3 py-1 bg-white text-black text-lg w-fit"
        onClick={backToDetails}
      >
        Go back
      </button>
    </div>
  );
};

export default ProductDetails;
