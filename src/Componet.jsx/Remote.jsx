import React, { useState } from "react";
import "../App.jsx";
import logo from "../Componet.jsx/images/logo.svg";
import keem from "../Componet.jsx/images/image-hero-desktop.png";
import data from "../Componet.jsx/images/client-databiz.svg";
import phile from "../Componet.jsx/images/client-audiophile.svg";
import meet from "../Componet.jsx/images/client-meet.svg";
import maker from "../Componet.jsx/images/client-maker.svg";
import { FaOutdent } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Remote = () => {
  const [menu, setMenu] = useState(false);
  function handleToggle() {
    setMenu(!menu);
  }
  return (
    <section className="flex flex-col gap-[30px]">
      <nav className=" max-sm:pl-0 max-sm:pr-0 max-sm:justify-center flex items-center justify-between pl-12 pr-12 py-5">
        <div className="flex items-center justify-center gap-10">
          <img src={logo} alt="" />
          <ul className=" max-sm:hidden flex items-center justify-center text-[#6b6868] gap-5 ">
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </div>
        <div className=" max-sm:hidden flex  text-[#6b6868] gap-5 items-center justify-center">
          <h3>Login</h3>
          <h3 className="border-solid border-2 border-[#6b6868] w-28 h-10 flex items-center justify-center rounded-[10px]">
            Register
          </h3>
        </div>
        <button onClick={handleToggle} className=" hidden pl-36 max-sm:flex">
          {menu ? <IoMdClose /> : <FaOutdent />}
        </button>
      </nav>
      <div className={`${    !menu ? "h-[0]" : "h-[200px]"    } transition-all duration-1000 list-none flex gap-2 items-center justify-center flex-col bg-black text-white`} >
        <li>Features</li>
        <li>Company</li>
        <li>Careers</li>
        <li>About</li>
        <li>Login</li>
      </div>
      <div className="max-sm:flex  max-sm:flex-col-reverse  flex items-center justify-around ">
        <div className="flex flex-col gap-5 max-sm:items-center max-sm:justify-center">
          <h1 className=" text-[55px] w-[27vw] font-semibold max-sm:w-auto max-sm:text-[35px]">
            Make remote Work
          </h1>
          <p className=" text-[#6b6868] w-[26vw] max-sm:flex max-sm:w-[85vw] max-sm:text-center">
            {" "}
            Get your team in sync, no matter your location. streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-black text-[white] rounded-[7px] w-32 h-10">
            Learn More
          </button>
        </div>
        <img className="h-[35vh] max-sm:h-[60vh]" src={keem} alt="" />
      </div>
      <div className="flex items-center justify-start pl-[10%] gap-10 max-sm:flex-col max-sm:pl-[0%] max-sm:gap-6">
        <img src={data} alt="" />
        <img src={phile} alt="" />
        <img src={meet} alt="" />
        <img src={maker} alt="" />
      </div>
    </section>
  );
};

export default Remote;
