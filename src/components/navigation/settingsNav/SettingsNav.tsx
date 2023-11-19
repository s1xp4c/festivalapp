"use client";

import * as React from "react";
import { cn } from ":/lib/utils";
import { ThemeToggle } from ":/components/themeToggle/ThemeToggle";

export function SettingsNav() {
  return (
    <>
      <nav className="z-10 text-md mt-8">
        <ul className="grid gap-3 p-0 w-[95vw] grid-cols-[.75fr_1fr] bg-none">
          <div className={cn("row-span-3 bg-none")}>
            <div className="flex h-auto w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-2 no-underline outline-none focus:shadow-md">
              <div className="flex mb-2 mt-0 text-md font-medium -ml-2">
                <ThemeToggle />
                <p className="mt-1 ml-4">{"Farvetema"}</p>
              </div>
              <p className="text-xs leading-tight text-muted-foreground">
                {
                  "Klik på ikonet for at ændre farvetema ml. mørk, lys eller system indstillinger."
                }
                <br></br>
                <br></br>
                {
                  "Til højre finder du de mere kedelige settings af slagsen, men de skal jo ås ha' lov at lege med."
                }
              </p>
            </div>
          </div>
          <div className="mr-4">
            <ListItem className="mb-3" href="security/" title="Sikkerhed">
              {
                "Her kan du finde oplysninger om håndtering af dine info og ændre indstillinger."
              }
            </ListItem>
            <ListItem className="mb-3" href="terms/" title="Det tørre info">
              {
                "Her finder du ting som GDPR regler og alt det andet tørre vi desværre ikke kommer udenom."
              }
            </ListItem>
            <ListItem href="support/" title="Support">
              {
                "Support forum, FAQ, kontakt support og meget mere omkring eventuelle fejl med appen."
              }
            </ListItem>
          </div>
        </ul>
      </nav>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="text-xs font-small leading-none">{title}</div>
        <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
          {children}
        </p>
      </a>
    </li>
  );
});
ListItem.displayName = "ListItem";
