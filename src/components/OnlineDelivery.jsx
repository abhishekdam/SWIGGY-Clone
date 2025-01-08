import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import RestaurantCard from "./RestaurantCard";

const OnlineDelivery = () => {
  const [data, setData] = useState([]);

  const fetchRestaurant = async () => {
    const response = await fetch(
      "http://localhost:5173/src/assets/restaurantChan.json"
    );
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  return (
    <>
      <div className="max-w-[1200px] mx-auto ">
        <div className="flex my-3 items-center justify-between">
          <div className="text-[25px] font-bold">
            Restaurant for online delivery in Saket
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3">
          {data.map((d, i) => (
            <RestaurantCard key={i} {...d} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OnlineDelivery;
