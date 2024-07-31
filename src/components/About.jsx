import Footer from "./Footer";

export default function About() {
  return (
    <>
      <nav className="flex items-center gap-x-3  px-3 py-5">
        <h1 className="text-xl font-extrabold">#VANLIFE</h1>
        <p className="ml-auto font-semibold">About</p>
        <p className="font-semibold">Vans</p>
      </nav>

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

        <div className="bg-[#FFCC8D] p-4 space-y-4">
          <p className="text-2xl font-bold">
            Your destination is waiting. Your van is ready.
          </p>
          <button className="py-2 px-3 rounded-md bg-[#161616] font-semibold text-white">
            Explore our vans
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
