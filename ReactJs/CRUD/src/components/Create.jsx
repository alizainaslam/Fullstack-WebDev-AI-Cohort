import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const Create = (props) => {
  const setTask = props.setTask;
  const task = props.task;
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    let newTask = {
      id: nanoid(),
      title: data.title,
      isCompleted: false,
    };
    toast.success("Todo created successfully.");
    setTask([...task, newTask]);
    reset();
  };

  return (
    <div className="md:w-[50%]">
      <h1 className="text-5xl font-semibold leading-14 mb-4">To Do</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full justify-between border-b-1 pb-[1px]"
      >
        <input
          type="text"
          placeholder="Add todo"
          required
          {...register("title")}
          className="border-none outline-0 w-[90%]"
        />
        <button className="hover:cursor-pointer">+</button>
      </form>
    </div>
  );
};

export default Create;
