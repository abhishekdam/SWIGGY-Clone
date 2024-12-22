import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Category = () => {
  const [slide, setSlide] = useState(0);
  const [categories, setCategories] = useState([]);

  const nextSlide = () => {
    if (categories.length - 8 == slide) return false;
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };

  const fetchCategory = async () => {
    const response = await fetch(
      "http://localhost:5173/src/assets/category.json"
    );
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex my-3 items-center justify-between">
          <div className="text-[25px] font-bold">Whats on your mind?</div>
          <div className="flex">
            <div
              className="cursor-pointer flex items-center justify-center h-[30px] w-[30px] bg-slate-300 rounded-full mx-2"
              onClick={() => prevSlide()}
            >
              <FaArrowLeft />
            </div>
            <div
              className="cursor-pointer flex items-center justify-center h-[30px] w-[30px] bg-slate-300 rounded-full mx-2"
              onClick={() => nextSlide()}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden">
          {categories.map((cat, i) => {
            return (
              <div
                style={{
                  transform: `translateX(-${slide * 100}%)`,
                }}
                key={i}
                className="w-[150px] shrink-0 duration-500"
              >
                <img
                  src={"http://localhost:5173/src/assets/images/" + cat.image}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Category;
