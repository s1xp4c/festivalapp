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
      className=" w-full flex items-center z-50 p-4 pb-1 shadow-md justify-between bottom-0 absolute mt-auto bg-gradient-to-b from-muted/0 to-indigo-500/20  border-indigo-700 "
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
          className="bg-gradient-to-r from-muted/0 to-indigo-500/50 border-t-[.1rem] border-l-[.1rem] rounded-full border-indigo-700"
        >
          {Icon === BsFillChatFill ? (
            <>
              <Link href={href}>
                <BsFillChatFill
                  size={28}
                  className={cn("transform -scale-x-100 m-2 ")}
                />
                <Image
                  src={TinyDancingMan}
                  width={18}
                  height={18}
                  alt="Fællestival Tiny Dancing Man Logo"
                  className="z-10 ml-[.15rem] mt-[0.32rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </Link>
            </>
          ) : (
            <Link href={href}>
              <Icon size={18} className={cn("m-2")} />
            </Link>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default BottomMenu;
