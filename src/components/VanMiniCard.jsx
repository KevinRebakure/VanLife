export default function VanMiniCard() {
  return (
    <div className="w-[250px] space-y-2">
      <img
        src="./Van 1 small.png"
        className="size-[250px] object-cover"
        alt=""
      />
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold">Title</p>
        <p>
          <span className="text-2xl font-semibold">Price</span>{" "}
          <span>/day</span>
        </p>
      </div>
      <button className="rounded-md bg-[#E17654] px-2 py-1">Simple</button>
    </div>
  );
}
