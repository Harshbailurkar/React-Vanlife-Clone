import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const showVans = vans.map((items) => {
    return (
      <div
        key={items.id}
        className="w-64 flex flex-col shadow-xl p-3 van-tile bg-white"
      >
        <Link to={`/vans/${items.id}`}>
          <img src={items.imageUrl} alt="Van-Img" className="rounded" />

          <div className="flex flex-row justify-around font-medium pt-2">
            <h1 className="font-bold text-lg">{items.name}</h1>
            <h1>{items.price}$/Day</h1>
          </div>
          <button className={`${items.type} mt-2`}>{items.type}</button>
        </Link>
      </div>
    );
  });

  return (
    <div className=" p-3 flex justify-center bg-red-50">
      <div className=" flex flex-wrap justify-center gap-5 ">{showVans}</div>
    </div>
  );
}
