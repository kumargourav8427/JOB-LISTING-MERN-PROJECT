import React, { useEffect } from "react";
import Job from "./Job";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Home() {
  const {user} = useSelector(store => store.auth)
  const navigate = useNavigate()
  useEffect(()=>{
    if(user?.role === 'recruiter'){
      navigate("/admin/company")
    }
  },[])
  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-job_516790-1391.jpg?w=740"
              alt="img"
              className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold text-slate-300">FIND THE PERFECT JOB SUITABLE FOR YOU</h1>
              <div className="flex mb-4">
                <Link className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">
                  Description
                </Link>
                <Link className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Reviews
                </Link>
                <Link className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1">
                  Details
                </Link>
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
