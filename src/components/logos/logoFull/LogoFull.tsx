import Image from "next/image";
import FaellestivalLogo from "|/logos/faellestival-logo-white.png";

export default function LogoFull() {
  return (
    <Image
      src={FaellestivalLogo}
      width={500}
      height={500}
      alt="Fællestival Tekst-logo"
    />
  );
}
