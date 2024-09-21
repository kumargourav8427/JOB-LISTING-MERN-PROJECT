import React, { useContext } from 'react';
import { JobContext } from '../ContextApi/JobContext';

const JobList = () => {
  const { jobs, deleteJob } = useContext(JobContext);

  return (
    <div>
      <h2>Job Listings</h2>
      <ul>
        {jobs.map(job => (
          <li key={job.id}>
            <h3>{job.title}</h3>
            <p>Location: {job.location}</p>
            <p>Category: {job.category}</p>
            <button onClick={() => deleteJob(job.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobList;
