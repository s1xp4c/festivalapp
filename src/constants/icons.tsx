import { FaDungeon } from "react-icons/fa";

export interface IconType {
  [key: string]: React.ElementType;
}

export const icons: IconType = {
  dungeon: FaDungeon,
};

export default icons;
