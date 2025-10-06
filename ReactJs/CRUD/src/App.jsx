import Create from "./components/Create";
import Read from "./components/Read";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center py-3.5 px-2 lg:py-5 md:px-3">
      <div className="bg-white w-full min-h-[calc(100vh-30px)] rounded-md p-4 md:p-6 lg:p-10 shadow-xs flex flex-col gap-[30px] md:flex-row md:gap-20 lg:justify-between">
        <Create />
        <Read />
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default App;
