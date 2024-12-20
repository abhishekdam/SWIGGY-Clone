import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Category = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    const response = await fetch(
      "http://localhost:5173/src/assets/category.json"
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    fetchCategory();
    console.log("hello");
  }, []);

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex my-3 items-center justify-between">
          <div className="text-[25px] font-bold">Whats on your mind?</div>
          <div className="flex">
            <div className="cursor-pointer flex items-center justify-center h-[30px] w-[30px] bg-slate-300 rounded-full mx-2">
              <FaArrowLeft />
            </div>
            <div className="cursor-pointer flex items-center justify-center h-[30px] w-[30px] bg-slate-300 rounded-full mx-2">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;