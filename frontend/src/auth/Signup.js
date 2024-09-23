import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../apiAddress/constant";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setLoading } from "../redux/authSlice";
import { Vortex } from 'react-loader-spinner'
import { useDispatch, useSelector } from "react-redux";




const Signup = () => {
  const [signupInput, setSignupInput] = useState({
    fullname: "",
    email: "",
    password: "",
    phoneNumber: "",
    role: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector(store => store.auth)


  const changeEventHandler = (e) => {
    setSignupInput({ ...signupInput, [e.target.name]: e.target.value });
  };
  // Validation function
  const validateSignup = () => {
    const { fullname, email, password, phoneNumber, role } = signupInput;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!fullname) {
      toast.error("Full name is required");
      return false;
    }

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

    if (!phoneNumber) {
      toast.error("Phone number is required");
      return false;
    } else if (!phoneRegex.test(phoneNumber)) {
      toast.error("Please enter a valid 10-digit phone number");
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
    if (!validateSignup()) return;

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
        toast.success("Account Created Successfully", {
          position: "bottom-right",
          autoClose: 5000,
        });
        navigate("/login");
      }

    } catch (error) {
      toast.error("Signup failed. Please try again.");
      console.error(error);
    }
    finally {
      dispatch(setLoading(false))
    }
  };



  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
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

            {
              loading ? <button className="w-full h-10 flex justify-center items-center gap-3"><Vortex
                visible={true}
                height="40"
                width="40"
                colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
              />Please Wait!</button> : <button type="submit" className="mb-3">
                Signup
              </button>
            }
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
