"use client";

import Link from "next/link";
import { FcHome, FcAbout } from "react-icons/fc";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose, AiOutlineUserDelete } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import navLogo from "../../assets/images/navLogo.png";
import Image from "next/image";
import { useState } from "react";

// moile menu items

const menuItems = [
  {
    title: "Home",
    icon: <FcHome />,
  },
  {
    title: "Search",
    icon: <BsSearch />,
  },
  {
    title: "Buy Property",
    icon: <FcAbout />,
  },
  {
    title: "Rent Property",
    icon: <FiKey />,
  },
  {
    title: "About Us",
    icon: <AiOutlineUserDelete />,
  },
];

const Nav = () => {
  const [toggle, setToggle] = useState(true);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="navCOntainer  shadow py-1.5 ">
        <div className="navWrapper   w-[95%] sm:w-[90%] md:w-[85%] m-auto flex justify-between items-center self-center ">
          {/* nav left  */}
          <div className="navLeft  ">
            <Link href="/">
              <div className="navLogo flex self-center items-center ">
                <Image src={navLogo} width={48} />
                <h1 className="text-base sm:text-lg md:text-xl pl-1 font-semibold text-red-400 ">
                  Magic Properties
                </h1>
              </div>
            </Link>
          </div>
          {/* nav left ends  */}

          {/* nav right starts  */}

          <div className="navRight relative  ">
            {/* nav menu icons starts  */}
            <div
              className="navMenu text-2xl cursor-pointer  "
              onClick={() => toggleMenu()}
            >
              {toggle ? <RiMenu3Fill /> : <AiOutlineClose />}
            </div>
            {/* nav menu icons ends */}

            {/* toggle menu starts  */}

            <div
              className={`mobileMenu shadow ${
                toggle ? "hidden" : "absolute"
              }  bg-gray-50  transform -translate-x-1/2 -translate-y-1/2 top-[8.9rem] -right-[5.2rem] `}
            >
              {menuItems.map((ele, ind) => (
                <div
                  className={`mobileMenuContent bg-gray-50 hover:bg-gray-300 flex items-center self-center py-2 px-4 cursor-pointer ${
                    menuItems.length - 1 === ind ? "mb-0" : "mb-2"
                  } `}
                  onClick={() => toggleMenu()}
                >
                  <div className="menuIcon text-xl ">
                    {/* <FcHome /> */}
                    {ele.icon}
                  </div>
                  <div className="menuTitle pl-2.5 whitespace-nowrap ">
                    <p>{ele.title} </p>
                  </div>
                </div>
              ))}
            </div>

            {/* toggle menu ends */}
          </div>

          {/* nav right ends */}

          {/*  */}
        </div>
      </div>
    </>
  );
};

export default Nav;
