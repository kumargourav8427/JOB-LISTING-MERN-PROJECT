import React from 'react'
import { Link } from 'react-router-dom'
import userIcon from '../assets/user.png'
import './navbar.css'
function Navbar() {
  return (
    <nav className=" bg-black text-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 h-16">

        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt=" Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FindJobs</span>
        </Link>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto  " id="navbar-user">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
            <li>
              <Link to="/" className="block py-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/job" className="block py-2 px-3 rounded md:bg-transparent md:p-0">Job</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 rounded md:bg-transparent md:p-0">Contact</Link>
            </li>
            <li>
              <Link to="/login" className="block py-2 px-3 rounded md:bg-transparent md:p-0">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="block py-2 px-3 rounded md:bg-transparent md:p-0">Signup</Link>
            </li>

          </ul>
        </div>
        <div className="items-center space-x-3 md:space-x-0 ">
          <div className="dropdown">
            <button classNameName='dropIcon'>
              <img src={userIcon} alt='userIcon' width={30} classNameName=' rounded-lg ' />
            </button>
            <div className="dropdown-content rounded-sm">
              <Link to="/profile">View Profile</Link>
              <Link to="#">Logout</Link>
            </div>
          </div>
        </div>

      </div>
    </nav>

  )
}

export default Navbar