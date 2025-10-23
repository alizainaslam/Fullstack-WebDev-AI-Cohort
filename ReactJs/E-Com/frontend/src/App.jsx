import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import asyncGetUser from "./store/slice/userAction";

const App = () => {
  const selector = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(selector);

  useEffect(() => {
    dispatch(asyncGetUser());
  }, []);
  1;
  return <div>App</div>;
};

export default App;
