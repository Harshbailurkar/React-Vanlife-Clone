import React from "react";
import { Link, useParams } from "react-router-dom";
import backimg from "./back-arrow.png";
export default function VanDes() {
  const [van, setVan] = React.useState(null);
  const params = useParams();
  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data));
  }, [params.id]);
  console.log(van);

  return (
    van && (
      <div className="my-6">
        <Link to="/vans">
          <p className="  flex pl-3 hover:underline underline-offset-8 w-40">
            <img className="w-6 px-1" src={backimg} alt="<-" />
            back to all vans
          </p>
        </Link>
        <div className=" flex justify-center mt-2 ">
          <div className="w-9/12 lg:w-4/12 lg:p-5 flex flex-col p-2 shadow-xl">
            <img className=" rounded pb-2" src={van.vans.imageUrl} alt="" />
            <button className={`${van.vans.type} w-20 my-1`}>
              {van.vans.type}
            </button>
            <h2 className="font-bold text-lg my-1">{van.vans.name}</h2>
            <p className="font-medium my-1">{van.vans.price}/Day</p>
            <p className="my-1">{van.vans.description}</p>
            <button className="bg-orange-400 p-1 rounded-sm mb-3 text-lg text-white text-bold hover:ring-2">
              Rent This Van
            </button>
          </div>
        </div>
      </div>
    )
  );
}
