import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="flex items-center px-3 py-5">
        <Link to="/" className="text-xl font-extrabold">
          #VANLIFE
        </Link>

        <nav className="ml-auto flex items-center space-x-3">
          <Link to="/host" className="font-semibold hover:underline">
            Host
          </Link>
          <Link to="/about" className="font-semibold hover:underline">
            About
          </Link>
          <Link to="/vans" className="font-semibold hover:underline">
            Vans
          </Link>
        </nav>
      </header>
    </>
  );
}
