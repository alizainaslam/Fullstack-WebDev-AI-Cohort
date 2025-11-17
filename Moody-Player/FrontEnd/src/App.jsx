import FacialExpression from "./components/FacialExpression.jsx";
import Header from "./components/header/Header.jsx";
import Songs from "./components/songs/Songs.jsx";

const App = () => {
  return (
    <>
      <header className="px-[5%] lg:px-[7%]">
        <Header />
      </header>
      <main className="px-[5%] lg:px-[7%]">
        <FacialExpression />
        <Songs />
      </main>
    </>
  );
};

export default App;
