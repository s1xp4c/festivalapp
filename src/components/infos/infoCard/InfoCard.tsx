import React, { useState } from "react";
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
  const [isClamped, setIsClamped] = useState(true);
  const IconOrPath = allIcons[iconName];

  if (!IconOrPath) {
    console.error(`Icon "${iconName}" not found`);
    return null; // or some fallback UI
  }

  const renderIcon = () => {
    if (typeof IconOrPath === "string") {
      // It's an SVG file path
      return <Image src={IconOrPath} width={28} height={28} alt={iconName} />;
    } else {
      // It's a React component
      const IconComponent = IconOrPath;
      return <IconComponent size={28} />;
    }
  };

  const isIdOdd = parseInt(floatImage.id) % 2 !== 0;
  const floatClass = isIdOdd ? "float-left mr-3" : "float-right ml-3";
  const imgURL = floatImage.src;

  const handleClick = () => {
    onclick;
  };

  const textClass = isClamped ? lineClamp : "";

  const cardClass = clsx(
    "w-full select-none rounded-lg bg-gradient-to-b from-muted/0 to-indigo-500/20 no-underline outline-none focus:shadow-md",
    isClamped ? "h-auto" : "h-full", // Dynamically adjust height
    classes?.root
  );
  return (
    <div id={id} className={cardClass}>
      <div className="flex gap-4 items-center pb-1">
        {renderIcon()}
        <span className="rounded-full flex text-md text-center justify-center font-medium bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          {title}
        </span>
      </div>
      <div className="my-2">
        <Image
          key={floatImage.id}
          src={imgURL}
          width={floatImage.width}
          height={floatImage.height}
          alt={floatImage.alt}
          className={clsx("rounded-md ", floatClass)}
        />
        <div className="text-[.75rem]/[.8] md:text-lg w-full text-foreground">
          <p
            className={clsx(
              " text-[.75rem] leading-snug text-muted-foreground text-left whitespace-pre-line",
              textClass
            )}
          >
            {text}
          </p>
        </div>
      </div>
      <div className="flex justify-between mb-1">
        <div className="w-20">
          <CallToActionButton onClick={() => setIsClamped(!isClamped)}>
            {isClamped ? (
              <div className="text-[.65rem] whitespace-pre-wrap after:content-['_▲']">
                {"Fold ud   "}
              </div>
            ) : (
              <div className="text-[.65rem] whitespace-pre-wrap after:content-['_▼']">
                {"Klap i     "}
              </div>
            )}
          </CallToActionButton>
        </div>
        <div className="w-20">
          <CallToActionButton onClick={() => handleClick}>
            <Link href={href} className="text-[.65rem] ">
              {btnText}
            </Link>
          </CallToActionButton>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
