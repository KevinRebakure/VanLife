import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
export default function HostVanInfo() {
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
    <>
      <p>
        <span className="font-semibold">Name: </span>
        {hostVanDetail.name}
      </p>

      <p>
        <span className="font-semibold">Category: </span>
        {/* {`${hostVanDetail.type[0].toUpperCase()}${hostVanDetail.type.slice(1)}`} */}
        {hostVanDetail.type}
      </p>

      <p>
        <span className="font-semibold">Description: </span>
        {hostVanDetail.description}
      </p>

      <p>
        <span className="font-semibold">Visibility: </span>
        Public
      </p>
    </>
  );
}
