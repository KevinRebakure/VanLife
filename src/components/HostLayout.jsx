import { Outlet } from "react-router-dom";
import HostNav from "./HostNav";

export default function HostLayout() {
  return (
    <>
      <HostNav />

      <h1 className="px-3">This is the Host Layout</h1>

      <Outlet />
    </>
  );
}
