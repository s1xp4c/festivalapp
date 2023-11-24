import Image from "next/image";
import FaellestivalLogo from "|/logos/faellestival-logo-white.png";

export default function LogoFull() {
  return (
    <Image
      src={FaellestivalLogo}
      width={"154"}
      height={"154"}
      alt="Picture of the author"
      className=""
    />
  );
}
