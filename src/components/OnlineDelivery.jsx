import { useEffect, useRef, useState } from "react";
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

  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (stickyRef.current) {
        const { top } = stickyRef.current.getBoundingClientRect();
        setIsSticky(top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="max-w-[1200px] mx-auto " ref={stickyRef}>
        <div className="flex-col my-3 items-center justify-between">
          <div className="text-[25px] font-bold">
            Restaurant for online delivery in Saket
          </div>
          <div
            className={`max-w-[1200px] mx-auto flex border mb-4 gap-3 border-red-500 sticky-container duration-200 p-[15px] ${
              isSticky ? "fixed top-0 z-[99999] bg-white w-full " : ""
            }`}
            ref={stickyRef}
          >
            <div className="p-3 rounded-md shadow">Filter</div>
            <div className="p-3 rounded-md shadow">Sort by</div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-3 content">
          {data.map((d, i) => (
            <RestaurantCard key={i} {...d} />
          ))}
        </div>
      </div>
    </>
  );
};

export default OnlineDelivery;
