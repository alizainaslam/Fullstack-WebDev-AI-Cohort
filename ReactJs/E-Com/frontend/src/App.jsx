import { useEffect } from "react";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";
import { useDispatch } from "react-redux";
import { asyncCurrentUser } from "./store/actions/auth";
import { asynceLoadProducts } from "./store/actions/prodcutsActions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asynceLoadProducts());
  }, []);

  return (
    <>
      <header>
        <Nav />
      </header>
      <main className="px-[10%]">
        <MainRoutes />
      </main>
    </>
  );
};

export default App;
