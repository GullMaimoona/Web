import React from "react";

export default function Contact() {
  return (
    <div className=" bg--500">
      <div
        className=" flex items-center max-w-7xl mx-auto leading-8 mb-10"
        id="contact"
      >
        <div className="text-purple-700 px-10 mt-32 mx-auto">
          <h1 className="text-center text-5xl text-black font-bold ">Contact</h1>
          <p className="text-center my-5 text-black font-semibold text-2xl">Get in touch with Us</p>
          <form action="https://formspree.io/f/mbjeaqpn" method="POST">
            <div className=" text-black">
              <input
                placeholder="Your name"
                type="text"
                required
                name="name"
                className="p-2 w-80 bg-transparent border-2 rounded-md  focus:outline-blue-600 outline-double text-black"
              />
            </div>
            <div className="my-5">
              <input
                required
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-blue-600 outline-double text-black"
                placeholder="Your email"
                type="email"
                name="email"
              />
            </div>
            <div>
              <textarea
                rows={8}
                name="meraMessage"
                required
                className="p-2 w-80 bg-transparent border-2 rounded-md focus:outline-blue-600 outline-double text-black"
                placeholder="Your message..."
              />
            </div>
            <button
              type="submit"
              
              className="mx-auto block px-6 py-4 text-2xl font-semibold  rounded-md  bg-gradient-to-b text-white hover:bg-pink-600 bg-blue-600 hover:animate-pulse"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}