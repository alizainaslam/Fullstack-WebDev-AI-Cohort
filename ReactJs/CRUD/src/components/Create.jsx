import { useState } from "react";

const Create = (props) => {
  const [username, setUsername] = useState("");
  const [userage, setUserage] = useState("");

  const submitHandler = (ev) => {
    ev.preventDefault();
    const newuser = { username, userage };
    console.log(newuser);
  };
  return (
    <>
      <h1>Add new user</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="username"
          onChange={(ev) => setUsername(ev.target.value)}
          value={username}
        />
        <input
          type="number"
          placeholder="userage"
          onChange={(ev) => setUserage(ev.target.value)}
          value={userage}
        />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Create;
