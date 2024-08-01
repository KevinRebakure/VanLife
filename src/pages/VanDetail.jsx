import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Nav1 from "../components/Nav1";
import { useEffect } from "react";
import { useState } from "react";
export default function VanDetail() {
  const [{ description, id, imageUrl, name, price, type }, setVanData] =
    useState({});
  const params = useParams();

  const buttonColors = {
    simple: "bg-[#E17654]",
    luxury: "bg-[#161616]",
    rugged: "bg-[#115E59]",
  };
  console.log(params);
  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, []);

  return (
    <>
      <Nav1 />
      <div className="space-y-4 p-4">
        <Link
          to="/vans"
          className="font-semibold underline hover:text-gray-400"
        >
          Back to all vans
        </Link>
        <img
          src={`${imageUrl}`}
          alt=""
          className="h-[500px] w-full rounded-lg object-cover"
        />
        <button
          className={`rounded-md font-semibold text-white ${buttonColors[type]} px-2 py-1`}
        >
          {type}
        </button>
        <div>
          <p className="text-2xl font-semibold">{name}</p>
          <p>
            <span className="text-2xl font-semibold">${price}</span>{" "}
            <span>/day</span>
          </p>
        </div>
        <p>{description}</p>
        <button
          to="/vans"
          className="block w-full rounded-md bg-[#FF8C38] py-3 text-center font-semibold text-white"
        >
          Rent this van
        </button>
      </div>

      <Footer />
    </>
  );
}
