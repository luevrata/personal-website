import React from "react";
import "./footer.css";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  const areaReferences = [
    "#",
    "#about",
    "#experience",
    "#projects",
    "#activities",
    "#contacts",
  ];

  const areaNames = [
    "Home",
    "About",
    "Experience & Education",
    "Projects",
    "Outside of Work",
    "Contact",
  ];
  return (
    <footer>
      <a href="#" className="footer__logo">
        Elizaveta Firsova
      </a>

      <ul className="permlinks">
        {areaReferences.map((reference, index) => (
          <li>
            <a href={reference}>{areaNames[index]}</a>
          </li>
        ))}
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/luevrata" target="_blank">
          <IoLogoGithub />
        </a>
        <a href="https://www.linkedin.com/in/evrata/" target="_blank">
          <IoLogoLinkedin />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100082183097016"
          target="_blank"
        >
          <BsFacebook />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
