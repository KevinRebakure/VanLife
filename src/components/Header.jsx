import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex items-center px-3 py-5">
        <Link to="/" className="text-xl font-extrabold">
          #VANLIFE
        </Link>

        <nav className="ml-auto flex items-center space-x-3">
          <NavLink
            to="/host"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:underline"
            }
          >
            Host
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:underline"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/vans"
            className={({ isActive }) =>
              isActive ? "font-semibold underline" : "hover:underline"
            }
          >
            Vans
          </NavLink>
        </nav>
      </header>
    </>
  );
}

//  className="font-semibold hover:underline"
