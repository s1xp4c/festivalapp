// PriceHeader.tsx

import React from "react";
import PriceHeaderCard from ":/components/price/priceHeaderCard/PriceHeaderCard";
import CallToActionButton from "../../buttons/callToActionButton/CtaButtonWrapper";
import Link from "next/link";

export interface PriceHeaderProps {
  title: string;
  subtitle1: string;
  subtitle2: string;
  headerInfoLinks: {
    id: string;
    title: string;
    href: string;
    subText: string;
    rate: number;
    currency: string;
    interval: string;
  }[];
  ctaBtnInfo: {
    id: string;
    title: string;
    href: string;
  };
  headerInfoIcon: React.ElementType;
  onClick: () => void;
}

const PriceHeader: React.FC<PriceHeaderProps> = ({
  title,
  subtitle1,
  subtitle2,
  headerInfoLinks,
  ctaBtnInfo,
  headerInfoIcon: IconComponent,
}) => {
  return (
    <div className="grid grid-cols-[.70fr_1fr] gap-3 p-0 bg-none py-2">
      {/* Left side */}
      <div className="flex  flex-col justify-start rounded-lg bg-gradient-to-b from-muted/0 to-indigo-500/20 p-2">
        <div className="flex items-center flex-col justify-between">
          <div className="flex w-full">
            <IconComponent className="text-2xl text-left" />
            <p className="text-md font-medium ml-auto">{title}</p>
          </div>
        </div>
        <p className="mt-auto text-[.6rem] leading-tight text-muted-foreground text-left">
          {subtitle1}
        </p>
        <p className="text-[.6rem] leading-tight text-muted-foreground text-left mt-1">
          {subtitle2}
        </p>
        <CallToActionButton onClick={() => onclick}>
          <Link href={ctaBtnInfo.href} className="text-[.65rem] ">
            {ctaBtnInfo.title}
          </Link>
        </CallToActionButton>
      </div>

      {/* Right side */}
      <div className="border-b-2 border-r-[.01rem] mt-1 border-r-indigo-500   rounded-lg p-2 h-full flex flex-col justify-evenly">
        {headerInfoLinks.map((link) => (
          <PriceHeaderCard
            key={link.id}
            title={link.title}
            subText={link.subText}
            href={link.href}
            rate={link.rate}
            currency={link.currency}
            interval={link.interval}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceHeader;
