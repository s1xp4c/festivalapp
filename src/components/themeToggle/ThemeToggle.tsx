"use client";
import * as React from "react";
import { useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const getIconOpacity = (iconTheme: "light" | "dark" | "system") => {
    if (theme === "system" && iconTheme === systemTheme) return "opacity-100";
    return iconTheme === theme ? "opacity-100" : "opacity-40";
  };

  const TriggerIcon = () => {
    if (theme === "system")
      return <FaAdjust className="h-4 w-4 transition-all" />;
    if (theme === "light") return <FaSun className="h-4 w-4 transition-all" />;
    if (theme === "dark") return <FaMoon className="h-4 w-4 transition-all" />;
    // Default case, should not happen since theme is initialized
    return <FaAdjust className="h-4 w-4 transition-all" />;
  };

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="-mt-2 -ml-3" asChild>
        <Button variant="ghost" size={"icon"}>
          <TriggerIcon />
          <span className="sr-only">Skift farvetema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="mt-20 rounded-lg bg-popover/90 min-w-[30vw] w-full"
        side="left"
      >
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`flex items-center ${getIconOpacity("system")}`}
        >
          <FaAdjust className="h-3 w-3 transition-all mr-2" />
          Systemsat
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`flex items-center ${getIconOpacity("light")}`}
        >
          <FaSun className="h-3 w-3 transition-all mr-2" />
          Lyst Tema
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`flex items-center ${getIconOpacity("dark")}`}
        >
          <FaMoon className="h-3 w-3 transition-all mr-2" />
          Mørkt Tema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
