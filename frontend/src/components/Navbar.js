import React from 'react'

function Navbar() {
  return (
    <nav className='flex justify-around bg-black text-white h-12 items-center'>
        <div>
                <img src='logo' alt='logo'/>
        </div>
        <div>
            <ul className='flex gap-10 '>
                <li className='cursor-pointer hover:font-bold'>Home</li>
                <li className='cursor-pointer hover:font-bold'>About</li>
                <li className='cursor-pointer hover:font-bold'>Services</li>
                <li className='cursor-pointer hover:font-bold'>Login</li>
                <li className='cursor-pointer hover:font-bold'>SignUp</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar