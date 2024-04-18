"use client";
import React from "react";
import Links from "./links";
import Admin from "./admin";
import Search from "../commen/search";

const Navbar = () => {
  return (
    <div className="bg-sky-600 flex h-10 items-center ">
      <div className="bg-sky-600 flex text-orange-300 text-lg">
        {"\u00A0\u00A0\u00A0"}WeatherIQ
      </div>
      <div>
        <Search />
      </div>
      <div className="grow flex flex-row-reverse">
        <Links />
      </div>

      <div>
        <Admin />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
