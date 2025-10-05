import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [task, setTask] = useState([]);

  return (
    <>
      <Create task={task} setTask={setTask} />
      <hr />
      <Read task={task} setTask={setTask} />
    </>
  );
};

export default App;
