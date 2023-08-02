"use client";

import Logo from "@/public/assets/reUSD.png";
import Image from "next/image";
import { FiBell } from "react-icons/fi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { container, item } from "@/animations/navbar";
import { useRouter } from "next/navigation";
import { linkArray } from "@/data/Links";

type Props = {};

const Navbar = (props: Props) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <div className="w-[95%] ml-[2.5%] mt-5 p-5 bg-white flex items-center justify-between">
        <button
          type="button"
          aria-label="Menu-Open"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}>
          <AiOutlineMenu size={30} />
        </button>

        <Image src={Logo} className="w-10 h-10 rounded-full" alt="" />
        {/* User Tab */}
        <div className="w-1/2 flex flex-col justify-center leading-5">
          <p className="font-medium text-lg">Xela Oladipupo</p>
          <p className="font-thin text-sm">Admin</p>
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
            className="w-3/4 h-screen bg-white top-0 fixed pt-10 px-3">
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
                    className="w-full bg-gray-100 p-3">
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
