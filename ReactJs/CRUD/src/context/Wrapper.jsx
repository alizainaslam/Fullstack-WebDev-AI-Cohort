import { createContext, useState } from "react";

export const todoContext = createContext(null);

const Wrapper = (props) => {
  const [task, setTask] = useState([]);

  return (
    <todoContext.Provider value={{ task, setTask }}>
      {props.children}
    </todoContext.Provider>
  );
};

export default Wrapper;
