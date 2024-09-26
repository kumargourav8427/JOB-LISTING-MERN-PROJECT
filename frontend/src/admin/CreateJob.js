import React from 'react'
import { useNavigate } from 'react-router-dom'

function CreateJob() {
  const navigate = useNavigate()
const registerNewComapny = async() =>{
  try{

  }
  catch(error){

  }
}
  return (
    <div>
        <div className='max-w-4xl mx-auto'>
            <h1 className='font-bold text-2xl'>Your Company Name</h1>
            <p>What should br craete the company abput his </p>
            <div className='flex flex-col py-5'>
              <label className='py-3'>Company Name</label>
              <input type='text' 
              className='p-3 border-solid border-4 border-black'
              placeholder='Job Hunt Microsoft etc.'
              />
            </div>
            <div className='flex gap-5 w-fit'>
              <button onClick={()=> navigate("/admin/company")}>Cancel</button>
              <button className='bg-black text-white hover:bg-black'>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default CreateJob