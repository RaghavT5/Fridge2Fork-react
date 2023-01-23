import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      title: "home",
      offset: 0,
      offsetMobile: 0,
    },
    {
      id: 2,
      title: "about",
      offset: -110,
      offsetMobile: -240,
    },
    {
      id: 3,
      title: "contact",
      offset: -30,
      offsetMobile: 130,
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#ffc107] top-0 left-0 absolute">
      <div>
        <h1 className="text-5xl font-[Acme] ml-2">Fridge2Fork</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            key={link.id}
            className="px-4 cursor-pointer capitalize font-medium font-[Montserrat] text-white hover:scale-105 duration-200"
          >
            <Link to={link.title} smooth offset={link.offset} duration={700}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? (
          <FaTimes size={30} color="white" />
        ) : (
          <FaBars size={30} color="white" />
        )}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#ffc107]  text-white">
          {links.map((link) => (
            <li
              key={link.id}
              className="px-4 capitalize cursor-pointer py-6 text-4xl font-[Montserrat]"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link.title}
                smooth
                offset={link.offsetMobile}
                duration={700}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
