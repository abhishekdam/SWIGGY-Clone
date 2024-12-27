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
    </div>
  );
};

export default RestaurantCard;
