import Nav from "./components/Nav";
import Router from "./routes/Router";

const App = () => {
  return (
    <div className="px-[10%] w-full h-screen bg-zinc-900 text-white">
      <Nav />
      <Router />
    </div>
  );
};

export default App;
