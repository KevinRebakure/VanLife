import { Link } from "react-router-dom";

export default function VanMiniCard(props) {
  const { id, imageUrl, name, price, type } = props;

  const buttonColors = {
    simple: "bg-[#E17654]",
    luxury: "bg-[#161616]",
    rugged: "bg-[#115E59]",
  };

  return (
    <Link to={`${id}`}>
      <div className="w-[250px] space-y-2">
        <img
          src={`${imageUrl}`}
          className="size-[250px] rounded-lg object-cover"
          alt=""
        />
        <div className="flex items-center justify-between">
          <p className="text-2xl font-semibold">{name}</p>
          <p>
            <span className="text-2xl font-semibold">${price}</span>{" "}
            <span>/day</span>
          </p>
        </div>
        <button
          className={`rounded-md font-semibold text-white ${buttonColors[type]} px-2 py-1`}
        >
          {type}
        </button>
      </div>
    </Link>
  );
}
