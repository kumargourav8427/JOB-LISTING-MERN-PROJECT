import React, { useState } from 'react';
import './auth.css';
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
import { USER_API_END_POINT } from '../apiAddress/constant';


const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
    role: ""
  })

  const changeEventHandler = (e) => {
    setLoginInput({ ...loginInput, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, loginInput, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      })
      console.log(res.data.success, "hgsdhfgds");

      if (res.data.success) {
        navigate("/")
      }
    } catch (error) {
      console.log(error);


    }

    // console.log('Login:', { email, password });
    console.log(loginInput, "login data");

  };

  const navigate = useNavigate()

  return (
    <div className='main-auth py-5 min-[100vh] flex justify-center'>
      <div className="auth-container">
        <h2 className='text-3xl font-bold'>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={loginInput.email}
              onChange={changeEventHandler}
              placeholder='Enter email '
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={loginInput.password}
              onChange={changeEventHandler}
              placeholder='Enter email '

            />
          </div>
          <div className="form-group flex">
            <label htmlFor="password">Student</label>
            <input
              type="radio"
              name="role"
              value="student"
              checked={loginInput.role === 'student'}
              onChange={changeEventHandler}
              className='cursor-pointer'
            />
            <label htmlFor="password">Recruiter</label>
            <input
              type="radio"
              name="role"
              value="recruiter"
              checked={loginInput.role === 'recruiter'}
              onChange={changeEventHandler}
              className='cursor-pointer'

            />
          </div>
          <button type="submit" className='mb-3'>Login</button>
          <p className="text-red-800 text-center">Don't have an account <Link to ="/signup" className="text-blue-900">Signup</Link></p>

        </form>
      </div>
    </div>
  );
};

export default Login;
