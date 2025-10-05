import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  const setTask = props.setTask;
  
  const [title, setTitle] = useState("");

  const submitHandler = (ev) => {
    ev.preventDefault();
    let newTask = {
      id: nanoid(),
      title,
      isCompleted: false,
    };
    setTask((prev) => [...prev, newTask]);
    setTitle("");
  };

  return (
    <>
      <h1>To do</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="title"
          required
          onChange={(ev) => setTitle(ev.target.value)}
          value={title}
        />
        <button>+</button>
      </form>
    </>
  );
};

export default Create;
