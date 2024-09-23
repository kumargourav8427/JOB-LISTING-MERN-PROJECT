import React from 'react';
import JobList from './JobList';
import { useNavigate } from 'react-router-dom';

const Company = () => {

  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate('/admin/company/create')
  };

  return (
    <div className=' max-w-6xl mx-auto my-10'>
      <div className='flex items-center justify-between'>
        <input
          type="text"
          placeholder="Filter by name"
          className='w-fit border border-black  p-3'
        />
        <button onClick={handleSubmit} className='w-24'>Add Job</button>
      </div>
      <JobList/>
    </div>
  );
};

export default Company;
