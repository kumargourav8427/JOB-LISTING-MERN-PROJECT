import React, { useState } from "react";
import "./auth.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { USER_API_END_POINT } from "../apiAddress/constant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useContext } from "react";
import { AuthContext } from "../ContextApi/AuthContext";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, loginInput, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(res.data.success, "login");

      if (res.data.success) {
        toast('🦄Login Succefully', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/");
        }, 3000)
      }

    } catch (error) {
      console.log(error);
    }

    // console.log('Login:', { email, password });
    console.log(loginInput, "login data");
  };

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    // login(username, password);
    toast('🦄 Login Succefully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce"
      />
      <div className="main-auth py-5 min-[100vh] flex justify-center">
        <div className="auth-container">
          <h2 className="text-3xl font-bold">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={loginInput.email}
                onChange={changeEventHandler}
                placeholder="Enter email "
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={loginInput.password}
                onChange={changeEventHandler}
                placeholder="Enter password "
              />
            </div>
            <div className="flex gap-5">
              <div className="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  name="role"
                  value="student"
                  checked={loginInput.role === "student"}
                  onChange={changeEventHandler}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
                />
                <label
                  for="default-radio-1"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Student
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={loginInput.role === "recruiter"}
                  onChange={changeEventHandler}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
                />
                <label
                  for="default-radio-1"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Recruiter
                </label>
              </div>
            </div>
            <button type="submit" className="mb-3">
              Login
            </button>
            <p className="text-red-800 text-center">
              Don't have an account{" "}
              <Link to="/signup" className="text-blue-900">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username Or Email-ID"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default Login;
