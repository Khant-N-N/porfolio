import { useState } from "react";
import { styles } from "../style";
import { Link } from "react-router-dom";
import logo from "../assets/logo-y.png";
import { menu } from "../assets";
import { close } from "../assets";
import { navLinks } from "../constants/constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-14 h-auto object-contain" />
          <p className="text-white text-[18px]">Khant Nyi Nyi</p>
        </Link>
        <ul className="sm:flex gap-10 text-[18px] hidden">
          {navLinks.map((link) => (
            <li
              onClick={() => setActive(link.title)}
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white font-medium cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
            className="w-[28px] h-[28px] object-contain cursor-pointer"
          />
          <div
            className={`${
              !toggle ? "scale-0" : "scale-100"
            } transition-all p-6 black-gradient absolute top-16 right-1 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="flex flex-col gap-6 text-[18px]">
              {navLinks.map((link) => (
                <li
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white font-medium cursor-pointer`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
