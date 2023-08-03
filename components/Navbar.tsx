"use client";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import Person from "@/public/assets/person.jpg";
import { FiBell } from "react-icons/fi";
import { useEffect } from "react";

type Props = {
  toggleMenu: boolean;
  setToggleMenu: (value: boolean) => void;
};

const Navbar = ({ toggleMenu, setToggleMenu }: Props) => {
  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setToggleMenu(true);
    } else {
      setToggleMenu(false);
    }
  };

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav
      className={`bg-white text-black flex items-center justify-between w-screen fixed z-10 px-4 shadow-sm h-20`}>
      <button
        className="lg:hidden"
        onClick={() => {
          setToggleMenu(!toggleMenu);
        }}>
        <AiOutlineMenu className="h-6 w-6" />
      </button>

      <div className="flex items-center space-x-5 lg:space-x-10 lg:ml-auto lg:px-10">
        {/* Icon */}
        <div>
          <FiBell size={30} />
        </div>
        <div className="flex space-x-5 items-center lg:mx-auto">
          <Image
            src={Person}
            loading="eager"
            className="w-10 h-10 object-cover rounded-full"
            alt=""
          />
          {/* User Tab */}
          <div className="hidden lg:flex flex-col justify-center leading-5">
            <p className="font-medium text-lg">Femi Bright</p>
            <p className="font-thin text-sm">Admin</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
