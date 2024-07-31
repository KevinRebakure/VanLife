import Footer from "../components/Footer";
import Nav1 from "../components/Nav1";
import VanMiniCard from "../components/VanMiniCard";

export default function Vans() {
  return (
    <>
      <Nav1 />
      <div className="space-y-3 py-3">
        <h1 className="px-3 text-2xl font-semibold">Explore our vans</h1>
        <div className="flex items-center gap-x-3 px-3">
          <button className="rounded-md bg-[#FFEAD0] px-2 py-1 text-center font-semibold">
            Simple
          </button>
          <button className="rounded-md bg-[#FFEAD0] px-2 py-1 text-center font-semibold">
            Luxury
          </button>
          <button className="rounded-md bg-[#FFEAD0] px-2 py-1 text-center font-semibold">
            Rugged
          </button>
          <button className="ml-auto px-2 py-1 text-center font-semibold underline">
            Clear filters
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4">
          <VanMiniCard />
          <VanMiniCard />

          <VanMiniCard />
          <VanMiniCard />

          <VanMiniCard />
          <VanMiniCard />
        </div>
      </div>
      <Footer />
    </>
  );
}
