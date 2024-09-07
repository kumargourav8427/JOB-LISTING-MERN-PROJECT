import Navbar from "./layouts/Navbar";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import JobListing from "./Pages/JobListing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/job-listing" element={<JobListing />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
