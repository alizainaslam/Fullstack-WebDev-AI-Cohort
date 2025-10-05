import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [task, setTask] = useState([]);

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center py-3.5 px-2 lg:py-5 md:px-3">
      <div className="bg-white w-full rounded-md p-4 md:p-6 lg:p-10 shadow-xs flex flex-col gap-[30px] md:flex-row md:gap-20 justify-between">
        <Create task={task} setTask={setTask} />
        <Read task={task} setTask={setTask} />
      </div>
    </div>
  );
};

export default App;
