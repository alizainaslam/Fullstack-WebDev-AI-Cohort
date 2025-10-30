import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncSignup } from "../store/actions/auth";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";

const Signup = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signupHandler = (userdetails) => {
    const id = nanoid();
    const isAdmin = false;
    const cart = [];
    const { username, email, password } = userdetails;
    const user = { id, username, email, password, isAdmin, cart };
    dispatch(asyncSignup(user));
    setTimeout(() => {
      navigate("/login");
    }, 300);
    reset();
  };

  return (
    <div className="flex items-center justify-center h-[calc(100vh-100px)]">
      <section className="bg-white rounded-sm w-full h-fit md:w-3/4 lg:w-2/4 my-0 mx-auto py-5 px-3 flex flex-col gap-5 shadow-2xs">
        <h1 className="text-3xl font-bold">Create Account</h1>
        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(signupHandler)}
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
            Sign Up
          </button>
          <p className="text-center">
            Already have an account?
            <span className="text-blue-500">
              <Link to="/login"> Login</Link>
            </span>
          </p>
        </form>
      </section>
    </div>
  );
};

export default Signup;
