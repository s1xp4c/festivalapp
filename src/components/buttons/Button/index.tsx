import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
}

const Button: React.FunctionComponent<Props> = (props) => {
  const { children, ...rest } = props;
  return (
    <button
      {...rest}
      className={clsx(
        "transition ease-in-out delay-150 text-sm font-bold rounded-md text-foreground bg-gradient-to-b from-indigo-500/30 to-indigo-900 focus:outline-none duration-300 hover:bg-indigo-600/60 flex items-center justify-center  py-[.025rem] px-2",
        rest.className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
