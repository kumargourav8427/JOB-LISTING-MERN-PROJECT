import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../apiAddress/constant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signup = () => {
  const [signupInput, setSignupInput] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
  });

  const changeEventHandler = (e) => {
    setSignupInput({ ...signupInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${USER_API_END_POINT}/register`,
        signupInput,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast('Account Created Succefully', {
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
          navigate("/login");
        }, 5000)
      }
      console.log(res.data.success, "sinup success");

    } catch (error) {
      console.log(error);
    }
    console.log(signupInput, "signup data");
  };

  const navigate = useNavigate();

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
/>
<ToastContainer />
    <div className="main-auth py-3 min-[100vh] flex justify-center">
      <div className="auth-container ">
        <h2 className="text-3xl font-bold">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              name="fullname"
              value={signupInput.fullname}
              onChange={changeEventHandler}
              placeholder="Enter Fullname "
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={signupInput.email}
              onChange={changeEventHandler}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={signupInput.password}
              onChange={changeEventHandler}
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Mobile Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={signupInput.phoneNumber}
              onChange={changeEventHandler}
              placeholder="Enter phone number"
            />
          </div>
          <div className="flex gap-5">
            <div className="flex items-center mb-4">
              <input
                id="default-radio-1"
                type="radio"
                name="role"
                value="student"
                checked={signupInput.role === "student"}
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
                checked={signupInput.role === "recruiter"}
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
            Signup
          </button>
         
        </form>
        <p className="text-red-800 text-center">
            Alredy have an account{" "}
            <Link to="/login" className="text-blue-900">
              Login
            </Link>
          </p>
      </div>
    </div>
    </>
  );
};

export default Signup;
