import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className="flex flex-row justify-between p-4 bg-rose-50">
        <h1 className="text-2xl font-bold">
          <Link to="/">#VANLIFE</Link>
        </h1>
        <ul className="flex flex-row space-x-9  ">
          <li className="hover:font-medium">
            <Link to="/host">Host</Link>
          </li>
          <li className="hover:font-medium">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:font-medium">
            <Link to="/vans">Vans</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
