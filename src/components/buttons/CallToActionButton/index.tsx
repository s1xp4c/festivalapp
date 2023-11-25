import React from "react";
import Button from "../Button";

interface AddToCartProps {
  onClick: () => void;
  children: React.ReactNode;
}

const CallToActionButton: React.FC<AddToCartProps> = ({
  onClick,
  children,
}) => {
  return (
    <div className="relative mt-auto text-center inline-flex h-4 bg-gradient-to-br from-indigo-700/60 to-indigo-900/60">
      <Button type="button" className="rounded-md w-full   " onClick={onClick}>
        {children}
      </Button>
      <span className="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-700/40"></span>
      </span>
    </div>
  );
};

export default CallToActionButton;
