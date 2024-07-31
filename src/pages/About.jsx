import Nav1 from "../components/Nav1";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Nav1 />

      <img
        src="./guy sitting on a van.png"
        className="h-[240px] w-full"
        alt=""
      />

      <div className="space-y-6 p-6">
        <h1 className="text-3xl font-bold">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <div className="space-y-4 bg-[#FFCC8D] p-4">
          <p className="text-2xl font-bold">
            Your destination is waiting. Your van is ready.
          </p>
          <Link
            to="/vans"
            className="rounded-md bg-[#161616] px-3 py-2 font-semibold text-white"
          >
            Explore our vans
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}
