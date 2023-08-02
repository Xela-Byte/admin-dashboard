"use client";

import Logo from "@/public/assets/reUSD.png";
import Image from "next/image";
import { FiBell } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { container, item } from "@/animations/navbar";
import { useRouter } from "next/navigation";
import { linkArray } from "@/data/Links";

type Props = {};

const Navbar = (props: Props) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const router = useRouter();

  const handleResize = () => {
    if (window.innerWidth > 1024) {
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
    <>
      <div className="w-[95%] ml-[2.5%] rounded-lg mt-5 p-5 bg-green-600 text-white flex items-center justify-between">
        <button
          type="button"
          aria-label="Menu-Open"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}>
          <AiOutlineMenu size={30} />
        </button>

        <div className="flex space-x-5 items-center">
          <Image src={Logo} className="w-10 h-10 rounded-full" alt="" />
          {/* User Tab */}
          <div className="flex flex-col justify-center leading-5">
            <p className="font-medium text-lg">Femi Bright</p>
            <p className="font-thin text-sm">Admin</p>
          </div>
        </div>

        {/* Icon */}
        <div>
          <FiBell size={30} />
        </div>
      </div>
      <AnimatePresence>
        {toggleMenu && (
          <motion.div
            initial={{
              opacity: 0,
              top: 0,
              left: "-100vw",
            }}
            animate={{
              opacity: 1,
              top: 0,
              left: 0,
            }}
            exit={{
              opacity: 0,
              top: 0,
              left: "-100vw",
            }}
            className="w-3/4 lg:w-1/4 h-screen rounded-md bg-white top-0 fixed lg:absolute lg:h-4/5 lg:mt-[10%] xl:mt-[7%] lg:ml-11 pt-10 px-3 z-10">
            <div className="flex w-full">
              <button
                aria-label="Menu-Close"
                type="button"
                className={"ml-auto mb-10"}
                onClick={() => {
                  setToggleMenu(!toggleMenu);
                }}>
                <AiOutlineClose size={25} />
              </button>
            </div>

            <motion.ul
              className="w-full space-y-5"
              variants={container}
              initial="hidden"
              animate="show">
              {linkArray.map((link) => {
                const { id, linkName, linkSlug } = link;
                return (
                  <motion.li
                    onClick={() => {
                      router.push(`/admin/${linkSlug}`);
                      setToggleMenu(!toggleMenu);
                    }}
                    key={id}
                    variants={item}
                    className="w-full bg-gray-100 p-3 rounded-md">
                    <p className="text-lg">{linkName}</p>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
