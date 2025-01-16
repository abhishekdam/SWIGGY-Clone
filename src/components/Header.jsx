import { BsCaretDown } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { CgLogIn } from "react-icons/cg";
import { LuBadgeHelp } from "react-icons/lu";

import { useEffect, useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [toggle]);

  const links = [
    { liName: "Search", icon: <IoSearchSharp /> },
    { liName: "Offers", icon: <RiDiscountPercentLine />, sup: "New" },
    { liName: "Help", icon: <LuBadgeHelp /> },
    { liName: "Sign In", icon: <CgLogIn /> },
    { liName: "Cart", icon: <IoCartOutline /> },
  ];

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
          className="flex items-center flex-col px-4 py-8 w-[500px] z-[999999] bg-white h-full absolute duration-[400ms] overflow-auto"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <input
            type="text"
            id="name"
            placeholder="Enter your area"
            className="w-full my-4 p-4 px-4 py-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-gray-700"
          />
          <button
            type="submit"
            className="w-[50%] bg-blue-500 text-white font-medium py-2 rounded-md shadow hover:bg-blue-600 transition duration-200"
          >
            Submit
          </button>
        </div>
      </div>
      <header
        className={`p-[15px] shadow-xl text-[#686b78] fixed w-full top-0 bg-white ${
          toggle ? `z-[-1]` : `z-[9999]`
        }`}
      >
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[55px]">
            <img
              src="/assets/swiggy-logo.webp"
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
          <nav className="hidden md:flex gap-7 list-none ml-auto text-[18px] font-semibold">
            {links.map((link, i) => {
              return (
                <li
                  key={i}
                  className="flex items-center gap-2 hover:text-[#f0851e] duration-200"
                >
                  {link.icon}
                  {link.liName}
                  <sup className="text-[#f0851e] font-medium">{link.sup}</sup>
                </li>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
