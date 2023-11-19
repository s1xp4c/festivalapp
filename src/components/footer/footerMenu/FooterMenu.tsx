"use client";
import Image from "next/image";
import { BsFillChatFill } from "react-icons/bs";
import { FaShoppingCart, FaInfo, FaGuitar } from "react-icons/fa";
import { FaHouseFlag } from "react-icons/fa6";
import TinyDancingMan from "|/logos/TinyDancingMan-color-favicon.png";
import { motion } from "framer-motion";
import { cn } from ":/lib/utils";

function BottomMenu() {
  const icons = [FaShoppingCart, FaInfo, BsFillChatFill, FaGuitar, FaHouseFlag];
  return (
    <motion.div
      className="w-full flex items-center p-4 pb-0 shadow-md justify-between bottom-0.5 absolute"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: index * 0.1 }}
          className="border-t-2 rounded-full border-indigo-700"
        >
          {Icon === BsFillChatFill ? (
            <>
              <BsFillChatFill
                size={38}
                className={cn("transform -scale-x-100 m-4")}
              />
              <Image
                src={TinyDancingMan}
                width={26}
                height={26}
                alt="Fællestival Tiny Dancing Man Logo"
                className="z-10 ml-1 mt-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              />
            </>
          ) : (
            <Icon size={25} className={cn("m-3")} />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

export default BottomMenu;
