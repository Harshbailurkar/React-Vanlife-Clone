import aboutimage from "./aboutimg.jpg";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="flex justify-center ">
      <div className="flex flex-col justify-center lg:w-5/12 ">
        <div className=" w-full h-1/3 flex justify-center ">
          <img src={aboutimage} alt="aboutimg" />
        </div>
        <h1 className="py-6 px-4 w-full font-bold text-3xl">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <div className="font-medium px-4 w-full">
          <p className="pb-3">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="pb-3">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
        <div className="bg-orange-300 p-4 rounded-sm m-4 w-full">
          <h1 className="font-bold text-2xl pb-3">
            Your destination is waiting. Your van is ready.
          </h1>
          <button className="text-white bg-black font-medium p-3 rounded-md outline-none">
            <Link to="/vans"> Explore our vans</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
