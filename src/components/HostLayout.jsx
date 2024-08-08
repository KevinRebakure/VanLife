import { Outlet } from "react-router-dom";
import HostNav from "./HostNav";

export default function HostLayout() {
  return (
    <>
      <HostNav />

      <div className="p-4">
        <Outlet />
      </div>
    </>
  );
}
