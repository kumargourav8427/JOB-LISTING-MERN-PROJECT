import React from 'react'
import ItemsContain from '../component/ItemsContain'
import Social from '../component/Social.js'
// import { Icons } from './Menu.js'

function Footer() {
  return (
    <footer className='bg-slate-900 text-white'>
      <div className="md:flex md:justify-between md:items-center sm:px=12 px-4 bg-[#703eb0] py-7">
        <h1 className="lg: text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-red-500">Contact</span> Us 
        </h1>
        <div>
          <input type="text"
                 placeholder="Enter your phone number"
                 className="text-grey-800 sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"/>
            <button className="bg-red-500 hover:bg-red-700 duration-300 text-white text-lg font-bold font-mono px-5 py-2.5 rounded-md md:w-auto w-full">Send</button>
        </div>
      </div>
      <ItemsContain/>
      <Social 
      // Icon={Icons}
      />
    </footer>
  )
}

export default Footer