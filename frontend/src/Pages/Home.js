import React from "react";
import Job from "./Job";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <br></br>
        <div class='max-w-md mx-auto'>
          <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div class="grid place-items-center h-full w-12 bg-white text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <input
              class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search here" />
          </div>
          <button className="btn btn-neutral">Search</button>
        </div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-job_516790-1391.jpg?w=740"
              className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold text-slate-300">FIND THE PERFECT JOB SUITABLE FOR YOU</h1>
              <div className="flex mb-4">
                <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  Description
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Reviews
                </a>
                <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Details
                </a>
              </div>
              <p className="py-6 text-slate-300">
                Our Job Listing Portal is a dynamic web application designed to connect job seekers with potential employers efficiently. It features a clean and intuitive interface where users can easily search for job openings across various industries. Employers can create detail job listings, specifying qualifications, responsibilities, and company information. Job seekers can create profiles, upload resumes, and apply for jobs directly through the portal. The portal offers advanced search filters, including job type, location, and salary range, to help users find the perfect match. With real-time notifications, both
                employers and applicants stay updated on application statuses. Secure user authentication ensures data privacy and protection. The portal also includes a dashboard for users to manage their job postings and applications seamlessly
              </p>
              <Link to="/Job"><button className="btn btn-primary " >Find Jobs</button></Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-3xl font-bold text-center mt-10">Job categories</h1>
        <Job />
      </section>
    </>
  );
}

export default Home;
