"use client";

import * as React from "react";
import Link from "next/link";
import { isMobile } from "react-device-detect";
import { cn } from ":/lib/utils";
import tinyLogo from "|/icons/TinyDancingMan-color-favicon.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from ":/components/ui/navigation-menu";
import Image from "next/image";
import { ThemeToggle } from ":/components/themeToggle/ThemeToggle";

import navigationData from ":/constants/Navigation.json";
import MobileNav from ":/components/navigation/mobileNav/MobileNav";
import { useEffect, useState } from "react";
// import Countdown from ":/components/countdown/Countdown/Countdown";

export function DesktopNav() {
  const [useMobile, setUseMobile] = useState(false);

  useEffect(() => {
    if (isMobile) setUseMobile(true);
  }, []);

  return (
    <>
      {useMobile ? (
        <nav className="z-50 fixed top-0 w-full sm-hidden block">
          <MobileNav />
          {/* <Countdown /> */}
        </nav>
      ) : (
        <nav className="z-50 fixed top-0 sm:text-lg hidden sm:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{"Musik"}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="memory/"
                        >
                          <Image
                            src={tinyLogo}
                            width={30}
                            height={30}
                            alt="Tiny Dancing Man Logo"
                          />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            {"Fællestival's musikere"}
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            {
                              "En lang række af frække kunstnere har besøgt Snævren gennem årene. Ta´ en tur ned ad memory lane her."
                            }
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="booking/" title="Booking 2024">
                      {
                        "Find bookingformular, SoMe info, baggear, tech specs og alt andet i skal bruge omking booking her."
                      }
                    </ListItem>
                    <ListItem href="program/" title="Program 2024">
                      {
                        "Her finder du programmet med spilletider for alle kunstnere på Fællestival 2024."
                      }
                    </ListItem>
                    <ListItem href="lineup/" title="Lineup 2024">
                      {
                        "Lineup af kunstnere med band channels, SoMe links, pics og andet frækt for Fællestival 2024."
                      }
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{"Components"}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {navigationData.components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {"Documentation"}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ThemeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      )}
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
