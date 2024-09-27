import React from "react";
import DropdownUser from "./nextui/DropdownUser";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const titleUrl = ["Dashboard"];

  return (
    <header className="h-20 shadow-lg flex items-center w-full px-4 md:px-8 bg-white">
      <h2 className="text-lg md:text-2xl" id="title"></h2>
      <div className="ml-auto">
        <DropdownUser />
      </div>
    </header>
  );
};

export default Header;
