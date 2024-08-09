import { useEffect, useState } from "react";
import VanMiniCard from "../../components/VanMiniCard";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayVanElements = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  const vanElements = displayVanElements.map((van) => {
    return <VanMiniCard key={van.id} {...van} />;
  });

  // console.log(vans);

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  const buttonColors = {
    simple: "active:bg-[#E17654] hover:bg-[#E17654] hover:text-white",
    luxury: "active:bg-[#161616] hover:bg-[#161616] hover:text-white",
    rugged: "active:bg-[#115E59] hover:bg-[#115E59] hover:text-white",
  };
  return (
    <>
      <div className="space-y-3 py-3">
        <h1 className="px-3 text-2xl font-semibold">Explore our vans</h1>
        <div className="flex items-center gap-x-3 px-3">
          <button
            onClick={() => handleFilterChange("type", "simple")}
            className={`${buttonColors.simple} rounded-md ${typeFilter === "simple" ? "bg-[#E17654] text-white" : "bg-[#FFEAD0]"} px-2 py-1 text-center font-semibold`}
          >
            Simple
          </button>

          <button
            onClick={() => handleFilterChange("type", "luxury")}
            className={`${buttonColors.luxury} rounded-md ${typeFilter === "luxury" ? "bg-[#161616] text-white" : "bg-[#FFEAD0]"} px-2 py-1 text-center font-semibold`}
          >
            Luxury
          </button>

          <button
            onClick={() => handleFilterChange("type", "rugged")}
            className={`${buttonColors.rugged} rounded-md ${typeFilter === "rugged" ? "bg-[#115E59] text-white" : "bg-[#FFEAD0]"} px-2 py-1 text-center font-semibold`}
          >
            Rugged
          </button>

          {typeFilter && (
            <button
              onClick={() => handleFilterChange("type", null)}
              className="ml-auto px-2 py-1 text-center font-semibold underline"
            >
              Clear filters
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 p-4">{vanElements}</div>
      </div>
    </>
  );
}
