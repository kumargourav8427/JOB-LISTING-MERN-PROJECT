import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import userIcon from '../assets/user.png'
import './navbar.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { USER_API_END_POINT } from '../apiAddress/constant';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/authSlice';

function Navbar() {
  const { user } = useSelector(store => store.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true })
      if (res.data.success) {
        dispatch(setUser(null))
        if(user.role === "student"){
          navigate("/");
        }else{
          navigate("/admin/company")
        }
        toast('🦄Logout Succefully', {
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
      console.log(error);

    }
  }

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
      <nav className=" bg-black text-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 h-16">

          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https:flowbite.com/docs/images/logo.svg" className="h-8" alt=" Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">FindJobs</span>
          </Link>

          <div className="items-center justify-between hidden w-full md:flex md:w-auto  " id="navbar-user">
            <ul className="flex items-center flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
              {user && user.role === 'recruiter' ? (
                <>
                  <li>
                    <Link to="/admin/company" className="block py-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">Companies</Link>
                  </li>
                  <li>
                    <Link to="/admin/addjob" className="block py-2 px-3 rounded md:bg-transparent md:p-0">AddJob</Link>
                  </li>
                </>
              ) :
                <>             
                 <li>
                  <Link to="/" className="block py-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">Home</Link>
                </li>
                  <li>
                    <Link to="/job" className="block py-2 px-3 rounded md:bg-transparent md:p-0">Job</Link>
                  </li>
                  <li>
                    <Link to="/contact" className="block py-2 px-3 rounded md:bg-transparent md:p-0">Contact</Link>
                  </li>
                </>
              }

              <li>
                {!user ? (
                  <div className='flex gap-4'>
                    <button>
                      <Link to="/login" className="block py-2 px-3 rounded md:bg-transparent md:p-0">Login</Link>
                    </button>


                    <button className='bg-slate-50 text-black hover:text-white'>
                      <Link to="/signup" className="block py-2 px-3 rounded md:bg-transparent md:p-0">Signup</Link>
                    </button>
                  </div>
                ) : (
                  <div className="items-center space-x-3 md:space-x-0 ">
                    <div className="dropdown">
                      <button classNameName='dropIcon'>
                        <img src={userIcon} alt='userIcon' width={30} classNameName=' rounded-lg ' />
                      </button>
                      <div className="dropdown-content rounded-sm">
                      {user && user.role === 'student' && (
                         <Link to="/profile">View Profile</Link>
                      )}
                        <button className='bg-gray-300 text-black' onClick={logoutHandler}>Logout</button>
                      </div>
                    </div>
                  </div>

                )}
              </li>
            </ul>
          </div>

        </div>
      </nav>
      {/* <div>
          {user ? (
            <>
              <span>Welcome, {user.username}!</span>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </div> */}
    </>

  )
}

export default Navbar

