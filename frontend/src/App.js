import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Navbar from './layouts/Navbar'
import Home from './Pages/Home'
import Job from './Pages/Job';
import Contact from './Pages/Contact';
import Footer from './layouts/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/job" element={<Job />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;