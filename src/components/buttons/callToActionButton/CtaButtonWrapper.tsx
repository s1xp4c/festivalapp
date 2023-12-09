import React from "react";
import Button from ":/components/buttons/button/Button";

interface AddToCartProps {
  onClick: () => void;
  children: React.ReactNode;
}

const CallToActionButton: React.FC<AddToCartProps> = ({
  onClick,
  children,
}) => {
  return (
    <div className="relative mt-auto text-center inline-flex w-full">
      <Button
        type="button"
        className=" w-full bg-gradient-to-r from-muted/0 to-indigo-500/50 border-t-[.1rem] border-l-[.1rem] rounded-md border-indigo-700 "
        onClick={onClick}
      >
        {children}
      </Button>
      {/* <span className="flex absolute h-2 w-2 top-0 right-0 -mt-1 -mr-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-700/40"></span>
      </span> */}
    </div>
  );
};

export default CallToActionButton;
