import { useEffect, useState } from "react";

export default function HostVanPhotos() {
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
  return (
    <img
      src={`${hostVanDetail.imageUrl}`}
      className="size-[80px] rounded-md"
      alt=""
    />
  );
}
