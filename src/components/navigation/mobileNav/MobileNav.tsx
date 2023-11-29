"use client";
import { FaUserNinja } from "react-icons/fa";
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
    <div className="">
      <div className="bg-gradient-to-b from-muted/0 to-indigo-500/20 sm:hidden w-full border-b-[.1rem] border-indigo-700 ">
        <div className="grid grid-cols-5 justify-between">
          <SettingsSheet>
            <div className="text-left mt-4 ml-3 col-span-1 ">
              <SettingsSheetTrigger>
                <IoSettings
                  size={24}
                  color={"gradient-to-b indigo-700/80 to foreground"}
                />
              </SettingsSheetTrigger>
            </div>
            <SettingsSheetContent side="left">
              <SettingsSheetTitle className="text-center mt-8">
                App Indstillingsgøgl
              </SettingsSheetTitle>
              <SettingsNav />
            </SettingsSheetContent>
          </SettingsSheet>
          <div className="text-center col-span-3 mx-auto my-auto mt-[.85rem]">
            <Link href={"/"} className="">
              <LogoFull />
            </Link>
          </div>

          <Sheet>
            <div className="text-right mt-4 mr-3 col-span-1">
              <SheetTrigger className="user-menu" onClick={toggleOpen}>
                <FaUserNinja size={24} />
              </SheetTrigger>
            </div>

            <SheetContent>
              <SheetHeader className="mt-10">
                <SheetTitle>💜 Kom indenfor 💜</SheetTitle>
                <SheetDescription></SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
