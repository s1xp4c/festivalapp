"use client";
import * as React from "react";
import { FaMoon, FaSun, FaAdjust } from "react-icons/fa";
import { useTheme } from "next-themes";
import { Button } from ":/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from ":/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isSystem = theme === "system";
  const currentTheme = isSystem ? resolvedTheme : theme;

  // Define a type for theme names
  type ThemeName = "light" | "dark" | "system";

  // Function to apply dimming based on the current theme
  const dimIfNotCurrent = (iconTheme: ThemeName) =>
    iconTheme === theme ? "opacity-100" : "opacity-40";

  // Classes for the system icon to match the theme
  const systemIconClass = `h-[1.35rem] sm:h-[1rem] w-[1.35rem] sm:w-[1rem] transition-all dark:rotate-0 dark:scale-100  ${
    isSystem ? "text-current -ml-5" : "opacity-40"
  } dark:text-foreground`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size={"icon"}>
          <FaSun
            className={`h-[1.35rem] sm:h-[1rem] w-[1.35rem] sm:w-[1rem] rotate-0 scale-100 dark:rotate-90 dark:scale-0 transition-all ${
              isSystem ? "opacity-0" : ""
            }`}
          />
          <FaMoon
            className={`absolute h-[1.35rem] sm:h-[1rem] w-[1.35rem] sm:w-[1rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 ${
              isSystem ? "opacity-0" : ""
            }`}
          />
          {isSystem && <FaAdjust className={systemIconClass} />}
          <span className="sr-only">Skift farvetema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="mt-20 rounded-lg bg-popover/90 min-w-[30vw] w-full"
        side="left"
      >
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <div className="grid grid-cols-2 w-full">
            <FaSun
              className={`h-[1.1rem] sm:h-[1.3rem] w-[1.1rem] sm:w-[1.3rem] mt-0.5 ${dimIfNotCurrent(
                "light"
              )}`}
            />
            <div className={`text-right ${dimIfNotCurrent("light")}`}>
              Lyst Tema
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <div className="grid grid-cols-2 w-full">
            <FaMoon
              className={`h-[1rem] sm:h-[1.3rem] w-[1rem] sm:w-[1.3rem] mt-0.5 ${dimIfNotCurrent(
                "dark"
              )}`}
            />
            <div className={`text-right ${dimIfNotCurrent("dark")}`}>
              Mørkt Tema
            </div>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <div className="grid grid-cols-2 w-full">
            <FaAdjust
              className={`h-[1rem] sm:h-[1.3rem] w-[1rem] sm:w-[1.3rem] mt-0.5 ${dimIfNotCurrent(
                "system"
              )}`}
            />
            <div className={`text-right ${dimIfNotCurrent("system")}`}>
              Systemsat
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
