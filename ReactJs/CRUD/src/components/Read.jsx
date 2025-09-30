const Read = (props) => {
  const userdata = props.username.map((user, idx) => {
    return (
      <ol key={idx}>
        <p>Username: {user.name}</p>
        <span>userage: {user.age}</span>
      </ol>
    );
  });
  return (
    <>
      <h1>User details</h1>
      {userdata}
    </>
  );
};

export default Read;
