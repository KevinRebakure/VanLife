import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [hostVans, setHostVans] = useState([]);
  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.vans);
        setHostVans(data.vans);
      });
  }, []);
  const hostVansElements = hostVans.map((van) => {
    return (
      <Link key={van.id} to="1" className="block">
        {/* <Link key={van.id} to={`${van.hostId}`}> */}
        <div className="flex gap-x-3">
          <img src={van.imageUrl} alt="" className="size-[60px] rounded-md" />
          <div className="flex flex-col justify-center">
            <p className="text-lg font-semibold">{van.name}</p>
            <p>{`$${van.price}/day`}</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <div className="space-y-3 p-3">
      <h1 className="text-3xl font-semibold">Your listed vans</h1>
      <div className="space-y-3">{hostVansElements}</div>
    </div>
  );
}
