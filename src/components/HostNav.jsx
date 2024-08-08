import { NavLink } from "react-router-dom";

export default function HostNav() {
  return (
    <>
      <div className="space-x-3 px-3">
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
          to="."
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
          to="income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
          to="vans"
        >
          Vans
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
          to="reviews"
        >
          Reviews
        </NavLink>
      </div>
    </>
  );
}
