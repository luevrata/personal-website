import React from "react";
import "./nav.css";
import { HiUserCircle, HiHome } from "react-icons/hi";
import { MdHomeRepairService } from "react-icons/md";
import { RiMessage2Fill } from "react-icons/ri";
// import { GiHeartInside } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const areaReferences = [
    "#",
    "#about",
    "#experience",
    "#projects",
    // "#activities",
    "#contacts",
  ];
  const icons = [
    <HiHome />,
    <HiUserCircle />,
    <MdHomeRepairService />,
    <FaBook />,
    // <GiHeartInside />,
    <RiMessage2Fill />,
  ];
  return (
    <nav>
      {areaReferences.map((reference, index) => (
        <a
          href={reference}
          onClick={() => setActiveNav(reference)}
          className={activeNav === reference ? "active" : ""}
        >
          {icons[index]}
        </a>
      ))}
    </nav>
  );
};
export default Nav;
