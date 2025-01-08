import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import RestaurantCard from "./RestaurantCard";

const Toprest = () => {
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

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    if (data.length - 5 == slide) return false;
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };

  return (
    <>
      <div className="max-w-[1200px] mx-auto mb-[100px]">
        <div className="flex my-3 items-center justify-between">
          <div className="text-[25px] font-bold">
            Top restaurant chains in Saket
          </div>
          <div className="flex">
            <div
              className="cursor-pointer flex items-center justify-center h-[30px] w-[30px] bg-slate-300 rounded-full mx-2"
              onClick={prevSlide}
            >
              <FaArrowLeft />
            </div>
            <div
              className="cursor-pointer flex items-center justify-center h-[30px] w-[30px] bg-slate-300 rounded-full mx-2"
              onClick={nextSlide}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden gap-5">
          {data?.map((d, i) => {
            return (
              <div
                key={i}
                style={{
                  transform: `translateX(-${slide * 100}%)`,
                }}
                className="duration-500 w-[270px] shrink-0"
              >
                <RestaurantCard {...d} key={i} />
              </div>
            );
          })}
        </div>
        <hr className="my-4 border-[2px]" />
      </div>
    </>
  );
};

export default Toprest;
