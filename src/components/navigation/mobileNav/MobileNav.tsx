"use client";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from ":/components/ui/burgerSheet";
import {
  SettingsSheet,
  SettingsSheetTrigger,
  SettingsSheetContent,
  SettingsSheetTitle,
} from ":/components/ui/settingsSheet";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import LogoFull from ":/components/logos/logoFull/LogoFull";
import { SettingsNav } from ":/components/navigation/settingsNav/SettingsNav";

const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) toggleOpen();
  }, [pathname]);

  return (
    <div className="px-2">
      <div className="sm:hidden w-full border-b-2 border-indigo-700 rounded-full">
        <div className="grid grid-cols-5 justify-between">
          <SettingsSheet>
            <div className="text-left mt-5 ml-3 col-span-1">
              <SettingsSheetTrigger>
                <IoSettings size={28} />
              </SettingsSheetTrigger>
            </div>
            <SettingsSheetContent side="left">
              <SettingsSheetTitle className="text-center mt-8">
                App Indstillingsgøgl
              </SettingsSheetTitle>
              <SettingsNav />
            </SettingsSheetContent>
          </SettingsSheet>
          <div className="text-center col-span-3 p-2">
            <Link href={"/"} className="mt-2 flex font-semibold">
              <LogoFull />
            </Link>
          </div>

          <Sheet>
            <div className="text-right mt-5 mr-3 col-span-1">
              <SheetTrigger className="user-menu" onClick={toggleOpen}>
                <FaBarsStaggered size={28} />
              </SheetTrigger>
            </div>

            <SheetContent>
              <SheetHeader>
                <SheetTitle>Fuuuuuck</SheetTitle>
                <SheetDescription>Smid FællesStuff her!</SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
