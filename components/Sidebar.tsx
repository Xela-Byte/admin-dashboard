import { AnimatePresence } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";
import { container, item } from "@/animations/navbar";
import { linkArray } from "@/data/Links";
import { useRouter } from "next/navigation";
import Logo from "@/public/assets/reUSD.png";
import Image from "next/image";

type Props = {
  toggleMenu: boolean;
  setToggleMenu: (value: boolean) => void;
};

const Sidebar = ({ toggleMenu, setToggleMenu }: Props) => {
  const router = useRouter();

  return (
    <div
      className={`flex flex-col justify-between bg-green-600 text-white lg:w-2/3 xl:w-full lg:sticky lg:-mt-16 top-0 z-20 fixed lg:h-screen h-full w-[300px] transition-transform .3s ease-in-out lg:translate-x-0 ${
        !toggleMenu && "-translate-x-full"
      } `}>
      <nav className="flex flex-col p-3 lg:sticky top-0 lg:top-16">
        <button
          type="button"
          aria-label="Menu_button"
          className="self-end w-10 h-10 rounded-full bg-green-500 flex items-center justify-center lg:hidden"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}>
          <AiOutlineClose size={20} />
        </button>

        <AnimatePresence>
          {toggleMenu && (
            <div className="pt-8 lg:pt-0">
              <Image src={Logo} className="w-10 h-10 mx-7 mb-10" alt="logo" />
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
                        window.innerWidth < 1024 && setToggleMenu(!toggleMenu);
                      }}
                      key={id}
                      variants={item}
                      className="w-full p-3 lg:px-7 rounded-md cursor-pointer">
                      <p className="text-lg text-white">{linkName}</p>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
export default Sidebar;
