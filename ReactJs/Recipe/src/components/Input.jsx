const Input = ({ type, placeholder, ...inputPops }) => {
  return (
    <input
      type={type}
      required
      placeholder={placeholder}
      {...inputPops}
      className="outline-0 border-b w-full px-0.5 pb-1.5"
    />
  );
};

export default Input;
