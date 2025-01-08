import { BsCaretDown } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { CgLogIn } from "react-icons/cg";
import { LuBadgeHelp } from "react-icons/lu";

import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const showSideMenu = () => {
    setToggle(true);
  };

  const hideSideMenu = () => {
    setToggle(false);
  };

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
          className="w-[500px] bg-white h-full absolute duration-[400ms]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
          onClick={(e) => {
            e.stopPropagation();
          }}
        ></div>
      </div>
      <header className="p-[15px] shadow-xl text-[#686b78] sticky top-0 bg-white z-[9999]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[60px]">
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
          <nav className="flex gap-10 list-none ml-auto text-[18px] font-semibold">
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
