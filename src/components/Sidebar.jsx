import { useState } from "react";
import cblogo from "../assets/cb-logo.png";
import hamburger from "../assets/hamburger.svg";
import { navItems } from "../static/navItems";
import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
} from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { RiCoinsLine, RiNotification3Line } from "react-icons/ri";
import { MdWeb } from "react-icons/md";
import { BsPersonPlus } from "react-icons/bs";

// Create a mapping of icon names to their corresponding React components
const iconComponents = {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
  BiTrendingUp,
  RiCoinsLine,
  RiNotification3Line,
  MdWeb,
  BsPersonPlus,
};

const Sidebar = () => {
  const [activeIcon, setActiveIcon] = useState(navItems[0].title);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = (e) => {
    if (e.target.classList.contains("bg-opacity-50")) {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <div className="h-screen border-r border-gray-800 lg:w-[calc(22rem-16px-16px)] w-full p-4 cursor-pointer">
      <div className="my-6">
        <div className="my-6 w-1/2 object-contain">
          <img src={cblogo} alt="logo" />
        </div>
      </div>
      <div className="mt-12 lg:block hidden">
        {navItems.map((item, index) => {
          const IconComponent = iconComponents[item.iconName];
          return (
            <div
              key={index}
              onClick={() => setActiveIcon(item.title)}
              className={`flex items-center text-lg font-medium rounded-lg mb-6 h-12 hover:bg-gray-800 ${
                item.title === activeIcon && "text-blue-500"
              }`}
            >
              <div className="bg-gray-800 p-2 rounded-full mx-4 grid place-items-center">
                <IconComponent />
              </div>
              <div className="text-lg font-medium">{item.title}</div>
            </div>
          );
        })}
      </div>
      <div
        className="lg:hidden block fixed inset-0 bg-opacity-50 z-50 w-4"
        onClick={toggleSidebar}
      >
        <img
          className="w-6 h-6 filter invert mt-2 ml-2"
          src={hamburger}
          alt="menu"
        />
      </div>

      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-64 bg-gray-800 z-50 transform transition ease-in-out duration-300 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={toggleSidebar}
      >
        <div className="flex justify-end p-4">
          <button className="text-white" onClick={toggleSidebar}>
          <img
          className="w-6 h-6 filter invert mt-2 ml-2"
          src={hamburger}
          alt="menu"
          onClick={toggleSidebar}
        />
          </button>
        </div>
        <div className="mt-12">
          {navItems.map((item, index) => {
            const IconComponent = iconComponents[item.iconName];
            return (
              <div
                key={index}
                onClick={() => {
                  setActiveIcon(item.title);
                  toggleSidebar();
                }}
                className={`flex items-center text-lg font-medium rounded-lg mb-6 h-12 hover:bg-gray-600 ${
                  item.title === activeIcon && "text-blue-500"
                }`}
              >
                <div className="bg-gray-800 p-2 rounded-full mx-4 grid place-items-center">
                  <IconComponent />
                </div>
                <div className="text-lg font-medium">{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
