import { useEffect } from "react";
import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";
import { useDispatch, useSelector } from "react-redux";
import { aasyncCurrentUser } from "./store/actions/auth";

const App = () => {
  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(aasyncCurrentUser());
  }, []);

  useEffect(() => {
    console.log("Current User:", user);
  }, [user]);

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
