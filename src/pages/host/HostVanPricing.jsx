import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const hostVanDetail = useOutletContext();
  return <p className="text-2xl font-semibold">${hostVanDetail.price}/day</p>;
}
