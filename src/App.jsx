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
