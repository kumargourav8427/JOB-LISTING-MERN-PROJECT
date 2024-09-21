import React, { useState } from "react";
import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../apiAddress/constant";

const Signup = () => {
  const [signupInput, setSignupInput] = useState({
    fullanme: "",
    email: "",
    password: "",
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
      console.log(res.data.success, "sinup success");

      if (res.data.success) {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(signupInput, "signup data");
  };

  const navigate = useNavigate();

  return (
    <div className="main-auth py-3 min-[100vh] flex justify-center">
      <div className="auth-container ">
        <h2 className="text-3xl font-bold">Signup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              name="fullname"
              value={signupInput.fullanme}
              onChange={changeEventHandler}
              placeholder="Enter fullname"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={signupInput.fullanme}
              onChange={changeEventHandler}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={signupInput.fullanme}
              onChange={changeEventHandler}
              placeholder="Enter password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              name="confirm_pass"
              value={signupInput.fullanme}
              onChange={changeEventHandler}
              placeholder="Re-Enter your password"
            />
          </div>
          <div className="form-group flex">
            <label htmlFor="password">Student</label>
            <input
              type="radio"
              name="role"
              value="student"
              checked={signupInput.role === "student"}
              onChange={changeEventHandler}
              className="cursor-pointer"
            />
            <label htmlFor="password">Recruiter</label>
            <input
              type="radio"
              name="role"
              value="recruiter"
              checked={signupInput.role === "recruiter"}
              onChange={changeEventHandler}
              className="cursor-pointer"
            />
          </div>
          <button type="submit" className='mb-3'>Signup</button>
          <p className="text-red-800 text-center">
          Alredy have an account <Link to="/login" className="text-blue-900">Login</Link>

          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
