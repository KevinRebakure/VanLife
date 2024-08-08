import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const hostVanDetail = useOutletContext();
  return (
    <>
      <p>
        <span className="font-semibold">Name: </span>
        {hostVanDetail.name}
      </p>

      <p>
        <span className="font-semibold">Category: </span>
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
