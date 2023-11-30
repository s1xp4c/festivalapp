import { cn } from ":/lib/utils";
import { ReactNode } from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto my-auto w-full min-h-full sm:max-w-screen-xl px-2 sm:px-10 md:px-20 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
