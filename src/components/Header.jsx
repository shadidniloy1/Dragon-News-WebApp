import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";

const Header = () => {

  let time = moment().format("dddd, MMMM Do, YYYY")

  return (
    <div className="flex flex-col justify-center items-center gap-2 py-4">
      <div className="logo">
        <img className="w-84 h-10" src={logo} alt="" />
      </div>
      <h2 className="text-gray-400">Journalism Without Fear or Favour</h2>
      <p className="">{time}</p>
    </div>
  );
};

export default Header;