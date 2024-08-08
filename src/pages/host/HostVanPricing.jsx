import { useEffect, useState } from "react";

export default function HostVanPricing() {
  const [hostVanDetail, setHostVanDetail] = useState([]);
  // const { id } = useParams();
  useEffect(() => {
    fetch(`/api/host/vans/2`)
      .then((res) => res.json())
      .then((data) => {
        setHostVanDetail(data.vans[0]);
        // console.log(data.vans[0]);
      });
  }, []);
  return <p className="text-2xl font-semibold">${hostVanDetail.price}/day</p>;
}
