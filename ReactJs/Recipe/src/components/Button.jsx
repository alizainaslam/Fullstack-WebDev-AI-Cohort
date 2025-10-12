const Button = ({ cls, value, onClick }) => {
  return (
    <button
      className={`cursor-pointer px-3 py-2 rounded text-white ${cls}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Button;
