import { toast } from "react-toastify";

const Read = (props) => {
  const task = props.task;
  const setTask = props.setTask;

  const deleteHandler = (id) => {
    setTask(task.filter((task) => task.id != id));
    toast.warn("Todo has been deleted!");
  };

  const taskList = task.map((task) => (
    <li key={task.id} className="flex gap-3.5 items-start">
      <button
        onClick={() => deleteHandler(task.id)}
        className="flex-shrink-0 translate-y-[3px] hover:cursor-pointer"
      >
        <div className="h-[18px] w-[18px] border rounded-full"></div>
      </button>
      <span className="leading-snug">{task.title}</span>
    </li>
  ));

  return (
    <div className="md:w-[50%]">
      <h1 className="text-4xl font-semibold leading-14 mb-4">Pending Todos</h1>
      <ul className="flex flex-col gap-2.5">{taskList}</ul>
    </div>
  );
};

export default Read;
