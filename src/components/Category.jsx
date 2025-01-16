import { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Category = () => {
  // const [slide, setSlide] = useState(0);
  const [categories, setCategories] = useState([]);
  const scrollRef = useRef(null);

  // const nextSlide = () => {
  //   if (categories.length - 8 == slide) return false;
  //   setSlide(slide + 6);
  // };

  // const prevSlide = () => {
  //   if (slide == 0) return false;
  //   setSlide(slide - 6);
  // };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 1000,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -1000,
        behavior: "smooth",
      });
    }
  };

  const fetchCategory = async () => {
    const response = await fetch("/assets/category.json");
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <>
      <div className="max-w-[1200px] mx-auto pt-[100px] px-2">
        <div className="flex my-3 items-center justify-between">
          <div className="text-[25px] font-bold">What&apos;s on your mind?</div>
          <div className="flex">
            <div
              className="cursor-pointer flex items-center justify-center h-[30px] w-[30px] bg-slate-300 rounded-full mx-2"
              onClick={scrollLeft}
            >
              <FaArrowLeft />
            </div>
            <div
              className="cursor-pointer flex items-center justify-center h-[30px] w-[30px] bg-slate-300 rounded-full mx-2"
              onClick={scrollRight}
            >
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div
          // className="flex overflow-hidden relative z-[-1]"
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth px-2 w-full"
        >
          {categories.map((cat, i) => {
            return (
              <div
                // style={{
                //   transform: `translateX(-${slide * 100}%)`,
                // }}
                key={i}
                // className="w-[150px] shrink-0 duration-500"
                className="min-w-[150px] flex flex-col items-center justify-center cursor-pointer transition duration-300"
              >
                <img src={"/assets/images/" + cat.image} alt="" />
              </div>
            );
          })}
        </div>
        <hr className="my-6 border-[2px]" />
      </div>
    </>
  );
};

export default Category;
