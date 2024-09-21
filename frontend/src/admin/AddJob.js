import React, { useState, useContext } from 'react';
import { JobContext } from '../ContextApi/JobContext';
import { AuthContext } from '../ContextApi/AuthContext';

const AddJob = () => {
  const { addJob } = useContext(JobContext);
  const { user} = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');


  const handleSubmit = () => {
    if (user && user.role === 'employer') {
      addJob({ title, location, category });
      setTitle('');
      setLocation('');
      setCategory('');
    } else {
      alert('Only employers can add jobs.');
    }
  };

  return (
    <div>
      <h2>Add a Job</h2>
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Job</button>
    </div>
  );
};

export default AddJob;
