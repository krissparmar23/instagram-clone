import React, { useState } from "react";
import logo from "../../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { HiEye, HiEyeOff } from "react-icons/hi";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const postData = () => {
    if (!emailRegex.test(email)) {
      toast.error(`Invalid email`);
      return;
    }

    fetch("http://localhost:5000/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
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
          console.log(data);
          localStorage.setItem("jwt", data);
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Something went wrong! Please try again.");
      });
  };

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <button
          type="submit"
          id="login-btn"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md w-full hover:bg-blue-600 mt-3"
          onClick={() => {postData()}}
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
