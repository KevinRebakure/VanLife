import { Link } from "react-router-dom";
export default function Vans() {
  return (
    <nav className="flex items-center gap-x-3 px-3 py-5">
      <Link to="/" className="text-xl font-extrabold">
        #VANLIFE
      </Link>
      <Link to="/about" className="ml-auto font-semibold">
        About
      </Link>
      <Link to="/vans" className="font-semibold">
        Vans
      </Link>
    </nav>
  );
}
