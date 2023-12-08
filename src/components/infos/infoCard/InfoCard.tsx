import React from "react";
import clsx from "clsx";
import CallToActionButton from ":/components/buttons/callToActionButton/CtaButtonWrapper";
import { allIcons } from ":/constants/allIcons";
import Image from "next/image";
import Link from "next/link";

interface InfoProps {
  id: string;
  title: string;
  text: string;
  floatImage: {
    id: string;
    width: number;
    height: number;
    src: string;
    alt: string;
  };
  lineClamp: string;
  btnText: string;
  href: string;
  iconName: string;
  classes?: Partial<Record<"root", string>>;
}

const InfoCard: React.FunctionComponent<InfoProps> = ({
  iconName,
  id,
  title,
  text,
  floatImage,
  lineClamp,
  btnText,
  href,
  classes,
}) => {
  const IconOrPath = allIcons[iconName];

  if (!IconOrPath) {
    console.error(`Icon "${iconName}" not found`);
    return null; // or some fallback UI
  }

  const renderIcon = () => {
    if (typeof IconOrPath === "string") {
      // It's an SVG file path
      return <Image src={IconOrPath} width={36} height={36} alt={iconName} />;
    } else {
      // It's a React component
      const IconComponent = IconOrPath;
      return <IconComponent size={28} />;
    }
  };

  const isIdOdd = parseInt(floatImage.id) % 2 !== 0;
  const floatClass = isIdOdd ? "float-left mr-2" : "float-right ml-2";
  const imgURL = floatImage.src;

  const handleClick = () => {
    onclick;
  };

  return (
    <div className="my-0" id={id}>
      <div
        className={clsx(
          "h-full w-full select-none flex flex-none rounded-lg bg-gradient-to-b from-muted/0 to-indigo-500/20 p-0 no-underline outline-none focus:shadow-md",
          classes?.root
        )}
      >
        <div className="flex gap-2 items-center mb-2">
          {renderIcon()}
          <span className="rounded-full flex mb-0 mt-0 text-xs text-center justify-center font-medium">
            {title}
          </span>
        </div>
        <div className="">
          <Image
            key={floatImage.id}
            src={imgURL}
            width={floatImage.width}
            height={floatImage.height}
            alt={floatImage.alt}
            className={clsx("rounded-md mb-2", floatClass)}
          />
          <div className="text-[.6rem]/[.8] md:text-lg w-full mt-0 mb-1 text-foreground">
            <p
              className={clsx(
                " text-[.6rem] leading-snug text-muted-foreground text-left",
                lineClamp
              )}
            >
              {text}
            </p>
            <CallToActionButton onClick={() => handleClick}>
              <Link href={href} className="text-[.65rem] ">
                {btnText}
              </Link>
            </CallToActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
