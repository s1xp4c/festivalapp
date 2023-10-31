"use client";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from ":/components/ui/burgerSheet";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LogoFull from ":/components/logos/logoFull/LogoFull";

const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) toggleOpen();
  }, [pathname]);

  return (
    <div className="sm:hidden w-full border-b-2 border-indigo-700/50 rounded-full pb-1">
      <Sheet>
        <div className="grid grid-cols-5 justify-between mx-2">
          <div className="text-left mt-4 ml-2 col-span-1">
            <SheetTrigger className="" onClick={toggleOpen}>
              <IoSettingsSharp size={28} />
            </SheetTrigger>
          </div>
          <div className="text-center col-span-3 p-2">
            <Link href={"/"} className="mt-2 flex font-semibold">
              <LogoFull />
            </Link>
          </div>

          <div className="text-right mt-5 mr-2 col-span-1">
            <SheetTrigger className="" onClick={toggleOpen}>
              <FaBarsStaggered size={28} />
            </SheetTrigger>
          </div>
        </div>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Fuuuuuck</SheetTitle>
            <SheetDescription>Smid FællesStuff her!</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
