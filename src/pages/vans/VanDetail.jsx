import { Link, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
export default function VanDetail() {
  const params = useParams();
  const [vanData, setVanData] = useState({});
  const location = useLocation();
  console.log(location);

  const buttonColors = {
    simple: "bg-[#E17654]",
    luxury: "bg-[#161616]",
    rugged: "bg-[#115E59]",
  };

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVanData(data.vans));
  }, [params.id]);

  return (
    <>
      {vanData ? (
        <div className="space-y-4 p-4">
          <Link
            to={`..?${location.state?.search || ""}`}
            relative="path"
            className="font-semibold hover:underline"
          >
            {`Back to ${location.state?.type || "all"} vans`}
          </Link>
          <img
            src={`${vanData.imageUrl}`}
            alt=""
            className="h-[500px] w-full rounded-lg object-cover"
          />
          <button
            className={`rounded-md font-semibold text-white ${buttonColors[vanData.type]} px-2 py-1`}
          >
            {vanData.type}
          </button>
          <div>
            <p className="text-2xl font-semibold">{vanData.name}</p>
            <p>
              <span className="text-2xl font-semibold">${vanData.price}</span>{" "}
              <span>/day</span>
            </p>
          </div>
          <p>{vanData.description}</p>
          <button className="block w-full rounded-md bg-[#FF8C38] py-3 text-center font-semibold text-white">
            Rent this van
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
