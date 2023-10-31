import Image from "next/image";
import TinyDancingMan from "|/logos/TinyDancingMan-color-favicon.png";
export default function LogoTiny() {
  return (
    <Image
      src={TinyDancingMan}
      width={100}
      height={100}
      alt="Fællestival Tiny Dancing Man Logo"
    />
  );
}
