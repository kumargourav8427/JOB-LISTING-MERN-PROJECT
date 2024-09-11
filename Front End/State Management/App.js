import React from 'react';
import { AuthProvider } from './AuthContext';
import { JobProvider } from './JobContext';
import Navbar from './Navbar';
import JobList from './JobList';
import AddJob from './AddJob';
import Login from './Login';

const App = () => {
  return (
    <AuthProvider>
      <JobProvider>
        <Navbar />
        <Login />
        <AddJob />
        <JobList />
      </JobProvider>
    </AuthProvider>
  );
};

export default App;
