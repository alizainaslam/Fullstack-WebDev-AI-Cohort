import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

const App = () => {
  const [users, setUsers] = useState([
    {
      name: "Ali",
      age: 27,
    },
    {
      name: "John",
      age: 30,
    },
  ]);

  return (
    <>
      <Create />
      <hr />
      <Read username={users} setUsers={setUsers} />
    </>
  );
};

export default App;
