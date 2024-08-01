import { NavLink } from "react-router-dom";

export default function HostNav() {
  return (
    <>
      <div className="space-x-3">
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
          to="/host"
          end
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
          to="/host/income"
        >
          Income
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline" : "hover:underline"
          }
          to="/host/reviews"
        >
          Reviews
        </NavLink>
      </div>
    </>
  );
}
