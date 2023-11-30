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
import Countdown from ":/components/countdown/Countdown/Countdown";

const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const toggleOpen = () => setOpen((prev) => !prev);

  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) toggleOpen();
  }, [pathname]);

  return (
    <div className="bg-background/80 mx-2 mt-2">
      <div className="bg-gradient-to-b to-muted/0 from-indigo-500/20 sm:hidden w-full border-b-[.1rem] border-x-[.1rem] rounded-lg border-indigo-700 ">
        <div className="grid grid-cols-5 justify-between py-2">
          <SettingsSheet>
            <div className="text-left ml-3 col-span-1 ">
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
          <div className="text-center col-span-3 mx-auto my-auto ">
            <Link href={"/"} className="">
              <LogoFull />
            </Link>
          </div>

          <Sheet>
            <div className="text-right  mr-3 col-span-1">
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
      <Countdown />
    </div>
  );
};

export default MobileNav;
