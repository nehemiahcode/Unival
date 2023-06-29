import React from "react";
import { useState } from "react";
import Logo from "./Logo";
import { CloseIcon, MenuIcon } from "./WrapperIcon";
import "../App.css"
import { Link } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const Menu = [
    { id: 0, text: "HOME", Url: "/" },
    { id: 1, text: "ABOUT US", Url: "/about" },
    { id: 2, text: "FACILITY", Url: "/facility" },
    { id: 3, text: "BLOG", Url: "/blog" },
    { id: 4, text: "CONTACT", Url: "/contact" },
  ];
  return (
    <>
      <header className=" relative flex  justify-between px-3 items-center border-b-2 border-b-slate-200 lg:px-10 bg-purple-950 h-[80px]  w-full  md:px-10 ">
        <div className="flex gap-4 items-center  cursor-pointer">
          <div>
            <span className="material-symbols-outlined text-white text-6xl">
              school
            </span>
          </div>
          <h1 className=" font-bold text-3xl text-white">
            UNI <span className=" inline-block text-pink-500">VAL</span>
          </h1>
        </div>

        <ul
          className={`absolute md:relative  ${
            openMenu ? "top-0 duration-500  " : "top-[-10000%] "
          }   z-50
           flex  flex-col md:flex-row md:top-0   left-0  bottom-0 
           bg-slate-800 opacity-100 md:bg-transparent h-screen md:h-0  w-[100%] md:w-auto
             px-4 md:px-10 md:pt-10 pt-3 gap-7 md:right-0 md:justify-center  md:items-center md:gap-1`}
        >
          <div className="flex justify-between items-center pr-3">
            <Logo />
            {openMenu ? (
              <div onClick={() => setOpenMenu(false)}>
                <CloseIcon>close</CloseIcon>
              </div>
            ) : (
              ""
            )}
          </div>
          {Menu.map((menu, index) => (
            <li key={index}>
              <Link
               to={menu.Url}
                className=" font-semibold duration-200 text-lg text-white pl-3 md:font-medium lg:text-xl lg:text-red-600 lg:font-bold md:text-md hover:text-pink-500"
              >
                {menu.text}
              </Link>
            </li>
          ))}
          <button
            className=" text-white p-3 font-semibold w-[170px]  md:hidden hover:bg-pink-400 duration-300 hover:ring-offset-4
         ring-slate-800 ring  bg-pink-500 rounded-full"
          >
            JOIN US NOW
          </button>
        </ul>
        <div className=" flex justify-center items-center gap-2">
          <div onClick={() => setOpenMenu(!openMenu)}>
            <MenuIcon>menu</MenuIcon>
          </div>
          <button
            className=" text-white text-center p-3 font-semibold w-[170px]
             hidden md:flex justify-center items-center hover:bg-pink-400 duration-300 hover:ring-offset-4
         ring-slate-800 ring  bg-pink-500 rounded-full"
          >
            JOIN US NOW
          </button>
        </div>
      </header>
    </>
  );
}

export default Navbar;
