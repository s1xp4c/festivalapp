import { FaDungeon } from "react-icons/fa";
import { GiCosmicEgg } from "react-icons/gi";
import { TbChristmasTree } from "react-icons/tb";
import { FaInfoCircle } from "react-icons/fa";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaUnity } from "react-icons/fa6";
import { FaBitcoin } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

export type IconType = React.ElementType | string;

export const allIcons: Record<string, IconType> = {
  FaDungeon,
  GiCosmicEgg,
  TbChristmasTree,
  FaInfoCircle,
  FaPeopleCarryBox,
  FaUnity,
  FaBitcoin,
  FaLocationDot,

  TinyDancingManSvg: "/icons/TinyDancingMan.svg",
};

export default allIcons;
