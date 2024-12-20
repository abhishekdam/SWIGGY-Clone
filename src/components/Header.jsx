import { BsCaretDown } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  return (
    <>
      <div
        className="black-overlay w-full h-full fixed duration-500"
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
        onClick={hideSideMenu}
      >
        <div
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img
              src="src/assets/swiggy-logo.webp"
              className="w-full"
              alt="swiggy-logo"
            />
          </div>
          <div>
            <span className="font-bold border-b-[3px] border-[#f0851e] text-[#f0851e]">
              Saket
            </span>{" "}
            New Delhi, Delhi, India{" "}
            <BsCaretDown
              fontSize={"20px"}
              onClick={showSideMenu}
              className="inline text-[#f0851e] cursor-pointer"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
