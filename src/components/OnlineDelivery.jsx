import { useEffect, useRef, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { IoMdSwitch } from "react-icons/io";
import { GoSortDesc } from "react-icons/go";
import { FaShippingFast, FaLeaf } from "react-icons/fa";
import { LuBetweenVerticalEnd } from "react-icons/lu";
import { FaLessThan } from "react-icons/fa6";
import {
  MdNewReleases,
  MdSecurityUpdateGood,
  MdLocalOffer,
} from "react-icons/md";

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

  const entryChips = [
    { i: 1, btnName: "Filter", iconName: <IoMdSwitch /> },
    { i: 2, btnName: "Sort By", iconName: <GoSortDesc /> },
    { i: 3, btnName: "Fast Delivery", iconName: <FaShippingFast /> },
    { i: 4, btnName: "New on Swiggy", iconName: <MdNewReleases /> },
    { i: 5, btnName: "Rating 4.0+", iconName: <MdSecurityUpdateGood /> },
    { i: 6, btnName: "Pure Veg", iconName: <FaLeaf /> },
    { i: 7, btnName: "Offers", iconName: <MdLocalOffer /> },
    { i: 8, btnName: "Rs. 400-Rs. 600", iconName: <LuBetweenVerticalEnd /> },
    { i: 9, btnName: "Less than Rs. 300", iconName: <FaLessThan /> },
  ];

  return (
    <>
      <div className="max-w-[1200px] mx-auto " ref={stickyRef}>
        <div className="flex-col my-3 items-center justify-between">
          <div className="text-[25px] font-bold">
            Restaurant for online delivery in Saket
          </div>
          <div
            className={`max-w-[1200px] mx-auto flex gap-3  sticky-container duration-100 p-[15px] ${
              isSticky ? "fixed top-2 z-[99999] bg-white w-full" : ""
            }`}
            ref={stickyRef}
          >
            {entryChips.map((item) => (
              <div
                key={item.i}
                className="p-2 rounded-full shadow border border-gray-300 flex items-center gap-1 text-nowrap cursor-pointer"
              >
                {item.btnName} {item.iconName}
              </div>
            ))}
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
