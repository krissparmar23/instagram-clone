import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  return (
    <div
      className="flex justify-center items-center h-[100vh] bg-cover"
      style={{
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1lN1hGZAj0MpZ1ZoN7tt7q38JyzTvjmSMQ&usqp=CAU")',
      }}
    >
      <div className="bg-white/70 p-8 border border-gray-400 rounded-sm">
        <img
          className="w-48 object-contain mb-4 mx-auto"
          src={logo}
          alt="Logo"
        />
        <div className="w-full mb-3">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="w-full mb-3">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          id="login-btn"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-blue-600 mt-3"
        >
          Sign In
        </button>
        <div className="mt-3 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-500 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
