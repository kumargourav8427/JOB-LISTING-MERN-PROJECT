import React, { useState } from "react";
import "./auth.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { USER_API_END_POINT } from "../apiAddress/constant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/authSlice";
import { Vortex } from 'react-loader-spinner'



const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    role: "",
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector(store => store.auth)




  const changeEventHandler = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value });
  };
  // Validation function
  const validateLogin = () => {
    const { email, password, role } = loginInput;

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast.error("Email is required");
      return false;
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return false;
    }

    if (!password) {
      toast.error("Password is required");
      return false;
    } else if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    if (!role) {
      toast.error("Please select a role");
      return false;
    }

    return true;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateLogin()) return;

    dispatch(setLoading(true))
    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, loginInput, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      console.log(res.data.success, "login");

      if (res.data.success) {
        dispatch(setUser(res.data.user))
        navigate("/");
        toast('🦄Login Succefully', {
          position: "bottom-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

      }

    } catch (error) {
      toast.error("Login failed. Please check your credentials.");
      console.error(error);
    }
    finally {
      dispatch(setLoading(false))
    }

    // console.log('Login:', { email, password });
    console.log(loginInput, "login data");
  };


  return (
    <>
      <ToastContainer
        position="bottom-right"
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

            {
              loading ? <button className="w-full h-10 flex justify-center items-center gap-3"><Vortex
                visible={true}
                height="40"
                width="40"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
              />Please Wait!</button> : <button type="submit" className="mb-3">
                Login
              </button>
            }
            <p className="text-red-800 text-center">
              Don't have an account{" "}
              <Link to="/signup" className="text-blue-900">
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
      {/* <div>
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
      </div> */}
    </>
  );
};

export default Login;
