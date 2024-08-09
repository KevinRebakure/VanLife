import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="m-4 space-y-4 py-36">
      <h1 className="text-3xl font-semibold">
        Sorry, the page you were looking for was not found.
      </h1>

      <Link
        to="/"
        className="block w-full rounded-md bg-[#161616] py-2 text-center text-white"
      >
        Go to home
      </Link>
    </div>
  );
}
