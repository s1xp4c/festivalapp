import Image from "next/image";
import FaellestivalLogo from "|/logos/FaellestivalLogoWhite.svg";

export default function LogoFull() {
  return (
    <Image
      src={FaellestivalLogo}
      width={500}
      height={500}
      alt="Fællestival Tekst-logo svg"
    />
  );
}
