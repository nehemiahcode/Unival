import React from "react";

function Logo() {
  return (
    <div className="flex gap-4 items-center  cursor-pointer md:hidden">
      <div>
        <span className="material-symbols-outlined text-white text-6xl">
          school
        </span>
      </div>
      <h1 className=" font-bold text-3xl text-white">
        UNI <span className=" inline-block text-pink-500">VAL</span>
      </h1>
    </div>
  );
}

export default Logo;

export function FooterLogo() {
  return (
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
  );
}


