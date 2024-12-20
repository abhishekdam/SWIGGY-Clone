import { BsCaretDown } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="black-overlay w-full h-full fixed"></div>
      <header className="p-[15px] shadow-xl">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[100px]">
            <img src="src/assets/swiggy-logo.webp" className="w-full" alt="swiggy-logo" />
          </div>
          <div>
            <span className="font-bold border-b-[3px] border-[#f0851e] text-[#f0851e]">Saket</span> New Delhi, Delhi, India <BsCaretDown fontSize={'20px'} className="inline text-[#f0851e]"/>
          </div>
        </div>
        
      </header>
    </>
  )
}

export default Header