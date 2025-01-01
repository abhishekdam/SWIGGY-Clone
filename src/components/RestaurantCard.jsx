import { RiStarFill } from "react-icons/ri";

const RestaurantCard = (p) => {
  return (
    <div className="w-[273px] shrink-0 grow">
      <div className="h-[182px] rounded-[15px] overflow-hidden relative">
        <img
          className="object-cover h-full w-full top-0"
          src={"http://localhost:5173/src/assets/images/" + p.image}
          alt=""
        />
        <div className="image-overlay  absolute w-full h-full top-0 flex items-end p-2 text-[25px] font-bold text-white tracking-tighter">
          {p.offer}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="text-xl">{p.title}</div>
        <div className="flex gap-2" style={{ "align-items": "center" }}>
          <div className="h-[19px] w-[19px] text-[green] rounded-[50%] border-[green] border-[1px] bg-green-700 flex align-center justify-center">
            <RiStarFill fill="white" />
          </div>
          <div>{p.rating}</div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
