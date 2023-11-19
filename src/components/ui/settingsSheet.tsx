"use client";

import * as React from "react";
import * as SettingsSheetPrimitive from "@radix-ui/react-dialog";
// import { Cross2Icon } from "@radix-ui/react-icons";
import { FaSkullCrossbones } from "react-icons/fa6";

import { cva, type VariantProps } from "class-variance-authority";

import { cn } from ":/lib/utils";

const SettingsSheet = SettingsSheetPrimitive.Root;

const SettingsSheetTrigger = SettingsSheetPrimitive.Trigger;

const SettingsSheetClose = SettingsSheetPrimitive.Close;

const SettingsSheetPortal = SettingsSheetPrimitive.Portal;

const SettingsSheetOverlay = React.forwardRef<
  React.ElementRef<typeof SettingsSheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SettingsSheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SettingsSheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-background/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SettingsSheetOverlay.displayName = SettingsSheetPrimitive.Overlay.displayName;

const settingssheetVariants = cva(
  "fixed z-50 gap-4 bg-background/80 p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom:
          "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right:
          "inset-y-0 right-0 h-full w-full border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface SettingsSheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SettingsSheetPrimitive.Content>,
    VariantProps<typeof settingssheetVariants> {}

const SettingsSheetContent = React.forwardRef<
  React.ElementRef<typeof SettingsSheetPrimitive.Content>,
  SettingsSheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SettingsSheetPortal>
    <SettingsSheetOverlay />
    <SettingsSheetPrimitive.Content
      ref={ref}
      className={cn(settingssheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SettingsSheetPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
        <FaSkullCrossbones className="h-6 w-6" />
        <span className="sr-only">Close</span>
      </SettingsSheetPrimitive.Close>
    </SettingsSheetPrimitive.Content>
  </SettingsSheetPortal>
));
SettingsSheetContent.displayName = SettingsSheetPrimitive.Content.displayName;

const SettingsSheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
SettingsSheetHeader.displayName = "SettingsSheetHeader";

const SettingsSheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
SettingsSheetFooter.displayName = "SettingsSheetFooter";

const SettingsSheetTitle = React.forwardRef<
  React.ElementRef<typeof SettingsSheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SettingsSheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SettingsSheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));
SettingsSheetTitle.displayName = SettingsSheetPrimitive.Title.displayName;

const SettingsSheetDescription = React.forwardRef<
  React.ElementRef<typeof SettingsSheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SettingsSheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SettingsSheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
SettingsSheetDescription.displayName =
  SettingsSheetPrimitive.Description.displayName;

export {
  SettingsSheet,
  SettingsSheetPortal,
  SettingsSheetOverlay,
  SettingsSheetTrigger,
  SettingsSheetClose,
  SettingsSheetContent,
  SettingsSheetHeader,
  SettingsSheetFooter,
  SettingsSheetTitle,
  SettingsSheetDescription,
};
