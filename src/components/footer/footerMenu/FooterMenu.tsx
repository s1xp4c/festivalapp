"use client";
import Image from "next/image";
import { BsFillChatFill } from "react-icons/bs";
import { FaShoppingCart, FaInfo, FaGuitar } from "react-icons/fa";
import { FaHouseFlag } from "react-icons/fa6";
import TinyDancingMan from "|/logos/TinyDancingMan-color-favicon.png";
import { motion } from "framer-motion";
import { cn } from ":/lib/utils";
import Link from "next/link";

function BottomMenu() {
  const icons: { Icon: React.ElementType; href: string }[] = [
    { Icon: FaShoppingCart, href: "/kurv" },
    { Icon: FaInfo, href: "/info" },
    { Icon: BsFillChatFill, href: "/chat" },
    { Icon: FaGuitar, href: "/musik" },
    { Icon: FaHouseFlag, href: "/butik" },
  ];
  return (
    <motion.div
      className="w-full flex items-center z-50 p-4 pb-1 shadow-md justify-between bottom-0.5 absolute mt-auto"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {icons.map(({ Icon, href }, index) => (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.2 }}
          className="border-t-[.1rem] rounded-full border-indigo-700"
        >
          {Icon === BsFillChatFill ? (
            <>
              <Link href={href}>
                <BsFillChatFill
                  size={30}
                  className={cn("transform -scale-x-100 m-2")}
                />
                <Image
                  src={TinyDancingMan}
                  width={20}
                  height={20}
                  alt="Fællestival Tiny Dancing Man Logo"
                  className="z-10 ml-[.15rem] mt-[0.32rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </Link>
            </>
          ) : (
            <Link href={href}>
              <Icon size={20} className={cn("m-2")} />
            </Link>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default BottomMenu;
