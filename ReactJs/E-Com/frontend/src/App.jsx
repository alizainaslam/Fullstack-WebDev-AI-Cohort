import Nav from "./components/Nav";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
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
