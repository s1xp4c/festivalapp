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
        "transition ease-in-out delay-150 text-sm font-bold rounded-md text-foreground  focus:outline-none duration-300 hover:bg-indigo-600/60 flex items-center justify-center  py-[.025rem] px-2 drop-shadow-xl hover:drop-shadow-xl",
        rest.className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
