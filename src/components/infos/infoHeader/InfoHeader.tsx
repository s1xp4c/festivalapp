import React from "react";
import InfoHeaderCard from ":/components/infos/infoHeaderCard/InfoHeaderCard";
import CallToActionButton from "../../buttons/callToActionButton/CtaButtonWrapper";
import Link from "next/link";

export interface InfoHeaderProps {
  title: string;
  subtitle1: string;
  subtitle2: string;
  headerInfoIcon: React.ElementType;
  onClick: () => void;
}

const InfoHeader: React.FC<InfoHeaderProps> = ({
  title,
  subtitle1,
  subtitle2,
  // eventData,
  // ctaBtnData,
  // headerInfoIcon,
}) => {
  return (
    <div className="grid grid-cols-[1fr_.35fr] gap-3 p-0 bg-none py-2">
      {/* Left side */}
      <div className="flex  flex-col justify-start rounded-lg bg-gradient-to-b from-muted/0 to-indigo-500/20 p-2">
        <div className="flex items-center flex-col justify-between">
          <div className="flex w-full">
            {/* <HeaderIcon className="text-2xl text-left" /> */}
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
          {/* <Link href={ctaBtnData.href} className="text-[.65rem] ">
            {ctaBtnData.title}
          </Link> */}
        </CallToActionButton>
      </div>

      {/* Right side */}
      <div className="border-b-2 border-r-[.01rem] mt-0 border-r-indigo-500   rounded-lg p-2 h-full flex flex-col text-right justify-evenly">
        {/* {eventData.map((data) => (
          <InfoHeaderCard
            key={data.id}
            title={data.title}
            href={data.href}
            date={data.date}
            EventIcon={data.eventIcon}
            active={data.active}
          />
        ))} */}
      </div>
    </div>
  );
};

export default InfoHeader;
