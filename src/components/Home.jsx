import React from "react";
import introimg from "./introimg.jpg";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-cover text-center backdrop-brightness-50 flex flex-col content-center justify-items-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),url(${introimg})`,
      }}
    >
      <h1 className="text-3xl font-bold text-white mt-36">
        You got the travel plans, we got the travel Van
      </h1>
      <div className="text-l font-medium text-slate-100 flex flex-col mt-3">
        <p>Add Adventure to your life by joining the #vanlife moments.</p>
        <p>Rant the perfect Van to Make your perfect Road Trip</p>
      </div>
      <div className="flex justify-center">
        <button className="outline-none bg-orange-400 text-white p-2 mt-10 w-9/12 rounded-md">
          <Link to="/vans">Find Your Van</Link>
        </button>
      </div>
      <footer className="fixed bottom-0 text-white p-4 bg-gray-900 w-full">
        ©2023 Vanlife{" "}
      </footer>
    </div>
  );
}
