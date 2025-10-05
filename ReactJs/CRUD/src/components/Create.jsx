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
    <div className="md:w-[50%]">
      <h1 className="text-5xl font-semibold leading-14 mb-4">To Do</h1>
      <form
        onSubmit={submitHandler}
        className="flex w-full justify-between border-b-1 pb-[1px]"
      >
        <input
          type="text"
          placeholder="Add todo"
          required
          onChange={(ev) => setTitle(ev.target.value)}
          value={title}
          className="border-none outline-0 w-[90%]"
        />
        <button className="hover:cursor-pointer">+</button>
      </form>
    </div>
  );
};

export default Create;
