import { useState } from "react";
import logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

  const PostData = () => {
    if (!emailRegex.test(email)) {
      toast.error(`Invalid email`);
      return;
    } else if (!passRegex.test(password)) {
      toast.error(
        "Password must contain at least 8 characters, including at least 1 number and 1 special character (e.g. #, ?, !)"
      );
      return;
    }

    fetch("http://localhost:5000/signup", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        userName: username,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        } else {
          toast.success(data.message);
          navigate("/signin");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong! Please try again.");
      });
  };

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full mb-3">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Full Name"
            className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="w-full mb-3">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Username"
            className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="w-full mb-3 relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded-md outline-none focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
         
          <div
            className="absolute right-3 top-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <HiEyeOff size={24} className="w-4"/> : <HiEye size={24} className="w-4"/>}
          </div>
        </div>
        <p className="text-gray-600 text-center text-xs mb-4">
          By signing up, you agree to our Terms, <br /> Privacy Policy, and
          Cookies Policy.
        </p>
        <button
          type="submit"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-blue-600"
          onClick={PostData}
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
