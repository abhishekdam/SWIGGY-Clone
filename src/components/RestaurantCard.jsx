import { RiStarFill } from "react-icons/ri";

const RestaurantCard = (p) => {
  return (
    <div className={`${p.width} shrink-0  mb-3`}>
      <div className="relative z-[-1] group h-[182px] rounded-[15px] overflow-hidden relative mb-3">
        <img
          className="group-hover:scale-110 duration-150 object-cover h-full w-full top-0"
          src={"http://localhost:5173/src/assets/images/" + p.image}
          alt=""
        />
        <div className="image-overlay  absolute w-full h-full top-0 flex items-end p-2 text-[16px] md:text-[25px] font-bold text-white tracking-tighter">
          {p.offer}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="mt-3 text-md md:text-xl">{p.title}</div>
        <div className="flex gap-1" style={{ alignItems: "center" }}>
          <div className="h-[19px] w-[19px] text-[green] rounded-[50%] border-[green] border-[1px] bg-green-700 flex align-center justify-center">
            <RiStarFill fill="white" />
          </div>
          <div>{p.rating}</div>
          <span className="gap-2">
            {p.minTime} - {p.maxTime} mins
          </span>
        </div>
        <div className="text-slate-700">{p.name}</div>
        <div className="text-slate-700">{p.place}</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
