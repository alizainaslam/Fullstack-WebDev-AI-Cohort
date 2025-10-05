const Read = (props) => {
  const task = props.task;
  const taskList = task.map((task) => <li key={task.id}>{task.title}</li>);

  return (
    <>
      <h1>Pending Tasks</h1>
      <ul>{taskList}</ul>
    </>
  );
};

export default Read;
