// HeaderInfoCard.tsx
import React from "react";
import Link from "next/link";

interface PriceHeaderCardProps {
  title: string;
  href: string;
  subText: string;
  rate: number;
  currency: string;
  interval: string;
}

const PriceHeaderCard: React.FC<PriceHeaderCardProps> = ({
  title,
  href,
  subText,
  rate,
  currency,
  interval,
}) => {
  return (
    <li className=" block rounded-md hover:bg-accent hover:text-accent-foreground my-1 focus:bg-accent focus:text-accent-foreground bg-gradient-to-b from-muted/0 to-indigo-500/20 ">
      <Link href={href} passHref>
        <div className="space-y-0 no-underline flex flex-col">
          <div className="flex justify-between  items-center w-full">
            <span className="text-xs font-medium">{title}</span>
            <div className="text-right flex">
              <div className="text-[.55rem]  font-bold text-purple-600/80">
                {rate}
              </div>
              <div className="text-[.55rem]   font-bold text-violet-600/80">
                {" "}
                {currency}
              </div>
              <div className="text-[.55rem] ml-[.11rem] font-bold text-indigo-600/80">
                {" "}
                {interval}
              </div>
            </div>
          </div>
          <p className="line-clamp-2 text-[.6rem] leading-snug text-muted-foreground text-left">
            {subText}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default PriceHeaderCard;
