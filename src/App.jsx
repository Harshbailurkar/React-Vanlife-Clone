import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Vans from "./components/Vans";
import "./server";
import VanDes from "./components/VansDes";
import NavBar from "./components/NavBar";
import Reviews from "./components/Reviews";
import DashBoard from "./components/DashBoard";
import Income from "./components/Income";
import HostLayout from "./components/HostLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <p>
          {
            // instead of adding navbar here you can do it in seperate component and import that component add in <Route element={}></Route> and all other Routes will bw children of this Route.
            // <nav className="flex flex-row justify-between p-4 bg-rose-50">
            //   <h1 className="text-2xl font-bold">
            //     <Link to="/">#VANLIFE</Link>
            //   </h1>
            //   <ul className="flex flex-row space-x-9  ">
            //     <li className="hover:font-medium">
            //       <Link to="/about">About</Link>
            //     </li>
            //     <li className="hover:font-medium">
            //       <Link to="/vans">Vans</Link>
            //     </li>
            //   </ul>
            // </nav>
          }
        </p>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDes />} />
            <Route path="/host" element={<HostLayout />}>
              <Route path="/host/" element={<DashBoard />} />
              <Route path="/host/reviews" element={<Reviews />} />
              <Route path="/host/income" element={<Income />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
