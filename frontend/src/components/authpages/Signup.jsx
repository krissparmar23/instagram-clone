import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-[100vh] bg-cover px-4"
      style={{
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1lN1hGZAj0MpZ1ZoN7tt7q38JyzTvjmSMQ&usqp=CAU")',
      }}
    >
      <div className="bg-white p-6 md:p-8 border border-gray-400 rounded-md flex flex-col items-center w-full max-w-md">
        <img
          src={logo}
          alt="Logo"
          className="w-40 md:w-48 object-contain mb-4"
        />
        <p className="text-gray-600 text-center text-sm md:text-base font-semibold leading-5 mb-4">
          Sign up to see photos and videos <br /> from your friends
        </p>
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
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="w-full mb-3">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
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
        <p className="text-gray-600 text-center text-xs mb-4">
          By signing up, you agree to our Terms, <br /> Privacy Policy, and
          Cookies Policy.
        </p>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-blue-600"
        >
          Sign Up
        </button>
      </div>

      <div className="bg-white p-6 mt-4 border border-gray-400 rounded-md text-center w-full max-w-md">
        Already have an account?{" "}
        <Link to="/signin">
          <span className="text-blue-500 font-semibold hover:underline">
            Sign In
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
