import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();

  const loginHandler = (userdetails) => {
    console.log(userdetails);
    reset();
  };

  return (
    <section className="bg-white rounded-sm md:w-2/3 lg:w-1/3 my-0 mx-auto py-5 px-3 flex flex-col gap-5 shadow-2xs">
      <h1 className="text-3xl font-bold">Sign In</h1>
      <form
        className="flex flex-col gap-4"
        onSubmit={handleSubmit(loginHandler)}
      >
        <input
          {...register("username")}
          type="text"
          placeholder="john-doe"
          autoComplete="username"
          required
          className="outline-0 border-b px-1 py-2 w-full"
        />
        <input
          {...register("email")}
          type="email"
          placeholder="johndoe@mail.com"
          autoComplete="email"
          required
          className="outline-0 border-b px-1 py-2 w-full"
        />{" "}
        <input
          {...register("password")}
          type="password"
          placeholder="*******"
          autoComplete="current-password"
          required
          className="outline-0 border-b px-1 py-2 w-full"
        />
        <button className="mt-3 py-2 px-3 bg-blue-500 text-white rounded-sm ">
          Sign In
        </button>
        <p className="text-center">
          New Here?{" "}
          <span className="text-blue-500">
            <NavLink>Create an Account</NavLink>
          </span>
        </p>
      </form>
    </section>
  );
};

export default Login;
