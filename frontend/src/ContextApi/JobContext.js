import React, { createContext, useState } from 'react';

export const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Frontend Developer', location: 'Remote', category: 'Tech' },
    { id: 2, title: 'Backend Developer', location: 'New York', category: 'Tech' },
    { id: 3, title: 'Designer', location: 'San Francisco', category: 'Design' },
  ]);

  const addJob = (job) => {
    setJobs([...jobs, { id: jobs.length + 1, ...job }]);
  };

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const filterJobs = (keyword, location, category) => {
    return jobs.filter(job => {
      return (
        (keyword === '' || job.title.toLowerCase().includes(keyword.toLowerCase())) &&
        (location === '' || job.location.toLowerCase() === location.toLowerCase()) &&
        (category === '' || job.category === category)
      );
    });
  };

  return (
    <JobContext.Provider value={{ jobs, addJob, deleteJob, filterJobs }}>
      {children}
    </JobContext.Provider>
  );
};