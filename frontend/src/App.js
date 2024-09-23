import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Home from './Pages/Home'
import Job from './Pages/Job';
import Contact from './Pages/Contact';
import Profile from './component/Profile'
import JobList from './admin/JobList';
import Company from './admin/Company';
import { JobProvider } from './ContextApi/JobContext';
import { AuthProvider } from './ContextApi/AuthContext';
import CreateJob from './admin/CreateJob';



const App = () => {
  return (
    <>
      <AuthProvider>
        <JobProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/job" element={<Job />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/admin/company" element={<Company /> } />
              <Route path="/admin/company/create" element={<CreateJob /> } />
              <Route path="/admin/addjob" element={<JobList />} />
            </Routes>
            <Footer />
          </Router >
        </JobProvider>
      </AuthProvider>
    </>

  );
};

export default App;
