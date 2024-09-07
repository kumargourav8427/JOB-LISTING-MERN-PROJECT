import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex justify-around bg-black text-white h-12 items-center'>
      <div>
        <img src='logo' alt='logo' />
      </div>
      <div>
        <ul className='flex gap-10 '>
          <li>
            <Link to="/" className='cursor-pointer hover:font-bold'>Home</Link>
          </li>
          <li>
            <Link to="/job-listing" className='cursor-pointer hover:font-bold'>Job</Link>
          </li>
          <li>
            <Link to="/blogs" className='cursor-pointer hover:font-bold'>Blogs</Link>
          </li>
          <li>
            <Link to="/contact" className='cursor-pointer hover:font-bold'>Contact</Link>
          </li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar