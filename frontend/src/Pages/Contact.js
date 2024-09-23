import React from "react";
import contactImg from '../assets/contactImg.jpeg'
import { Link } from 'react-router-dom'

function Contact() {

  return (
    <>
      <div className="bg-purple-500 py-5 text-white text-center font-bold">
        <p className="text-2xl mb-3">Contact</p>
        <p className="flex gap-2 justify-center ">
          <Link to="/" className="hover:text-black"><span>Home</span></Link>&#8680;<span>Contact</span>
        </p>
      </div>
      <div className="main flex p-5 ">
        <div className="left  ">
          <h1 className="text-2xl font-semibold mb-2">Get in touch</h1>
          <p className="mb-6">
            Start working with Jobcy that can provide everything you need to
            generate awareness, drive traffic, connect.{" "}
          </p>
          <form>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="First name"
                />
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-semibold mb-2"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
                  Email
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Enter your email" />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-subject">
                  Subject
                </label>
                <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Enter your subject" />
                <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message">
                  Message
                </label>
                <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" type="message" placeholder="Enter your message" rows={5} />
                <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
              </div>
            </div>
          </form>


        </div>
        <div className="right w-1/2 flex justify-center">
          <div className="flex flex-col justify-center items-center">
            <img src={contactImg} alt="contImg" width={400} />
            <div className="text-center text-xl font-semibold">
              <p>India</p>
              <p>contactus@job.com</p>
              <p>+91 9556497956</p>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
      <iframe title="mymap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219104.92617856397!2d75.69186288276121!3d30.900240748451676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a837462345a7d%3A0x681102348ec60610!2sLudhiana%2C%20Punjab!5e0!3m2!1sen!2sin!4v1726135324846!5m2!1sen!2sin" width="100%" height="450" style={{allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
      </div>
    </>
  );
}

export default Contact;
