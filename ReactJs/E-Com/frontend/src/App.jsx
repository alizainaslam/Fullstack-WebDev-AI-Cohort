import { useEffect } from "react";
import asyncGetUser from "./store/slice/userAction";



const App = () => {
  useEffect(() => {
    asyncGetUser();
  }, []);

  return <div>App</div>;
};

export default App;
