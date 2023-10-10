import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function HostLayout() {
  return (
    <>
      <ul className="flex gap-9 p-6 ml-5">
        <li className=" hover:font-bold hover:underline underline-offset-8">
          <Link to="/host">DashBoard</Link>{" "}
        </li>
        <li className=" hover:font-bold hover:underline underline-offset-8">
          <Link to="/host/income">Income</Link>
        </li>
        <li className=" hover:font-bold hover:underline underline-offset-8">
          <Link to="/host/reviews">Reviews</Link>{" "}
        </li>
      </ul>
      <Outlet />
    </>
  );
}
