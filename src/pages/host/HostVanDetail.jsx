import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function HostVanDetail() {
  const [hostVanDetail, setHostVanDetail] = useState([]);
  useEffect(() => {
    fetch(`/api/host/vans/2`)
      .then((res) => res.json())
      .then((data) => {
        setHostVanDetail(data.vans[0]);
      });
  }, []);

  const buttonColors = {
    simple: "bg-[#E17654]",
    luxury: "bg-[#161616]",
    rugged: "bg-[#115E59]",
  };
  return (
    <>
      <Link to=".." relative="path" className="mb-3 block underline">
        Back to all vans
      </Link>
      <div className="space-y-3 rounded-lg bg-white p-3">
        <div className="flex gap-x-3">
          <img
            src={`${hostVanDetail.imageUrl}`}
            className="size-[160px] rounded-lg"
            alt=""
          />

          <div className="space-y-3">
            <button
              className={`rounded-md px-2 py-1 ${buttonColors[hostVanDetail.type]} text-white`}
            >
              {hostVanDetail.type}
            </button>
            <h1 className="text-3xl font-semibold">{hostVanDetail.name}</h1>
            <p>
              <span className="text-2xl font-semibold">{`$${hostVanDetail.price}`}</span>
              /day
            </p>
          </div>
        </div>

        <div className="flex gap-x-3">
          <NavLink
            end
            to="."
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : ""
            }
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : ""
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : ""
            }
          >
            Photos
          </NavLink>
        </div>
        <Outlet context={hostVanDetail} />
      </div>
    </>
  );
}
